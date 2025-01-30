import { createBrowserRouter } from "react-router";
import Home from "./components/Users/Home";
import About from "./components/Users/About";
import { Update } from "@mui/icons-material";
import LogIn from "./components/Users/logIn";
import AppLayout from "./components/AppLayout";

export const router = createBrowserRouter([
    {
        path: '/', element: <AppLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: 'about', element: <About /> },
            { path: 'register', element: <About /> },
            { path: 'update', element: <Update/> }
        ]
    }
])