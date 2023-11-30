import { Avatar, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import './Product.css'
import { productsArray } from "../data/products";
import { Link } from "react-router-dom"

const Product = () => {

    const productsArrayD = productsArray

    return (
        <Container className="container-mt">
            <Typography variant="h4" className="text_title">
                Productos
            </Typography>
            <Grid container spacing={4}>
                { productsArrayD.map(p => (
                <Grid item lg={3} md={4} sm={6} xs={12} key={p.key}>
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
                                {p.title}
                            </Typography>
                            <Link to={`/detailsProduct/${p.key}`}>
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
        </Container>
    );
}

export default Product