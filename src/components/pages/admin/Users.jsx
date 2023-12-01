import { Button, Container, Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";

const Users = () =>{

    const navigation = useNavigate()

    const editUser = () =>{
        const id = "1";
        navigation(`/admin/user/${id}`)
    }

    return(
        <Container className="container-mt">
            <Typography variant="h4" className="text_title">
                Usuarios
            </Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Usuario</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Admin</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>Paul Flores</TableCell>
                            <TableCell>paul_1705@outlook.com</TableCell>
                            <TableCell>
                                <Icon className="iconDelivered">
                                    check
                                </Icon>
                            </TableCell>
                            <TableCell>
                                <Button
                                variant="contained"
                                color="primary"
                                onClick={editUser}
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
                        <TableRow>
                            <TableCell>2</TableCell>
                            <TableCell>Vanessa Flores</TableCell>
                            <TableCell>vanessa@outlook.com</TableCell>
                            <TableCell>
                                <Icon className="iconNotDelivered">
                                    clear
                                </Icon>
                            </TableCell>
                            <TableCell>
                                <Button
                                variant="contained"
                                color="primary"
                                onClick={editUser}
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
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default Users