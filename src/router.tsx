import { createBrowserRouter } from "react-router";
import Home from "./components/Users/Home";
import About from "./components/Users/About";
import { Update } from "@mui/icons-material";
import AppLayout from "./components/AppLayout";
import NoRecipe from "./components/Recipes/NoRecipe";
import RecipeInstruction from "./components/Recipes/RecipeInstruction";
import ShowRercipe from "./components/Recipes/ShowRercipe";
import AddRecipe from "./components/Recipes/AddRecipe";
import SuccessAdd from "./components/Recipes/SuccessAdd"; 
import DeleteRecipe from "./components/Recipes/DeleteRecipe";

export const router = createBrowserRouter([
    {
        path: '/', element: <AppLayout />,
        children: [
            { path: '', element: <Home /> },
            { path: 'home', element: <Home /> },
            { path: 'about', element: <About /> },
            { path: 'register', element: <About /> },
            { path: 'update', element: <Update /> },
            {
                path: "show", element: <ShowRercipe />,
                children: [
                    { path: '', element: <NoRecipe /> },
                    { path: 'recipes/:id', element: <RecipeInstruction /> },
                    { path: 'Add/:id', element: <AddRecipe /> },
                    { path: 'successAdding', element: <SuccessAdd /> },
                    { path: 'Deleting', element: <DeleteRecipe /> }
                ]
            }

        ]
    }
])