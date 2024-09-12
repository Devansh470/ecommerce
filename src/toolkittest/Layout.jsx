import { Outlet } from "react-router-dom"
import Home from "./Home"

const Layout=()=>{
    return(
        <>
        <Home/>
        <Outlet/>
        </>
    )
}

export default Layout
