import { Box, Typography, styled } from '@mui/material';

const BackgroundBox = styled(Box)({
    height: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'url("/back.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }
});

export default ({ text }: { text: string }) => {
    return (
        <BackgroundBox>
            <Typography
                variant="h2"
                component="h1"
                sx={{
                    color: 'white',
                    textAlign: 'center',
                    position: 'relative',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    fontWeight: 'bold'
                }}
            >
                {text}
            </Typography>
        </BackgroundBox>
    );
}