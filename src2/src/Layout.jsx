import { Outlet } from "react-router-dom";
import TopNavbar from "./Components/TopNavbar";
const Layout=()=>{
    return(
        <>
         <TopNavbar/>
         <Outlet/>
        </>
    )
}

export default Layout;