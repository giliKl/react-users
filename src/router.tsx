import { createBrowserRouter } from "react-router";
import AppLayout from "./components/AppLayout";
import Home from "./components/Home";
import About from "./components/About";
import { Update } from "@mui/icons-material";
import LogIn from "./components/logIn";

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