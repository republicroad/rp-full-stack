'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'
import {
  Navigate,
  useNavigate,
  useLocation,
  Link as RRLink,
  Form,
  redirect,
} from "react-router-dom";
import { useAuth } from '../provider/authProvider';


export const action = ({ loginCallback }:any) => async ({ request, params }: any) => {
  console.log("request:", request);
  console.log("params:", params);  // 路径参数
  const formData = await request.formData();
  const entries = Object.fromEntries(formData);
  console.log("formDatas:", entries);
  // call login, and redirect upon success
  console.log("action loginCallback:", loginCallback);
  await loginCallback(formData["email"], formData["password"]);
  // 根据结果登录成功进入 index 路由，否则 altert 信息.
  return redirect('/');
};

// export async function action({ request, params }:any) {
//   console.log("request:", request);
//   console.log("params:", params);  // 路径参数
//   const formData = await request.formData();
//   const entries = Object.fromEntries(formData);
//   console.log("formDatas:", entries);
//   // window.bform = formData; // 技巧，可以在浏览器 console 调试此对象.
//   // const navigate = useNavigate();
//   const { setToken }: any = useAuth();
//   // setToken("jwt_token");
//   // const handleLogin = () => {
//   //   setToken("this is a test token");
//   //   navigate("/", { replace: true });
//   // };
//   return redirect("/");
// }

export default function Login() {
  const { setToken, handleLogin }: any = useAuth();
  // const navigate = useNavigate();
  console.log("login func:", handleLogin);
  
  // setToken("jwt_token");
  // const handleLogin = () => {
  //   setToken("this is a test token");
  //   // navigate("/", { replace: true });
  //   redirect("/");
  // };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Text color={'blue.400'}>features</Text> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <Form method="post">
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="email"/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" name="password"/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <RRLink to="/forgotpasswd" replace={true}><Text color={'blue.400'}>Forgot password?</Text></RRLink> 
                </Stack>
                <Button
                  type="submit"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
              
            </Form>
          </Stack>
          <Stack pt={6}>
              <Text align={'center'}>
                Already a user?<Link color={'blue.400'}><RRLink to="/signup" replace={true}> Signup </RRLink></Link>
              </Text>
            </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
