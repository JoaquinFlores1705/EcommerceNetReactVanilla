import { Avatar, Button, Container, Grid, TextField, Typography } from "@mui/material"
import { useState } from "react";
import ImageUploading from 'react-images-uploading';

const ProductAdd = () => {
    const [images, setImages] = useState([])
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    return (
        <Container className="container-mt">
            <Grid container justifyContent="center">
                <Grid item sm={6} xs={12}>
                    <Typography variant="h4" className="text_title">
                        Agregar Producto
                    </Typography>
                    <form onSubmit={e => e.preventDefault()} className="form">
                        <TextField 
                            label="Nombre Producto"
                            variant="outlined"
                            fullWidth
                            className="grid-mb"
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <TextField 
                            label="Precio"
                            variant="outlined"
                            fullWidth
                            className="grid-mb"
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <TextField 
                            label="Marca"
                            variant="outlined"
                            fullWidth
                            className="grid-mb"
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <TextField 
                            label="Stock"
                            variant="outlined"
                            fullWidth
                            className="grid-mb"
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <TextField 
                            label="Descripcion"
                            variant="outlined"
                            multiline
                            rows={4}
                            fullWidth
                            className="grid-mb"
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <Grid container spacing={2}>
                            <Grid item sm={6} xs={12}>
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
                                    <div className="image-upload-image">
                                        <img  src="https://www.maxphoto.co.uk/media/wysiwyg/help/Upload.png" alt="Imagen subida" width="100" />
                                        <button
                                            className="btn-upload-image"
                                            onClick={onImageUpload}
                                            >
                                                Buscar Imagen
                                        </button>
                                    </div>
                                    )}
                                </ImageUploading>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <Avatar 
                                variant="square"
                                className="avatar_product"
                                />
                            </Grid>
                        </Grid>
                        <Button
                        variant="contained"
                        color="primary"
                        >
                            Agregar
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ProductAdd