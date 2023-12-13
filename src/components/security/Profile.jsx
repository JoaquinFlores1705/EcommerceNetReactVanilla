import { Button, Container, Divider, Grid, Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import './Profile.css'
import ImageUploading from 'react-images-uploading';
import { useNavigate } from "react-router-dom"
import { useStateValue } from "../../context/store";
import {v4 as uuidv4} from "uuid";
import { updateUser } from "../../actions/UserAction";

const Profile = () =>{

    const imageDefault = "https://www.maxphoto.co.uk/media/wysiwyg/help/Upload.png";
    const [{sessionUser}, dispatch]= useStateValue();
    const [user, setUser] = useState({
        id: "",
        name: "",
        lastname: "",
        email:"",
        image:"",
        password:"",
        file:"",
        imageTemp:""
    });
    const [images, setImages] = useState([]);
    const navigation = useNavigate();
    const keyImage = uuidv4();


    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        let photo = imageList[0].file;
        let photoUrl = "";

        try {
            photoUrl = URL.createObjectURL(photo);
        } catch (e) {
            console.log(e);
        }

        setUser(prev => ({
            ...prev,
            file: photo,
            imageTemp: photoUrl
        }))

        setImages(imageList);
    };

    const showDetails = () =>{
        const idShop = "25327891";
        navigation(`/purchaseOrder/${idShop}`)
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const saveUser = (e) => {
        e.preventDefault();
        updateUser(sessionUser.user.id, user, dispatch)
        .then (res => {
            if(res.status == 200){
                window.localStorage.setItem("token", res.data.token);
                navigation('/');
            }
            else{
                dispatch({
                    type: "OPEN_SNACKBAR",
                    openMessage:{
                        open: true,
                        message: "Errores al actualizar usuario"
                    }
                });
            }
        })
    }

    useEffect( () => {
        if(sessionUser){
            setUser(sessionUser.user)
        }
    }, [sessionUser])

    return (
        <Container className="container-mt">
            <Grid container spacing={2}>
                <Grid item md={3} xs={12}>
                    <Typography variant="h5" className="text_title">
                        Perfil de usuario
                    </Typography>
                    <form onSubmit={e => e.preventDefault()}
                    className="form"
                    >
                        <ImageUploading
                            key={keyImage}
                            value={images}
                            onChange={onChange}
                            dataURLKey="data_url"
                            acceptType={["jpg","png","jpeg","gif"]}
                            maxFileSize={5242880}
                        >
                            {({
                            imageList,
                            onImageUpload,
                            }) => (
                            // write your building UI
                            <div className="upload__image-wrapper">
                                <div className="image-item">
                                    <img className="image-img" src={
                                        imageList.length > 0 
                                        ? imageList[0].data_url
                                        : 
                                        (user.image ? user.image : imageDefault)
                                        } alt="" width="100" />
                                    <button
                                    onClick={onImageUpload}
                                    className="image-button-item"
                                    >
                                        <Icon>add_a_photo</Icon>
                                    </button>
                                </div>
                            </div>
                            )}
                        </ImageUploading>
                        <TextField 
                        label="Nombre"
                        variant="outlined"
                        fullWidth
                        className="grid-mb"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        />
                        <TextField 
                        label="Apellidos"
                        variant="outlined"
                        fullWidth
                        className="grid-mb"
                        name="lastname"
                        value={user.lastname}
                        onChange={handleChange}
                        />
                        <TextField 
                        label="Correo electronico"
                        variant="outlined"
                        fullWidth
                        className="grid-mb"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        />
                        <Divider className="divider" />
                        <TextField 
                        label="Password"
                        variant="outlined"
                        fullWidth
                        className="grid-mb"
                        name="password"
                        />
                        <TextField 
                        label="Confirmar Password"
                        variant="outlined"
                        fullWidth
                        className="grid-mb"
                        />
                        <Button
                        variant="contained"
                        color="primary"
                        onClick={saveUser}
                        >
                            Actualizar
                        </Button>
                    </form>
                </Grid>
                <Grid item md={9} xs={12}>
                    <Typography
                    variant="h5"
                    className="text_title"
                    >
                        Mis pedidos
                    </Typography>
                    <TableContainer className="form">
                        <Table className="table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
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
                                    <TableCell>2020-12-15</TableCell>
                                    <TableCell>60.00</TableCell>
                                    <TableCell>2020-12-15</TableCell>
                                    <TableCell>
                                        <Icon className="iconNotDelivered">
                                            clear
                                        </Icon>
                                        {/*<Icon className="iconDelivered">
                                            check
                                        </Icon>*/}
                                    </TableCell>
                                    <TableCell>
                                        <Button
                                        variant="contained"
                                        onClick={showDetails}
                                        >
                                            Detalles
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Profile