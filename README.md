
# fulltack app

- fastapi
- react


## react

- react-router v6

### install

使用下列命令创建 react app

> npx create-react-app frontend

或者使用代理去加速下载:

> proxychains npx create-react-app frontend  
> all_proxy=http://192.168.1.201:1080/ npx create-react-app frontend  


或者使用 typescript 来创建项目

> npx create-react-app my-app --template typescript

https://create-react-app.dev/docs/adding-typescript/


### install by vite

> npm create vite@latest

```bash
ryefccd@republic:~/workspace/republc-web$ proxychains npm create vite@latest

⠙[proxychains] Strict chain  ...  192.168.1.201:1080  ...  registry.npmjs.org:443  ...  OK

> npx
> create-vite

✔ Project name: … frontend
✔ Select a framework: › React
✔ Select a variant: › TypeScript

Scaffolding project in /home/ryefccd/workspace/republc-web/frontend...

Done. Now run:

  cd frontend
  npm install
  npm run dev
  npm run dev -- --host
```


### react router


## fastpai


### Backend Development

Backend docs: [backend/README.md](./backend/README.md).

### Configure

You can then update configs in the `.env` files to customize your configurations.

Before deploying it, make sure you change at least the values for:

- `SECRET_KEY`
- `FIRST_SUPERUSER_PASSWORD`
- `POSTGRES_PASSWORD`

You can (and should) pass these as environment variables from secrets.

Read the [deployment.md](./deployment.md) docs for more details.

### Input Variables

Copier will ask you for some data, you might want to have at hand before generating the project.

But don't worry, you can just update any of that in the `.env` files afterwards.

The input variables, with their default values (some auto generated) are:

- `project_name`: (default: `"FastAPI Project"`) The name of the project, shown to API users (in .env).
- `stack_name`: (default: `"fastapi-project"`) The name of the stack used for Docker Compose labels and project name (no spaces, no periods) (in .env).
- `secret_key`: (default: `"changethis"`) The secret key for the project, used for security, stored in .env, you can generate one with the method above.
- `first_superuser`: (default: `"admin@example.com"`) The email of the first superuser (in .env).
- `first_superuser_password`: (default: `"changethis"`) The password of the first superuser (in .env).
- `smtp_host`: (default: "") The SMTP server host to send emails, you can set it later in .env.
- `smtp_user`: (default: "") The SMTP server user to send emails, you can set it later in .env.
- `smtp_password`: (default: "") The SMTP server password to send emails, you can set it later in .env.
- `emails_from_email`: (default: `"info@example.com"`) The email account to send emails from, you can set it later in .env.
- `postgres_password`: (default: `"changethis"`) The password for the PostgreSQL database, stored in .env, you can generate one with the method above.
- `sentry_dsn`: (default: "") The DSN for Sentry, if you are using it, you can set it later in .env.


## Copier

todo: 把这个作为一个模板项目用于新项目架构的生成.
This repository also supports generating a new project using [Copier](https://copier.readthedocs.io).


## vscode

### python

在 uv sync 之后， 在 vscode 中命令面板(ctrl+shift+p或者F1) select interpreter, 然后把 backend/.venv/bin/python 选择项目默认解释器。
这样就可以在 vscode 中导航代码了.





## 参考资料

https://blog.logrocket.com/build-react-typescript-app-vite/