import { Button, Container, Divider, Grid, Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { useState } from "react";
import './Profile.css'
import ImageUploading from 'react-images-uploading';
import { useNavigate } from "react-router-dom"

const Profile = () =>{

    const [images, setImages] = useState([]);
    const navigation = useNavigate()
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    const showDetails = () =>{
        const idShop = "25327891";
        navigation(`/purchaseOrder/${idShop}`)
    }

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
                                    <img className="image-img" src={imageList.length > 0 ? imageList[0].data_url: "https://www.maxphoto.co.uk/media/wysiwyg/help/Upload.png"} alt="" width="100" />
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
                        value="Paul"
                        />
                        <TextField 
                        label="Apellidos"
                        variant="outlined"
                        fullWidth
                        className="grid-mb"
                        value="Flores"
                        />
                        <TextField 
                        label="Correo electronico"
                        variant="outlined"
                        fullWidth
                        className="grid-mb"
                        value="paul_1705@outlook.com"
                        />
                        <Divider className="divider" />
                        <TextField 
                        label="Password"
                        variant="outlined"
                        fullWidth
                        className="grid-mb"
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