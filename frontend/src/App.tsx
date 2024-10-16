import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import "./index.css";

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


export const router_tsx = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      loader={rootLoader}
      action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
        <Route
          path="contacts/:contactId"
          element={<Contact />}
          loader={contactLoader}
          action={contactAction}
        />
        <Route
          path="contacts/:contactId/edit"
          element={<EditContact />}
          loader={contactLoader}
          action={editAction}
        />
        <Route
          path="contacts/:contactId/destroy"
          action={destroyAction}
        />
      </Route>
    </Route>
  )
);