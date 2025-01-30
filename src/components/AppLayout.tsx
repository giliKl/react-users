import { Outlet } from "react-router"
import NavBar from "./NavBar"


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