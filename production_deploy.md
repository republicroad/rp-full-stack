# 生产环境部署

```bash
# nginx
wget https://github.com/openresty/openresty/releases/download/v1.25.3.2/openresty-1.25.3.2.tar.gz
apt-get update -y
apt-get install -y libpcre3-dev libssl-dev perl build-essential curl zlib1g-dev libreadline-dev libncurses5-dev libpcre3-dev gcc build-essential

tar -zxvf ./openresty-1.25.3.2.tar.gz
cd  /opt/openresty/openresty-1.25.3.2
./configure
make 
make install

cd /etc/systemd/system
echo "
[Unit]
Description=OpenRestyServer
After=network.target

[Service]
Type=forking
ExecStartPre=/usr/local/openresty/nginx/sbin/nginx -t
ExecStart=/usr/local/openresty/bin/openresty -c /usr/local/openresty/nginx/conf/nginx.conf
ExecReload=/usr/local/openresty/bin/openresty -c /usr/local/openresty/nginx/conf/nginx.conf -s reload
ExecStop=/usr/local/openresty/bin/openresty -s stop
PrivateTmp=true

[Install]
WantedBy=multi-user.target
" > /etc/systemd/system/openresty.service


systemctl daemon-reload 
systemctl unmask openresty 
systemctl enable openresty 
systemctl start openresty


# 把openresty的80端口映射出来
incus config device add second proxy_80_tcp proxy listen=tcp:0.0.0.0:80 connect=tcp:0.0.0.0:80
incus config device show second

#  访问openresty
http://192.168.0.146


# 把前端打包出来的文件放入到openresty的目录中
cd /opt/full-stack-fastapi-template/frontend
cd  dist
cp  -r /opt/full-stack-fastapi-template/frontend/dist/*   /usr/local/openresty/nginx/html


# 重启
systemctl restart openresty

rm -rf nginx.conf.001
grep -v '^#' nginx.conf > nginx.conf.001

# 删除nginx.conf文件中注释行和空行
sed -i '/^#/d;/^$/d' nginx.conf
# 删除一个或多个空格加 # 号的行
sed -i '/[[:blank:]]*#/d' nginx.conf
# 在配置文件中所有不以#开头的行前面添加*符号，注意：以#开头的行不添加
# ^[^#] 对以#号开头的行取反就是非#开头的行，& 是反向引用代表前面的行，然后加*
sed -i 's/^[^#]/*&/g' nginx.conf

cat nginx.conf | sed -e '/[[:blank:]]*#/d' |  sed -e '/^#/d;/^$/d' > nginx.conf.003
```





- nginx 配置文件

  
  
  ```bash
  echo "
  
  worker_processes  1;
  events {
      worker_connections  1024;
  }
  http {
      include       mime.types;
      default_type  application/octet-stream;
      sendfile        on;
      keepalive_timeout  65;
      server {
          listen       80;
          server_name  localhost;
      	log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                        '$status $body_bytes_sent "$http_referer" '
                        '"$http_user_agent" "$http_x_forwarded_for"';
  	    access_log  logs/access.log  main;
          location / {
              root   html;
              index  index.html index.htm;
              try_files $uri $uri/ /index.html;
          }
          location /api {
          	# rewrite ^/prod-api/(.*)$ /api/$1 break;
  	        proxy_pass http://127.0.0.1:8000/api;
          	proxy_set_header X-Forwarded-Proto \$scheme;
  	        proxy_set_header Host \$http_host;
      	    proxy_set_header X-Real-IP \$remote_addr;
      	}
      
          error_page   500 502 503 504  /50x.html;
          location = /50x.html {
              root   html;
          }
      }
  }
  
  
  " > /usr/local/openresty/nginx/conf/nginx.conf
  
  
  # 重启
  systemctl restart openresty
  ```
  
  



