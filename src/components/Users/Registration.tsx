import { ChangeEvent, FormEvent, useState } from "react"
import { User } from "../../Types/User";
import axios from "axios";
import { Box, Button, Grid2 as Grid, Modal, TextField, } from '@mui/material';


const Registration = () => {
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
    const [open, setOpen] = useState(false);
    const [data, setData] = useState<User>({
        name: '',
        lastName: '',
        email: '',
        password: '',
        address: '',
        numberPhone: '',
    });
    const handleOpen = () => {
        setOpen(!open);
    };
    const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData(prevS => ({
            ...prevS, [name]: value
        }));
    };
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { name, lastName, password, address, email, numberPhone } = data;

        if (name != '' && email != '' && numberPhone != '' && lastName != '' && password != '' && address != '') {
            try {
                const res = await axios.post('http://localhost:3001/api/user/register', {
                    email: data.email,
                    password: data.password,
                    firstName: data.name,
                    lastName: data.lastName,
                    address: data.address,
                    phone: data.numberPhone,

                });
                console.log("succeed");
                
                handleOpen();
            }
            catch(error:any) {
                console.error("Register failed:", error.response?.data || error.message);

            }
        }
        else {
            alert("some fileds are missing")
        }
        

    }
    return (
        <>
            <Grid container>
                <Grid size={4}>
                    <Button sx={{ my: 2, color: 'white', display: 'block' }}  onClick={() => handleOpen()}>Registration</Button>
                </Grid>
            </Grid>
            <Modal open={open} onClose={() => handleOpen()}>
                <Box sx={style}>
                    <form onSubmit={handleSubmit}>
                        <TextField label='userName' name="name" onChange={handelChange} />
                        <TextField label='userLastName' name="lastName" onChange={handelChange} />
                        <br />
                        <TextField label='userEmail' name="email" onChange={handelChange} />
                        <TextField label='useraddress' name="address" onChange={handelChange} />
                        <TextField label='usernumberPhone' name="numberPhone" onChange={handelChange} />
                        <TextField label='userPassword' name="password" onChange={handelChange} />
                        <Button type="submit">Save changes</Button>
                    </form>
                </Box>
            </Modal>
        </>
    );
}
export default Registration