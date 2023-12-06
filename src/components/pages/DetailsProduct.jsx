import { Button, CardMedia, Container, Grid, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material"
import './DetailsProduct.css'
import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getProduct } from "../../actions/ProductAction"
import { addItem } from "../../actions/ShoppingCartAction"
import { useStateValue } from "../../context/store"

const DetailsProduct = () =>{

    const params = useParams();

    const [{sessionShoppingCart}, dispatch] = useStateValue();
    const [amount, setAmount] = useState(1);
    const navigation = useNavigate();
    const [selectedProduct, setSelectedProduct] = useState({
        id: 0,
        name: "",
        description: "",
        stock: 0,
        brandId: 0,
        brandName: "",
        categoryId: 0,
        categoryName: "",
        price: 0,
        image: ""
    });

    useEffect(() => {
        const id = params.id;
        const getProductAsync = async () =>{
            const response = await getProduct(id);
            setSelectedProduct(response.data);
        }

        getProductAsync();

    }, []);

    const addCart = async () => {
        const item = {
            id: selectedProduct.id,
            product: selectedProduct.name,
            price: selectedProduct.price,
            amount: amount,
            image: selectedProduct.image,
            brand: selectedProduct.brandName,
            category: selectedProduct.categoryName
        };

        await addItem(sessionShoppingCart,item,dispatch);

        navigation("/cartshop");
    }

    return (
        <Container className="container-mt">
            <Typography variant="h4" className="text_title">
                {selectedProduct.name}
            </Typography>
            <Grid container spacing={4}>
                <Grid item lg={8} md={8} xs={12}>
                    <Paper className="paper_img" variant="outlined" square>
                        <CardMedia 
                            className="media_detail"
                            image="https://i.pinimg.com/originals/84/f4/35/84f4353540d1933fae6cbca0c2b266f5.jpg"
                            title={selectedProduct.description}
                        />
                    </Paper>
                </Grid>
                <Grid item lg={4} md={4} xs={12}>
                    <TableContainer component={Paper} variant="outlined">
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="subtitle2">
                                            Precio
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">
                                            {selectedProduct.price}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="subtitle2">
                                            Cantidad
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <TextField 
                                            id="product-amount"
                                            label=""
                                            type="number"
                                            value={amount}
                                            onChange={e => setAmount(e.target.value)}
                                            defaultValue={1}
                                            InputLabelProps={{
                                                shrink: true
                                            }}
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}>
                                        <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        onClick={addCart}
                                        >
                                            Agregar a carrito
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item lg={8} md={8} xs={12}>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <Typography className="text_detail">
                                Precio: {selectedProduct.price}
                            </Typography>
                            <Typography className="text_detail">
                                Unidades Disponible: {selectedProduct.stock}
                            </Typography>
                            <Typography className="text_detail">
                                Marca: {selectedProduct.brandName}
                            </Typography>
                            <Typography className="text_detail">
                                Temporada: {selectedProduct.categoryName}
                            </Typography>
                        </Grid>
                        <Grid item md={6}>
                            <Typography className="text_detail">
                                Descripcion:
                            </Typography>
                            <Typography className="text_detail">
                                {selectedProduct.description}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default DetailsProduct