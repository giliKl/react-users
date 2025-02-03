import { useContext } from "react";
import { Avatar, Stack } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import { UserContext } from "../context";

const UserDetails = () => {
    const context = useContext(UserContext);
    if (!context) {throw new Error("UserContext must be used within a UserProvider");}
    const user = context.state;

    function stringAvatar(name: string) {
        if (name == undefined) {
            name = ' ';
        }
        return {
            sx: {
                bgcolor: "#D32F2F",
            },
            children: `${name.split(' ')[0][0]}`,
        };
    }
    
    return (
        <Stack direction="row" spacing={2}>
            {!user.firstName || user.firstName.trim() === '' ? (<> <PersonIcon sx={{ color: 'white' }} /></>) : (<>
                <Avatar {...stringAvatar(user.firstName)} />
            </>)}
        </Stack>
    );
}
export default UserDetails