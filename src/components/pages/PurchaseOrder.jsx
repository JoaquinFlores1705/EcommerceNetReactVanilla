import { Button, CardMedia, Container, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import './PurchaseOrder.css'

const PurchaseOrder = () =>{

    const params = useParams()
    const messageShipment = "Entregado 2020-12-26";
    const messagePay = "Pagado en 2020-12-23";

    return (
        <Container className="container-mt">
            <Typography variant="h5" className="text_title">
                Orden de compra: {params.id.toUpperCase()}
            </Typography>
            <Grid container spacing={2} className="papper_padding">
                <Grid item md={8} xs={12}>
                    <Typography variant="h6" className="text_title">
                        Envio
                    </Typography>
                    <Typography variant="body2" className="text_shipment">
                        Nombres: Joaquin Flores Moreira
                    </Typography>
                    <Typography variant="body2" className="text_shipment">
                        Email: paul_1705@outlook.com
                    </Typography>
                    <Typography variant="body2" className="text_shipment">
                        Direccion: Calle, cali
                    </Typography>
                    <div className="alertDelivered">
                        <Typography variant="body2" className="text_title">
                            {messageShipment}
                        </Typography>
                    </div>
                    <Divider className="divider" />
                    <Typography variant="h6" className="text_title">
                        Metodo de pago
                    </Typography>
                    <Typography>
                        Metodo: Paypal
                    </Typography>
                    <div className="alertDelivered">
                        <Typography variant="body2" className="text_title">
                            {messagePay}
                        </Typography>
                    </div>
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
                                    <TableCell colSpan={2}>
                                        <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        fullWidth
                                        className="grid-mb"
                                        >
                                            Paypal
                                        </Button>
                                        <Button
                                        variant="contained"
                                        color="secondary"
                                        size="large"
                                        fullWidth
                                        >
                                            Tarjeta de Credito o Debito
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Container>
    )
}

export default PurchaseOrder;