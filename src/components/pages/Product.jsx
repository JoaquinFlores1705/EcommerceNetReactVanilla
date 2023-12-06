import { Avatar, Button, Card, CardContent, CardMedia, Container, Grid, Pagination, Typography } from "@mui/material";
import './Product.css'
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { getProducts } from "../../actions/ProductAction";

const Product = () => {

    const [requestProducts, setRequestProducts] = useState({
        pageIndex: 1,
        pageSize: 2,
        search: ''
    })

    const [paginatorProducts, setPaginatorProducts] = useState({
        count:0,
        pageIndex:0,
        pageSize:0,
        pageCount:0,
        data: []
    })

    useEffect(() => {
        const getListProducts = async () =>{
            const response = await getProducts(requestProducts)
            setPaginatorProducts(response.data)
        }

        getListProducts()
    }, [requestProducts])

    const handleChange = (event, value) => {
        setRequestProducts( (ant) => ({
            ...ant,
            pageIndex: value
        }))
    }

    if(!paginatorProducts.data){
        return null;
    }

    return (
        <Container className="container-mt">
            <Typography variant="h4" className="text_title">
                Productos
            </Typography>
            <Grid container spacing={4}>
                { paginatorProducts.data.map(p => (
                <Grid item lg={3} md={4} sm={6} xs={12} key={p.id}>
                    <Card>
                        <CardMedia 
                        className="media"
                        image="https://i.pinimg.com/originals/84/f4/35/84f4353540d1933fae6cbca0c2b266f5.jpg"
                        title="Mi producto"
                        >
                            <Avatar variant="square" className="price">
                                ${p.price}
                            </Avatar>
                        </CardMedia>
                        <CardContent>
                            <Typography variant="h6" className="text_card">
                                {p.name}
                            </Typography>
                            <Link to={`/detailsProduct/${p.id}`}>
                                <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                > 
                                    Mas Detalles
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </Grid>
                )) }
            </Grid>
            <Pagination className="pagination" count={paginatorProducts.pageCount} page={paginatorProducts.pageIndex}
            onChange={handleChange}
            />
        </Container>
    );
}

export default Product