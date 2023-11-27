import { Avatar, Button, Card, Container, Grid, Icon, Link, TextField, Typography } from "@mui/material";

const Login = () =>{
    
    return (
        <Container className="container-mt">
            <Grid container justifyContent="center">
                <Grid item lg={5} md={6}>
                    <Card className="card" align="center">
                        <Avatar className="avatar">
                            <Icon className="icon">person</Icon>
                        </Avatar>
                        <Typography variant="h5" color="primary">Ingrese su usuario</Typography>
                        <form className="form">
                            <Grid container spacing={2}>
                                <Grid item xs={12} className="grid-mb">
                                    <TextField
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                        type="email"
                                    />
                                </Grid>
                                <Grid item xs={12} className="grid-mb">
                                    <TextField
                                        label="Password"
                                        variant="outlined"
                                        fullWidth
                                        type="Password"
                                    />
                                </Grid>
                                <Grid item xs={12} className="grid-mb">
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        color="primary"
                                    >
                                        Ingresar
                                    </Button>
                                </Grid>
                            </Grid>
                            <Link
                                href="/"
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