
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import "./index.css"; //避免全局加载样式文件.
import { ChakraProvider } from '@chakra-ui/react'
import theme from "./theme"
// import { baseTheme as theme} from '@chakra-ui/theme'

import Root from "./routes/root";

import Index from "./pages";
import ErrorPage  from "./pages/error-page";
import Login from "./pages/login";
import Signup from "./pages/signup";
import ForgotPasswordForm from "./pages/forgotpassword";
import ResetPasswordForm from "./pages/resetpassword";
import VerifyEmailForm from "./pages/verify_email";
import SidebarWithHeader from "./components/sidebar";

import Home from "./pages/home";
import Trending,{
  loader as trendingLoader,
} from "./pages/trending";
// import {router_tsx} from "./App";


const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />, //  <div>Hello world! fccdjny</div>,
  },
  {
    path: "/signup",
    element: <Signup />, //  <div>Hello world! fccdjny</div>,
  },
  {
    path: "/forgotpasswd",
    element: <ForgotPasswordForm />, //  <div>Hello world! fccdjny</div>,
  },
  {
    path: "/resetpasswd",
    element: <ResetPasswordForm />, //  <div>Hello world! fccdjny</div>,
  },
  {
    path: "/verifyemail",
    element: <VerifyEmailForm />, //  <div>Hello world! fccdjny</div>,
  },
  {
    path: "/sidebar",
    element: <SidebarWithHeader />, //  <div>Hello world! fccdjny</div>,
  },
  {
    path: "/",
    element: <Root />, //  <div>Hello world! fccdjny</div>,
    errorElement: <ErrorPage />,  // errorElement: <div>Oops! There was an error.</div>,
    // loader: rootLoader,
    // action: rootAction,
    children: [
        { index: true, element: <Index /> },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "trending",
          element: <Trending />,
          loader: trendingLoader,
        },

      ],
  },
]);

// 1. router by ts
// ReactDOM.createRoot(document.getElementById('root')!).render(<></>);  fix type error
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

{/* <StrictMode>
<ChakraProvider theme={theme}>
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
</ChakraProvider>
</StrictMode>, */}

// 2. router by tsx
// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <RouterProvider router={router_tsx} />
//   </React.StrictMode>
// );