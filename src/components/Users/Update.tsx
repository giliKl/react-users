import { useContext, useRef, useState } from "react"
import { Box, Button, Grid2 as Grid, Modal, TextField, Alert, Stack } from '@mui/material';
import axios from 'axios';
import { UserContext } from "../context";

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
const alertStyle = { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 500, bgcolor: 'background.paper', outline: 'none',};

const Update = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("UserContext must be used within a UserProvider");
    }
    const user = context.state;
    const { dispatch } = context;
    const [isUpdate, setIsUpdate] = useState(false)
    const [alertInfo, setAlertInfo] = useState<{ severity: 'success' | 'error' | 'warning' | 'info', message: string } | null>(null);

    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const lastNameRef = useRef<HTMLInputElement>(null)
    const addressRef = useRef<HTMLInputElement>(null)
    const numberPhoneRef = useRef<HTMLInputElement>(null)

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const res = await axios.put('http://localhost:3000/api/user', {
                firstName: nameRef.current?.value || user.firstName,
                lastName: lastNameRef.current?.value || user.lastName,
                email: emailRef.current?.value || user.email,
                address: addressRef.current?.value || user.address,
                phone: numberPhoneRef.current?.value || user.phone,
            }, {
                headers: {
                    'user-id': user.id,
                }
            })
            dispatch({
                type: 'UPDATE_USER',
                data: { ...res.data }
            })
            setAlertInfo({ message: 'Update successful!', severity: 'success' });
            setIsUpdate(false)
        }
        catch (error: any) {
            setAlertInfo({ message: error.response?.data || 'Update failed', severity: 'error' });
            setTimeout(() => setAlertInfo(null), 5000);
        }
    }

    return (<>
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
            <Grid size={4}>
                <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => setIsUpdate(!isUpdate)}>Update</Button>
            </Grid>
        </Grid>
        <Modal open={isUpdate} onClose={() => setIsUpdate(false)}>
            <Box sx={style}>
                <form onSubmit={handleSubmit}>
                    <TextField label='userName' inputRef={nameRef} placeholder={user.firstName} />
                    <TextField label='userLastName' inputRef={lastNameRef} />
                    <br /><br />
                    <TextField label='userEmail' inputRef={emailRef} />
                    <TextField label='useraddress' inputRef={addressRef} />
                    <TextField label='usernumberPhone' inputRef={numberPhoneRef} />
                    <Button type="submit">Save changes</Button>
                </form>
            </Box>
        </Modal>
    </>)
}
export default Update