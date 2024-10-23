'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'
import {
  Navigate,
  Link as RRLink,
  Form,
  redirect,
} from "react-router-dom";
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'


export async function action({ request, params }:any) {

  console.log("request:", request);
  console.log("params:", params);  // 路径参数
  const formData = await request.formData();
  const entries = Object.fromEntries(formData);
  console.log("formDatas:", entries);
  // window.bform = formData; // 技巧，可以在浏览器 console 调试此对象.
  return redirect("/");
}

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          // as="form"
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Form method="post">
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" name="firstName"/>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" name="lastName"/>
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="email"/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} name="password"/>
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() => setShowPassword((showPassword) => !showPassword)}>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  type="submit"
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user?<Link as="div" color={'blue.400'}><RRLink to="/login" replace={true}> Login </RRLink></Link>
                </Text>
              </Stack>
            </Stack>
          </Form>
        </Box>
      </Stack>
    </Flex>
  )
}

{/* <Navigate to="/login" replace={true}></Navigate> // 马上执行路由定向,类似于 redirect */}
{/* <RRLink to="/login" replace={true}></RRLink> // 点击后才会执行路由定向           */}
{/* <Link color={'blue.400'}><Navigate to="/login" replace={true}> Login </Navigate></Link> */}
{/* <Link color={'blue.400'}> Login </Link> */}
{/* <Link color={'blue.400'}><RRLink to="/login" replace={true}> Login </RRLink></Link> */}