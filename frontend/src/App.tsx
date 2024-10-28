import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import "./index.css";
import Root from "./routes/root";
import Index from "./pages";
import ErrorPage  from "./pages/error-page";
import Login,  {action as loginAction} from "./pages/login";
import Signup, {action as SignupAction} from "./pages/signup";
import ForgotPasswordForm from "./pages/forgotpassword";
import ResetPasswordForm from "./pages/resetpassword";
import VerifyEmailForm from "./pages/verify_email";
import SidebarWithHeader from "./pages/layout/sidebar";

import Home from "./pages/home";
import Trending,{
  loader as trendingLoader,
} from "./pages/trending";


const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />, //  <div>Hello world! fccdjny</div>,
    action: loginAction,
  },
  {
    path: "/signup",
    element: <Signup />, //  <div>Hello world! fccdjny</div>,
    action: SignupAction,
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

export const router_tsx = createBrowserRouter(
  createRoutesFromElements([
    <Route>
      <Route
        path="/login"
        element={<Login />}
        action={loginAction}
      />
      <Route
        path="/signup"
        element={<Signup />}
        action={SignupAction}
      />
      <Route
        path="/"
        element={<Root />}
        errorElement={<ErrorPage />}>
          <Route index element={<Index />} />
          <Route
            path="home"
            element={<Home />}
          />
          <Route
            path="trending"
            element={<Trending />}
          />
      </Route>
    </Route>
  ])
);