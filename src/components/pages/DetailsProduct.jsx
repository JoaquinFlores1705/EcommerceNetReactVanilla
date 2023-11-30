import { Button, CardMedia, Container, Grid, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material"
import './DetailsProduct.css'
import { Link } from "react-router-dom"

const DetailsProduct = (props) =>{

    

    return (
        <Container className="container-mt">
            <Typography variant="h4" className="text_title">
                Producto
            </Typography>
            <Grid container spacing={4}>
                <Grid item lg={8} md={8} xs={12}>
                    <Paper className="paper_img" variant="outlined" square>
                        <CardMedia 
                            className="media_detail"
                            image="https://i.pinimg.com/originals/84/f4/35/84f4353540d1933fae6cbca0c2b266f5.jpg"
                            title="Mi producto"
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
                                            $25.99
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
                                        size="small"
                                        select
                                        variant="outlined"
                                        >
                                            <MenuItem value={1}>
                                                1
                                            </MenuItem>
                                            <MenuItem value={2}>
                                                2
                                            </MenuItem>
                                            <MenuItem value={3}>
                                                3
                                            </MenuItem>
                                        </TextField>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}>
                                        <Link to={`/cartshop`}>
                                            <Button
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            >
                                                Agregar a carrito
                                            </Button>
                                        </Link>
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
                                Precio: 25.99
                            </Typography>
                            <Typography className="text_detail">
                                Unidades Disponible: 15
                            </Typography>
                            <Typography className="text_detail">
                                Marca: Marx
                            </Typography>
                            <Typography className="text_detail">
                                Temporada: Invierno
                            </Typography>
                        </Grid>
                        <Grid item md={6}>
                            <Typography className="text_detail">
                                Descripcion:
                            </Typography>
                            <Typography className="text_detail">
                                Abrigo de invierno de temporada, totalmente olor a fresas
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default DetailsProduct