import { ChangeEvent, FormEvent, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { Box, Button, Grid2 as Grid, Modal, TextField, Alert, Stack } from '@mui/material';
import { User } from "../../Types/UserType";

const Registration = () => {
    const alertStyle = { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', outline: 'none', };
    const style = { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4, };
    const [alertInfo, setAlertInfo] = useState<{ severity: 'success' | 'error' | 'warning' | 'info', message: string } | null>(null);
    const [open, setOpen] = useState(false);
    const [data, setData] = useState<User>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        address: '',
        phone: '',
    });

    const handleOpen = () => {
        setOpen(!open);
    };

    const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData(prevS => ({
            ...prevS,
            [name]: value
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { password, email } = data;
        if (email != '' && password != '') {
            try {
                const res = await axios.post('http://localhost:3000/api/user/register', {
                    email: data.email,
                    password: data.password,
                });
                setOpen(false);
                setAlertInfo({ severity: 'success', message: 'Registration successful!' });
            }
            catch (e: AxiosError | any) {
                if (e.response?.status === 400) {
                    setAlertInfo({ severity: 'warning', message: 'User already exists. Please choose a different email address.' });
                } else {
                    setAlertInfo({ severity: 'error', message: 'An unexpected error occurred. Please try again later.' });
                }
            }
        } else {
            setAlertInfo({ severity: 'error', message: 'Please fill in all required fields' });
        }
    }

    return (
        <>
            <Modal
                open={!!alertInfo}
                onClose={() => setAlertInfo(null)} >
                <Box sx={alertStyle}>
                    {alertInfo && (
                        <Alert severity={alertInfo.severity} onClose={() => setAlertInfo(null)} sx={{ width: '100%' }}> {alertInfo.message}
                        </Alert>)}
                </Box>
            </Modal>
            <Grid container>
                <Grid size={4}><Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => handleOpen()}>Registration</Button></Grid>
            </Grid>
            <Modal open={open} onClose={() => handleOpen()}>
                <Box sx={style}>
                    <form onSubmit={handleSubmit}>
                        <TextField name="email" label="Email" onChange={handelChange} />
                        <br /><br />
                        <TextField name="password" label="Password" onChange={handelChange} />
                        <br /><br />
                        <Button type="submit">Submit</Button>
                    </form>
                </Box>
            </Modal>
        </>
    );
}

export default Registration;