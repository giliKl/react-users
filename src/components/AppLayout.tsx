import { Outlet } from "react-router"
import NavBar from "./NavBar"
import { useState } from "react";
import UserDetails from "./UserDetails";
import Update from "./Update";
import LogIn from "./logIn";
import Registration from "./Registration";

const AppLayout = () => {

    return (<>
        <header>  
        <NavBar />
          {/* {isLoggedIn?(<>
    <Update/>
    </>):(<>
    <LogIn OnLoginSuccess={handleLoginSuccess}/>
    <Registration/>
    </>)} */}
    </header>
        <main><Outlet /></main>
        <footer></footer>

    </>)
}
export default AppLayout