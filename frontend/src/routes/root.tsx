// import { useEffect, useState } from "react";
import { ProtectedRoute } from "./ProtectedRoute";
import {
    useNavigation,
    Outlet,
  } from "react-router-dom";
import SidebarWithHeader from "../pages/layout/sidebar";


export default function Root() {
  const navigation = useNavigation();

  // console.log("navigation:", navigation)
  // console.log("navigation.location:", navigation.location)

  return (
    <>
      <ProtectedRoute>
        <SidebarWithHeader>
          <Outlet></Outlet>
        </SidebarWithHeader>
      </ProtectedRoute>
    </>
  );

}
