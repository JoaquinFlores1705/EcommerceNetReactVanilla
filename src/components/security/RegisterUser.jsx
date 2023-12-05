import { Avatar, Button, Card, Container, Grid, Icon, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../actions/UserAction";
import { useStateValue } from "../../context/store";



const RegisterUser = ()=> {

    const navigation = useNavigate()
    const [{sessionUser}, dispatch]= useStateValue();
    const [user, setUser] = useState({
        name: '',
        lastname: '',
        email: '',
        password: '',
        username: ''
    })

    const clearUser = {
        name: '',
        lastname: '',
        email: '',
        password: '',
        username: ''
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const saveUser = () => {
        registerUser(user,dispatch).then(response => {
            console.log("response User register:", response);
            window.localStorage.setItem('token', response.data.token);
            navigation(`/`);
        });
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
                                        name="lastname"
                                        value={user.lastname}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={12} xs={12} className="grid-mb">
                                    <TextField 
                                        label="Username"
                                        variant="outlined"
                                        fullWidth
                                        name="username"
                                        value={user.username}
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