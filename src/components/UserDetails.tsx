import { useContext } from "react";
import { userContext } from "./context";
import { deepOrange } from "@mui/material/colors";
import { Avatar, Stack } from "@mui/material";

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
            <Avatar {...stringAvatar(user.name||'')} />
            <h3>{user.name}</h3>
        </Stack>
    );
}
export default UserDetails