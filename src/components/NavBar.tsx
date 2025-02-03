import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import { Box, Button, MenuItem, Tooltip } from "@mui/material"
import { Link } from 'react-router';
import UserDetails from './Users/UserDetails';
import Update from './Users/Update';
import LogIn from './Users/logIn';
import Registration from './Users/Registration';
import { useContext, useState } from "react";
import { UserContext } from "./context";

const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("UserContext must be used within a UserProvider");
    }
    const { state, dispatch } = context;
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        dispatch({ type: "LOG OUT", data: state })
    };

    return (
        <>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button component={Link} to='/about' onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block', textDecorationLine: "none" }}>ABOUT </Button>
                <Button component={Link} to='/' onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block', textDecorationLine: "none" }}>HOME</Button>
                {isLoggedIn ? (<>
                    <Update />
                </>) : (<>
                    <LogIn OnLoginSuccess={handleLoginSuccess} />
                    <Registration />
                </>)}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <UserDetails />
                    </IconButton>
                </Tooltip>
                {isLoggedIn && <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    <MenuItem onClick={handleCloseUserMenu}>
                        <Typography sx={{ textAlign: 'center' }} onClick={handleLogout}>Log Out</Typography>
                    </MenuItem>
                </Menu>}
            </Box>
        </>
    )
}

export default NavBar