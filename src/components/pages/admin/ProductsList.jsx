import { Button, Container, Grid, Icon, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getProducts } from "../../../actions/ProductAction";

const ProductsList = () => {

    const navigation = useNavigate()

    const [requestProducts, setRequestProducts] = useState({
        pageIndex: 1,
        pageSize: 4,
        search: ""
    })

    const [paginatorProducts, setPaginatorProducts] = useState({
        count: 0,
        pageIndex:0,
        pageSize:0,
        pageCount:0,
        data:[]
    })

    const handleChange = (event, value) => {
        setRequestProducts( (prev) => ({
            ...prev,
            pageIndex: value
        }));
    }

    useEffect( ()=> {
        const getListProducts = async () => {
            const response = await getProducts(requestProducts)
            setPaginatorProducts(response.data)
        }

        getListProducts();
    }, [requestProducts])

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
                            <TableCell>Categoria</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { paginatorProducts.data.map( p => (
                            <TableRow key={p.id}>
                                <TableCell>{p.id}</TableCell>
                                <TableCell>{p.name}</TableCell>
                                <TableCell>{p.price}</TableCell>
                                <TableCell>{p.brandName}</TableCell>
                                <TableCell>{p.categoryName}</TableCell>
                                <TableCell>
                                    <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => editProduct(p.id)}
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
            <Pagination 
            count={paginatorProducts.pageCount}
            page={paginatorProducts.pageIndex}
            onChange={handleChange}
            />
        </Container>
    )
}

export default ProductsList