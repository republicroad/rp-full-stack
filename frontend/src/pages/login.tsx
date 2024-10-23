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
  useLocation,
  Link as RRLink,
  Form,
  redirect,
} from "react-router-dom";

export async function action({ request, params }:any) {

  console.log("request:", request);
  console.log("params:", params);  // 路径参数
  const formData = await request.formData();
  const entries = Object.fromEntries(formData);
  console.log("formDatas:", entries);
  // window.bform = formData; // 技巧，可以在浏览器 console 调试此对象.
  return redirect("/");
}

export default function Login() {
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
