import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button } from '@mui/material';
import Footer from '../Footer/Footer';


const MenuButton = () => {
    return (
        <div>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"

                style={{ minHeight: '100vh' }}
                spacing={6}
            >


                <Grid item xs={12} md={6}>
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                width: '350px',
                                height: '75px',
                                fontSize: '20px',
                                color: "#1D1934",
                                borderRadius: '30px',
                                bgcolor: '#F6BA27',
                                border: '4px solid #1D1934',
                                marginBottom: '20px',
                                transition: 'border-color 0.3s ease-in-out',
                                '&:hover': {
                                    bgcolor: '#D44D56',
                                    borderColor: '#ffff',
                                    color: '#ffff'
                                },
                            }}
                        >
                            Iniciar Sesión
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Link to="/how-to-play" style={{ textDecoration: 'none' }}>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                width: '350px',
                                height: '75px',
                                fontSize: '20px',
                                color: "#1D1934",
                                borderRadius: '30px',
                                bgcolor: '#F6BA27',
                                border: '4px solid #1D1934',
                                marginBottom: '20px',
                                transition: 'border-color 0.3s ease-in-out',
                                '&:hover': {
                                    bgcolor: '#D44D56',
                                    borderColor: '#ffff',
                                    color: '#ffff'
                                },
                            }}
                        >
                            Cómo jugar
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Link to="/help" style={{ textDecoration: 'none' }}>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                width: '350px',
                                height: '75px',
                                fontSize: '20px',
                                color: "#1D1934",
                                borderRadius: '30px',
                                bgcolor: '#F6BA27',
                                border: '4px solid #1D1934',
                                marginBottom: '20px',
                                transition: 'background-color 0.3s ease-in-out, border-color 0.3s ease-in-out',
                                '&:hover': {
                                    bgcolor: '#D44D56',
                                    borderColor: '#ffff',
                                    color: '#ffff'
                                },
                            }}
                        >
                            Ayuda
                        </Button>
                    </Link>
                </Grid>
            </Grid>
            <Footer />
        </div >
    );
};

export default MenuButton;


/*import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button } from '@mui/material';

const MenuButton = () => {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{ minHeight: '100vh' }}
        >
            <Grid item xs={12} md={6} sx={{ my: 2 }}>
                <Link to="/play" style={{ textDecoration: 'none' }}>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            width: '350px',
                            height: '75px',
                            fontSize: '20px',
                            color: "#1D1934",
                            borderRadius: '30px',
                            bgcolor: '#F6BA27',
                            border: '2px solid #1D1934',
                            transition: 'border-color 0.3s ease-in-out',
                            '&:hover': {
                                color: '#ffff',
                                borderColor: '#ffff',
                            },
                        }}
                    >
                        Jugar Smart Survival
                    </Button>
                </Link>
                <Link to="/sign-up" style={{ textDecoration: 'none' }}>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            width: '350px',
                            height: '75px',
                            fontSize: '20px',
                            color: "#1D1934",
                            borderRadius: '30px',
                            bgcolor: '#F6BA27',
                            border: '2px solid #1D1934',
                            transition: 'border-color 0.3s ease-in-out',
                            '&:hover': {
                                color: '#ffff',
                                borderColor: '#ffff',
                            },
                        }}
                    >
                        Crear cuenta
                    </Button>
                </Link>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            width: '350px',
                            height: '75px',
                            fontSize: '20px',
                            color: "#1D1934",
                            borderRadius: '30px',
                            bgcolor: '#F6BA27',
                            border: '2px solid #1D1934',
                            transition: 'border-color 0.3s ease-in-out',
                            '&:hover': {
                                color: '#ffff',
                                borderColor: '#ffff',
                            },
                        }}
                    >
                        Iniciar Sesión
                    </Button>
                </Link>
            </Grid>
            <Grid item xs={12} md={6} sx={{ my: 2 }}>
                <Button
                    variant="contained"
                    size="large"
                    sx={{
                        width: '350px',
                        height: '75px',
                        fontSize: '20px',
                        color: "#1D1934",
                        borderRadius: '30px',
                        bgcolor: '#F6BA27',
                        border: '2px solid #1D1934',
                        transition: 'border-color 0.3s ease-in-out',
                        '&:hover': {
                            color: '#ffff',
                            borderColor: '#ffff',
                        },
                    }}
                >
                    Cómo jugar
                </Button>
            </Grid>
            <Grid item xs={12} md={6} sx={{ my: 2 }}>
                <Button
                    variant="contained"
                    size="large"
                    sx={{
                        width: '350px',
                        height: '75px',
                        fontSize: '20px',
                        color: "#1D1934",
                        borderRadius: '30px',
                        bgcolor: '#F6BA27',
                        border: '2px solid #1D1934',
                        transition: 'background-color 0.3s ease-in-out, border-color 0.3s ease-in-out',
                        '&:hover': {
                            color: '#ffff',
                            borderColor: '#ffff',
                        },
                    }}
                >
                    Ayuda
                </Button>
            </Grid>
        </Grid>
    );
};

export default MenuButton;
*/