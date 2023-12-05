import { Avatar, Button, Card, Container, Grid, Icon, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../actions/UserAction";
import { useStateValue } from "../../context/store";

const Login = () =>{

    const navigation = useNavigate()
    const [{sessionUser}, dispatch]= useStateValue();

    const [user, setUser] = useState({
       email: '',
       password: '' 
    });

    const clearUser = {
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

    const loginEventUser = () =>{
        loginUser(user, dispatch).then(res => {
            if(res.status == 200){
                window.localStorage.setItem('token', res.data.token);
                console.log('Login Exitoso', res.data);
                navigation(`/`);
            }else{
                console.log('Las credenciales fueron erroneas', res.data);
            }
        })
    }
    
    return (
        <Container className="container-mt">
            <Grid container justifyContent="center">
                <Grid item lg={5} md={6}>
                    <Card className="card" align="center">
                        <Avatar className="avatar">
                            <Icon className="icon">person</Icon>
                        </Avatar>
                        <Typography variant="h5" color="primary">Ingrese su usuario</Typography>
                        <form className="form" onSubmit={e => e.preventDefault()}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} className="grid-mb">
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
                                <Grid item xs={12} className="grid-mb">
                                    <TextField
                                        label="Password"
                                        variant="outlined"
                                        fullWidth
                                        type="Password"
                                        name="password"
                                        value={user.password}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} className="grid-mb">
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        color="primary"
                                        onClick={loginEventUser}
                                    >
                                        Ingresar
                                    </Button>
                                </Grid>
                            </Grid>
                            <Link
                                to="/register"
                                variant="body1"
                                className="link"
                            >
                            No tienes cuenta?, Registrate
                            </Link>
                        </form>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;