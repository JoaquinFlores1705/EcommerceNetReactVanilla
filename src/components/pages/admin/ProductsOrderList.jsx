import { Button, Container, Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"

const ProductsOrderList = () =>{
    
    return (
        <Container className="container-mt">
            <Typography variant="h5" className="text_title">
                Pedidos
            </Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Usuario</TableCell>
                            <TableCell>Fecha</TableCell>
                            <TableCell>Total</TableCell>
                            <TableCell>Pagado</TableCell>
                            <TableCell>Entregado</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>Paul Flores</TableCell>
                            <TableCell>2020-12-22</TableCell>
                            <TableCell>$60.00</TableCell>
                            <TableCell>2020*-12-23</TableCell>
                            <TableCell>
                                <Icon className="iconDelivered">check</Icon>
                            </TableCell>
                            <TableCell>
                                <Button
                                variant="contained"
                                color="inherit"
                                >
                                    Detalles
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>2</TableCell>
                            <TableCell>Vanessa Flores</TableCell>
                            <TableCell>2020-12-20</TableCell>
                            <TableCell>$150.00</TableCell>
                            <TableCell>2020*-12-23</TableCell>
                            <TableCell>
                                <Icon className="iconNotDelivered">clear</Icon>
                            </TableCell>
                            <TableCell>
                                <Button
                                variant="contained"
                                color="inherit"
                                >
                                    Detalles
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default ProductsOrderList