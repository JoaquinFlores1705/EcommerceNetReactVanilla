import { Button, CardMedia, Container, Divider, FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, Step, StepLabel, Stepper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './ProcessShop.css'

const ProcessShop = () => {

    const [activeStep, setActiveStep] = useState(1);
    const navigation = useNavigate()

    const continueProccess = () => {
        setActiveStep(prev => ++prev)
    }
    
    const backProccess = () => {
        setActiveStep(prev => --prev)
    }

    const makeOrder = () =>{
        const idShop = "25327891";
        navigation(`/purchaseOrder/${idShop}`)
    }

    return (
        <Container className="container-mt">
            <Stepper activeStep={activeStep} alternativeLabel>
                <Step>
                    <StepLabel>Registrarse</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Envio</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Metodo de pago</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Realizar pedido</StepLabel>
                </Step>
            </Stepper>
            <Grid container spacing={4}>
            {activeStep ===1 ? (
                <Grid md={6} xs={12} className="grid-pc">
                    <Typography variant="h6" className="text_title">
                        Envio del Producto
                    </Typography>
                    <form onSubmit={(e) => e.preventDefault()} className="form">
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <TextField 
                                label="Direccion"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true
                                }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField 
                                label="Ciudad"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true
                                }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField 
                                label="Pais"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true
                                }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                variant="contained"
                                color="primary"
                                onClick={continueProccess}
                                >
                                    Continuar
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            ) : activeStep === 2? (
                <Grid md={3} xs={12} className="grid-pc">
                    <Typography variant="h6" className="text_title">
                        Metodo de pago
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <FormControl className="form-control">
                                <FormLabel>
                                    Seleccione Metodo
                                </FormLabel>
                                <RadioGroup>
                                    <FormControlLabel
                                    value="Paypal"
                                    control={<Radio color="primary" />}
                                    label="Paypal o Tarjeta"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                            variant="contained"
                            color="primary"
                            className="btn-previous"
                            onClick={backProccess}
                            >
                                Anterior
                            </Button>
                            <Button
                            variant="contained"
                            color="primary"
                            onClick={continueProccess}
                            >
                                Continuar
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            ): activeStep ===3? (
                <Grid container className="grid-pc">
                    <Grid item md={8} xs={12} className="grid-lr">
                        <Typography variant="h6" className="text_title">
                            Envio
                        </Typography>
                        <Typography>
                            Direccion: Calle, cali
                        </Typography>
                        <Divider className="divider" />
                        <Typography variant="h6" className="text_title">
                            Metodo de pago
                        </Typography>
                        <Typography>
                            Metodo: Paypal
                        </Typography>
                        <Divider className="divider" />
                        <Typography variant="h6" className="text_title">
                            Productos
                        </Typography>
                        <TableContainer className="grid-mb">
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            <CardMedia 
                                            className="imgProductCC"
                                            image="https://i.pinimg.com/originals/84/f4/35/84f4353540d1933fae6cbca0c2b266f5.jpg"
                                            title="Imagen en carrito"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Typography className="text_detail">
                                                Abrigo Vaxi Moda 2020
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                        <   Typography className="text_detail">
                                                2 x $25.00 = $50.00
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Button
                        variant="contained"
                        color="primary"
                        onClick={backProccess}
                        >
                            Anterior
                        </Button>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <TableContainer component={Paper} square>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell colSpan={2}>
                                            <Typography variant="h6" className="text_title">
                                                Resumen del pedido
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Typography className="text_title">
                                                Productos
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography className="text_title">
                                                $50.00
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Typography className="text_title">
                                                Envio
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography className="text_title">
                                                $2.00
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Typography className="text_title">
                                                Impuesto
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography className="text_title">
                                                $8.00
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Typography className="text_title">
                                                Total
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography className="text_title">
                                                $60.00
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Button
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            onClick={makeOrder}
                                            >
                                                Realizar pedido
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            ): null}
            </Grid>
        </Container>
    )
}

export default ProcessShop