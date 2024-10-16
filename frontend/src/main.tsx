
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Index from "./routes/index";
import Root, {
    loader as rootLoader,
    action as rootAction,
  } from "./routes/root";

import Contact, {
    loader as contactLoader,
    action as contactAction,
  } from "./routes/contact";

import EditContact, {
    action as editAction,
  } from "./routes/edit";

import { action as destroyAction } from "./routes/destroy";
import ErrorPage  from "./pages/error-page";
import {router_tsx} from "./App";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, //  <div>Hello world! fccdjny</div>,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      { index: true, element: <Index /> },
        {
          path: "contacts/:contactId",
          element: <Contact />,
          loader: contactLoader,
          action: contactAction,
        },
        {
          path: "contacts/:contactId/edit",
          element: <EditContact />,
          loader: contactLoader,
          action: editAction,
        },
        {
          path: "contacts/:contactId/destroy",
          action: destroyAction,
          errorElement: <div>Oops! There was an error.</div>,
        },
      ],
  },
]);

// 1. router by ts
// ReactDOM.createRoot(document.getElementById('root')!).render(<></>);  fix type error
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// 2. router by tsx
// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <RouterProvider router={router_tsx} />
//   </React.StrictMode>
// );