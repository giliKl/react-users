import { useContext } from "react";
import { userContext } from "./context";
import { deepOrange } from "@mui/material/colors";
import { Avatar, Stack } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';

const UserDetails = () => {
    const context = useContext(userContext);
    if (!context) {
        throw new Error("UserContext must be used within a UserProvider");
    }
    
    function stringAvatar(name: string) {
        if (name == undefined) {
            name = ' ';
        }
        return {
            sx: {
                bgcolor: deepOrange[500],
            },
            children: `${name.split(' ')[0][0]}`,
        };
    }
    const user = context.state;
    return (

        <Stack direction="row" spacing={2}>
            {user.name==="undefined" || ''?(<> <PersonIcon/></>):(<>
            <Avatar {...stringAvatar(user.name||'')} />
            </>)}
           
        </Stack>
    );
}
export default UserDetails