import { Avatar, Button, Card, Container, Grid, Icon, TextField, Typography } from "@mui/material"
import { Link } from "react-router-dom";

const RegisterUser = ()=> {
    return(
        <Container className="container-mt">
            <Grid container justifyContent="center">
                <Grid item lg={6} md={8}>
                    <Card className="card" align="center">
                        <Avatar className="avatar">
                            <Icon className="icon">person_add</Icon>
                        </Avatar>
                        <Typography variant="h5" color="primary">Registro de Usuario</Typography>
                        <form className="form">
                            <Grid container spacing={2}>
                                <Grid item md={6} xs={12} className="grid-mb">
                                    <TextField 
                                        label="Nombre"
                                        variant="outlined"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item md={6} xs={12} className="grid-mb">
                                    <TextField 
                                        label="Apellidos"
                                        variant="outlined"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item md={12} xs={12} className="grid-mb">
                                    <TextField 
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                        type="email"
                                    />
                                </Grid>
                                <Grid item md={12} xs={12} className="grid-mb">
                                    <TextField 
                                        label="Password"
                                        variant="outlined"
                                        fullWidth
                                        type="password"
                                    />
                                </Grid>
                                <Grid item md={12} xs={12} className="grid-mb">
                                    <Button
                                    variant="contained"
                                    fullWidth
                                    color="primary"
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