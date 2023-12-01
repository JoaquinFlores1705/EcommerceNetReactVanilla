import { Button, Checkbox, Container, FormControl, FormControlLabel, Grid, TextField, Typography } from "@mui/material"

const EditUser = () =>{

    return (
        <Container className="container-mt">
             <Grid Container justifyContent="center" >
                <Grid item lg={6} sm={12}>
                    <Typography variant="h4" className="text_title">
                        Editar Usuario
                    </Typography>
                    <form onSubmit={e => e.preventDefault()} className="form">
                        <TextField 
                        label="Nombre"
                        variant="filled"
                        value="Paul Flores"
                        fullWidth
                        disabled
                        className="grid-mb"
                        />
                        <TextField 
                        label="Correo electronico"
                        variant="filled"
                        value="paul_1705@outlook.com"
                        fullWidth
                        disabled
                        />
                        <FormControl className="checkBox">
                            <FormControlLabel 
                            control={<Checkbox color="primary" />}
                            label="Es administrador"
                            />
                            <Button
                            variant="contained"
                            color="primary"
                            >
                                Actualizar
                            </Button>
                        </FormControl>
                    </form>
                </Grid>
             </Grid>
        </Container>
    )
}

export default EditUser