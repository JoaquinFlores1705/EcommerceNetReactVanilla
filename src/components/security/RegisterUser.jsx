import { Avatar, Button, Card, Container, Grid, Icon, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { Link } from "react-router-dom";



const RegisterUser = ()=> {

    const [user, setUser] = useState({
        name: '',
        surnames: '',
        email: '',
        password: ''
    })

    const clearUser = {
        name: '',
        surnames: '',
        email: '',
        password: ''
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const saveUser = () => {
        console.log("User saved",user);
        setUser(clearUser);
    }

    return(
        <Container className="container-mt">
            <Grid container justifyContent="center">
                <Grid item lg={6} md={8}>
                    <Card className="card" align="center">
                        <Avatar className="avatar">
                            <Icon className="icon">person_add</Icon>
                        </Avatar>
                        <Typography variant="h5" color="primary">Registro de Usuario</Typography>
                        <form className="form" onSubmit={(e) => e.preventDefault()}>
                            <Grid container spacing={2}>
                                <Grid item md={6} xs={12} className="grid-mb">
                                    <TextField 
                                        label="Nombre"
                                        variant="outlined"
                                        fullWidth
                                        name="name"
                                        value={user.name}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12} className="grid-mb">
                                    <TextField 
                                        label="Apellidos"
                                        variant="outlined"
                                        fullWidth
                                        name="surnames"
                                        value={user.surnames}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={12} xs={12} className="grid-mb">
                                    <TextField 
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                        type="email"
                                        name="email"
                                        value={user.email}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={12} xs={12} className="grid-mb">
                                    <TextField 
                                        label="Password"
                                        variant="outlined"
                                        fullWidth
                                        type="password"
                                        name="password"
                                        value={user.password}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={12} xs={12} className="grid-mb">
                                    <Button
                                    variant="contained"
                                    fullWidth
                                    color="primary"
                                    onClick={saveUser}
                                    type="submit"
                                    >
                                        Registrar
                                    </Button>
                                </Grid>
                            </Grid>
                            <Link
                            to="/login"
                            variant="body1"
                            className="link"
                            >
                            Ya tienes una cuenta? Login!
                            </Link>
                        </form>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default RegisterUser;