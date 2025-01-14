import { useContext, useRef, useState } from "react"
import { Box, Button, Grid2 as Grid, Modal, TextField, } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import { userContext } from "./context";
import axios from 'axios';


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

const Update = () => {
    const context = useContext(userContext);
    if (!context) {
        throw new Error("UserContext must be used within a UserProvider");
    }
    const user = context.state;
    const { dispatch } = context;
    const [isUpdate, setIsUpdate] = useState(false)
    const nameRef = useRef<string>(user?.name || '')
    const emailRef = useRef<HTMLInputElement>(null)
    const lastNameRef = useRef<HTMLInputElement>(null)
    const addressRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const numberPhoneRef = useRef<HTMLInputElement>(null)
    console.log(user);

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const res = await axios.put('http://localhost:3001/api/user/', {
                name: nameRef.current?.valueOf() || user.name,
                email: emailRef.current?.value || user.email,
                lastName: lastNameRef.current?.value || user.lastName,
                address: addressRef.current?.value || user.address,
                numberPhone: numberPhoneRef.current?.value || user.numberPhone,
                password: passwordRef.current?.value || user.password,
                id: user.id
            }, {
                headers: {
                    'user-id': user.id,
                    //'Content-Type': 'application/json'
                }
            })
            dispatch({
                type: 'UPDATE_USER',
                data: {
                    name: nameRef.current?.valueOf() || user.name,
                    email: emailRef.current?.value || user.email,
                    lastName: lastNameRef.current?.value || user.lastName,
                    address: addressRef.current?.value || user.address,
                    numberPhone: numberPhoneRef.current?.value || user.numberPhone,
                    password: passwordRef.current?.value || user.password,
                    id: user.id
                }
            })
            setIsUpdate(false)
        }
        catch {
            console.log("error didnt succeed update");
        }


    }
   
    return (<>
        
        <Grid container>
            <Grid size={4}>
                <Button color="primary" variant="contained" onClick={() => setIsUpdate(!isUpdate)}>Update</Button>
            </Grid>
        </Grid>
        <Modal open={isUpdate} onClose={() => setIsUpdate(false)}>
            <Box sx={style}>
                <form onSubmit={handleSubmit}>
                    <TextField label='userName' inputRef={nameRef} placeholder={user.name} />
                    <TextField label='userLastName' inputRef={lastNameRef} />
                    <br />
                    <TextField label='userEmail' inputRef={emailRef} />
                    <TextField label='useraddress' inputRef={addressRef} />
                    <TextField label='usernumberPhone' inputRef={numberPhoneRef} />
                    <TextField label='userPassword' inputRef={passwordRef} />
                    <Button type="submit">Save changes</Button>
                </form>

            </Box>
        </Modal>
    </>)
}
export default Update