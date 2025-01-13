import { useContext, useRef, useState } from "react"
import { userContext } from "../App"
import {
    Button,
    Grid2 as Grid,
    Modal,
    Box,
    TextField
} from "@mui/material";
import HomePage from "./Update";
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
    const [user, userDispatch] = useContext(userContext);
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        userDispatch({
            type: 'Log In',
            data: {
                name: nameRef.current?.value || '',
                email: emailRef.current?.value || '',
                lastName: '',
                address: '',
                numberPhone: '',
                password: ''
            }
        })
        setOpen(false);
        setIsLogin(true);
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
                    <TextField label="userName" inputRef={nameRef}></TextField>
                    <br />
                    <TextField label="email" inputRef={emailRef}></TextField>
                    <Button type="submit">LOGIN</Button>
                </form>
            </Box>
        </Modal>

    </>
}
export default LogIn