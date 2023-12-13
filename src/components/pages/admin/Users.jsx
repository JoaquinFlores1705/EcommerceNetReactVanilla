import { Button, Container, Icon, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../../actions/UserAction";

const Users = () =>{

    const navigation = useNavigate();
    const[requestUsers, setRequestUsers] = useState({
        pageIndex: 1,
        pageSize: 3,
        search: ""
    });

    const [paginatorUsers, setPaginatorUsers] = useState({
        count: 0,
        pageIndex: 0,
        pageSize: 0,
        pageCount: 0,
        data: []
    });

    const handleChange = (event, value) =>{
        setRequestUsers(prev => ({
            ...prev,
            pageIndex: value
        }));
    }

    useEffect(() => {
        const getListUsers = async () =>{
            const response =await getUsers(requestUsers);
            setPaginatorUsers(response.data);
        }

        getListUsers();

    }, [requestUsers])

    const editUser = (id) =>{
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
                            <TableCell>Username</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            paginatorUsers.data.map( u => (
                                <TableRow key={u.id}>
                                    <TableCell>{u.id}</TableCell>
                                    <TableCell>{u.name + ' ' + u.lastname}</TableCell>
                                    <TableCell>{u.email}</TableCell>
                                    <TableCell>{u.username}</TableCell>
                                    <TableCell>
                                        <Icon className="iconDelivered">
                                            check
                                        </Icon>
                                    </TableCell>
                                    <TableCell>
                                        <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={ () => editUser(u.id)}
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
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination 
                count={paginatorUsers.pageCount} 
                page={paginatorUsers.pageIndex}
                onChange={handleChange}
            />
        </Container>
    )
}

export default Users