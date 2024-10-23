// import { useEffect, useState } from "react";
import {
    useNavigation,
  } from "react-router-dom";
import SidebarWithHeader from "../components/sidebar";


export default function Root() {
  const navigation = useNavigation();

  // console.log("navigation:", navigation)
  // console.log("navigation.location:", navigation.location)

  return (
    <>
      <SidebarWithHeader>
      </SidebarWithHeader>
    </>
  );

}
