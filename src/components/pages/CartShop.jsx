import { Button, CardMedia, Container, Divider, Grid, Icon, IconButton, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { productsArray } from "../data/products";
import './CartShop.css'
import { Link } from "react-router-dom";
import { useStateValue } from "../../context/store";

const CartShop = () => {

    const [{sessionShoppingCart}, dispatch] = useStateValue();

    const productsArrayD = sessionShoppingCart ? sessionShoppingCart.items: [];
    let sum = 0;
    productsArrayD.forEach(p => {
        sum += p.price
    });

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
                                    <TableRow key={p.id}>
                                        <TableCell>
                                            <CardMedia 
                                            className="imgProductCC"
                                            image={p.image ? p.image : "https://i.pinimg.com/originals/84/f4/35/84f4353540d1933fae6cbca0c2b266f5.jpg"}
                                            title={p.product}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Typography className="text_detail">
                                                {p.product}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography className="text_detail">
                                                ${p.price}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography className="text_detail">
                                                ${p.amount}
                                            </Typography>
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
                            ${Math.round(sum * 100) /100}
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