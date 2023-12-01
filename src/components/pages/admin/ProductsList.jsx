import { Button, Container, Grid, Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { productsArray } from "../../data/products"
import { useNavigate } from "react-router-dom";

const ProductsList = () => {

    const navigation = useNavigate()
    const products = productsArray;

    const addProduct = () =>{
        navigation('/admin/addProduct')
    }

    const editProduct = (id) =>{
        navigation(`/admin/editProduct/${id}`)
    }

    return (
        <Container className="container-mt">
            <Grid container>
                <Grid item lg={6} sm={6} xs={12}>
                    <Typography variant="h4" className="text_title">
                        Productos
                    </Typography>
                </Grid>
                <Grid item lg={6} sm={6} xs={12}>
                    <Button
                    variant="contained"
                    color="inherit"
                    className="btnAdd"
                    onClick={addProduct}
                    >
                        <Icon>add</Icon>
                        Agregar Producto
                    </Button>
                </Grid>
            </Grid>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Precio</TableCell>
                            <TableCell>Marca</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { products.map( p => (
                            <TableRow key={p.key}>
                                <TableCell>{p.key}</TableCell>
                                <TableCell>{p.title}</TableCell>
                                <TableCell>{p.price}</TableCell>
                                <TableCell>{p.brand}</TableCell>
                                <TableCell>
                                    <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => editProduct(p.key)}
                                    >
                                        <Icon>edit</Icon>
                                    </Button>
                                    <Button
                                    variant="contained"
                                    color="secondary"
                                    >
                                        <Icon>delete</Icon>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )) }
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default ProductsList