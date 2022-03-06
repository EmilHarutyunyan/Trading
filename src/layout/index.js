import { Outlet } from "react-router-dom";
// Styles
// import {Main} from "./Layout.styles"
// Components
// import Header from "../components/Header/Header";
const Layout = () => {

  return (
    <>
      {/* <Main> */}
        <Outlet />
      {/* </Main> */}
    </>
  );
};

export default Layout;