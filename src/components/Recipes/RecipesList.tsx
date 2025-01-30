import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { Link } from "react-router"
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Tooltip } from "@mui/material"
import { AppDispatch, RootStore } from "./store/store";
import { fetchRecipes } from "./store/recipesSlice";

export default () => {
    const dispatch = useDispatch<AppDispatch>()
    const recipesList = useSelector((state: RootStore) => state.recipes.recipes)

    useEffect(() => {
        dispatch(fetchRecipes());
    }, [dispatch])

    return (<>
        {recipesList.map(r => <div key={r.id}>{r.title}</div>)}
    </>)
}