import { Button, CardMedia, Container, Divider, Grid, Icon, IconButton, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material";
import { productsArray } from "../data/products";
import './CartShop.css'
import { Link } from "react-router-dom";

const CartShop = () => {

    const productsArrayD = productsArray;

    return (
        <Container className="container-mt">
            <Typography variant="h4" className="text_title">
                Carrito de compras
            </Typography>
            <Grid container spacing={2}>
                <Grid item lg={9} md={8} sm={12} xs={12}>
                    <TableContainer>
                        <Table>
                            <TableBody>
                                { productsArrayD.map( p => (
                                    <TableRow key={p.key}>
                                        <TableCell>
                                            <CardMedia 
                                            className="imgProductCC"
                                            image="https://i.pinimg.com/originals/84/f4/35/84f4353540d1933fae6cbca0c2b266f5.jpg"
                                            title="Imagen en carrito"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Typography className="text_detail">
                                                {p.title}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography className="text_detail">
                                                ${p.price}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                            select
                                            variant="outlined"
                                            size="small"
                                            >
                                                <MenuItem value={1}>1</MenuItem>
                                                <MenuItem value={2}>2</MenuItem>
                                                <MenuItem value={3}>3</MenuItem>
                                                <MenuItem value={4}>4</MenuItem>
                                                <MenuItem value={5}>5</MenuItem>
                                            </TextField>
                                        </TableCell>
                                        <TableCell>
                                            <IconButton>
                                                <Icon>delete</Icon>
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                )) }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Paper variant="outlined" square className="papper_padding">
                        <Typography variant="h6" className="text_title">
                            Subtotal ({productsArrayD.length}) Productos
                        </Typography>
                        <Typography className="text_title">
                            $143.66
                        </Typography>
                        <Divider className="grid-mb" />
                        <Link to={`/cartshopproccess`}>
                            <Button variant="contained" color="primary" size="large">
                                Realizar Compra
                            </Button>
                        </Link>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
};

export default CartShop