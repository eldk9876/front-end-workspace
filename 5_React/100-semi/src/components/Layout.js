import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";

const Layout = () => {
  const [member, setMember] = useState();
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
