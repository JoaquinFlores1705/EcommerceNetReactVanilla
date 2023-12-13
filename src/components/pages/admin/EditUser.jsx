import { Button, Checkbox, Container, FormControl, FormControlLabel, Grid, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { addRoleUser, getUserById } from "../../../actions/UserAction";
import { useStateValue } from "../../../context/store";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () =>{

    const navigation = useNavigate();
    const [{sessionUser}, dispatch]= useStateValue();

    const [user, setUser] = useState({
        name: "",
        lastname: "",
        email: ""
    });

    const [admin, setAdmin] = useState(false);
    const params = useParams();

    const handleChange = (e) => {
        setAdmin(e.target.checked);
    }

    const updateRoleUser = async (e) => {
        e.preventDefault();
        const id = params.id;
        
        const role = {
            name : "ADMIN",
            status: admin
        };

        const response = await addRoleUser(id, role, dispatch);
        if(response.status == 200){
            navigation("/admin/users");
        }else{
            console.log(response);
            dispatch({
                type:"OPEN_SNACKBAR",
                openMessage: {
                    open: true,
                    message: "No es posible agregar este rol admin"
                }
            })
        }
    }

    useEffect(() => {
        const id = params.id;
        const getUserIdAsync = async() =>{
            const response = await getUserById(id);
            setAdmin(response.data.admin);
            setUser(response.data);
        }
        getUserIdAsync();
    }, [])

    return (
        <Container className="container-mt">
             <Grid Container justifyContent="center" >
                <Grid item lg={6} sm={12}>
                    <Typography variant="h4" className="text_title">
                        Editar Usuario
                    </Typography>
                    <form onSubmit={e => e.preventDefault()} className="form">
                        <TextField 
                        label="Nombre"
                        variant="filled"
                        value={user.name + ' ' + user.lastname}
                        fullWidth
                        disabled
                        className="grid-mb"
                        />
                        <TextField 
                        label="Correo electronico"
                        variant="filled"
                        value={user.email}
                        fullWidth
                        disabled
                        />
                        <FormControl className="checkBox">
                            <FormControlLabel 
                            control={<Checkbox color="primary" />}
                            label="Es administrador"
                            checked={admin}
                            onChange={handleChange}
                            />
                            <Button
                            variant="contained"
                            color="primary"
                            onClick={updateRoleUser}
                            >
                                Actualizar
                            </Button>
                        </FormControl>
                    </form>
                </Grid>
             </Grid>
        </Container>
    )
}

export default EditUser