import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Outlet } from "react-router";
import { Tooltip } from "@mui/material";
import RecipesList from './RecipesList';
import { useState } from 'react';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: open ? drawerWidth : 0,
    width: open ? `calc(100% - ${drawerWidth}px)` : '100%',
    display: 'flex',
    justifyContent: open ? 'flex-start' : 'center',
    alignItems: 'center'
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

const ShowRercipe = () => {
    const [open, setOpen] = useState(false);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };
    return (
        <>
            <Box sx={{ display: 'flex' }}>

                <Tooltip title="Open Recipies List" arrow>
                    <IconButton sx={{ color: "#B71C1C", position: "absolute", right: 0, width: 30, top: 300 }} onClick={handleDrawerToggle}>
                        <MoreVertIcon sx={{ fontSize: 80 }} />
                    </IconButton>
                </Tooltip>

                <Box sx={{ display: 'flex', marginTop: '60px', width: '100%', padding: 3 }}>
                    {open && <RecipesList open={open} onClose={handleDrawerToggle} />}
                    <Main open={open}>
                        <DrawerHeader />
                        <Typography component="div" sx={{ backgroundColor: "#4b38381f", width: '80%', padding: 2 }}>
                            <Outlet />
                        </Typography>
                    </Main>
                </Box>
            </Box>
        </>)
};

export default ShowRercipe 