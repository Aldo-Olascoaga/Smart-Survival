import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Stack, Button, IconButton } from '@mui/material';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';


const NavbarPages = () => {

    return (
        <AppBar className='toolbar' position='fixed'>
            <Toolbar sx={{ backgroundColor: "#1D1934" }} >
                <IconButton>
                    <SportsEsportsRoundedIcon sx={{
                        color: "#F6BA27"
                    }} />
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, fontFamily: "Crossten SemiBold" }}
                >
                    Smart Survival
                </Typography>

                <Stack direction="row" spacing={2} sx={{ fontFamily: "Crossten SemiBold, sans-serif" }}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Button className='navbar-btn' sx={{
                            backgroundColor: "#52BEDA", color: "#1D1934", transition: 'border-color 0.3s ease-in-out',
                            '&:hover': {
                                backgroundColor: '#ffff',
                                border: '4px solid',
                                borderColor: '#52BEDA',
                            }, borderRadius: '20px'
                        }}>Página de inicio
                        </Button>
                    </Link>

                    <Link to="/about" style={{ textDecoration: 'none' }}>
                        <Button className='navbar-btn' sx={{
                            backgroundColor: "#52BEDA", color: "#1D1934", transition: 'border-color 0.3s ease-in-out',
                            '&:hover': {
                                backgroundColor: '#ffff',
                                border: '4px solid',
                                borderColor: '#52BEDA',
                            }, borderRadius: '20px'
                        }}>Acerca de Aulify
                        </Button>
                    </Link>

                    <Button className='navbar-btn' color="inherit" sx={{
                        backgroundColor: "#52BEDA", color: "#1D1934", transition: 'border-color 0.3s ease-in-out',
                        '&:hover': {
                            backgroundColor: '#ffff',
                            border: '4px solid',
                            borderColor: '#52BEDA',
                        }, borderRadius: '20px'
                    }} onClick={() => (window.location.href = "https://www.google.com")}>Salir</Button>
                </Stack>

            </Toolbar>
        </AppBar>
    );
}

export default NavbarPages;