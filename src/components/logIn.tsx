import { useContext, useRef, useState } from "react"
import { Button, Grid2 as Grid, Modal, Box, TextField } from "@mui/material";
import HomePage from "./Update";
import { userContext } from "./context";
import axios from "axios";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const LogIn = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [open, setOpen] = useState(false);
    const context = useContext(userContext);
    if (!context) {
        throw new Error("UserContext must be used within a UserProvider");
    }
    const { dispatch } = context;
    const passwordRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3001/api/user/login', {
                email: emailRef,
                password: passwordRef
            }
            );

            dispatch({
                type: 'LOG IN',
                data: {
                    name: '',
                    email: emailRef.current?.value || '',
                    lastName: '',
                    address: '',
                    numberPhone: '',
                    password: passwordRef.current?.value || ''
                }
            })
            setOpen(false);
            setIsLogin(true);
        }
        catch {
            console.log("not succeed log in");

        }
    }
    return <>
        <Grid container>
            <Grid size={4}>
                {!isLogin ?
                    <Button color="primary" variant="contained" onClick={() => setOpen(!open)}>LogIn</Button> :
                    <HomePage />}
            </Grid>
        </Grid>
        <Modal open={open} onClose={() => setOpen(false)}>
            <Box sx={style}>
                <form onSubmit={handleSubmit}>
                    <TextField label="email" inputRef={emailRef}></TextField>
                    <br />
                    <TextField label="password" inputRef={passwordRef}></TextField>
                    <Button type="submit">LOGIN</Button>
                </form>
            </Box>
        </Modal>

    </>
}
export default LogIn