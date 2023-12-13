import { Avatar, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useState } from "react";
import ImageUploading from 'react-images-uploading';
import { registerProduct } from "../../../actions/ProductAction";
import {v4 as uuidv4} from "uuid";
import { useNavigate } from "react-router-dom";

const ProductAdd = () => {

    const imageDefault = "https://i.pinimg.com/originals/84/f4/35/84f4353540d1933fae6cbca0c2b266f5.jpg";
    const navigation = useNavigate();
    const [images, setImages] = useState([])
    const [category, setCategory] = useState("")
    const [brand, setBrand] = useState("")
    const [product, setProduct] = useState({
        id: 0,
        name:"",
        desciption:"",
        stock:"",
        brandId:0,
        categoryId:0,
        price:0.0,
        image: "",
        file: "",
        imageTemp: null
    })

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);

        const photo = imageList[0].file;
        let photoUrl = "";
        try {
            photoUrl = URL.createObjectURL(photo)
        } catch (e) {
            console.log(e)
        }
        setProduct(prev => ({
            ...prev,
            file: photo,
            imageTemp: photoUrl
        }))
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value)
    };

    const handleBrandChange = (event) => {
        setBrand(event.target.value)
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setProduct(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const saveProduct = async () =>{
        product.categoryId = category
        product.brandId = brand
        const result = await registerProduct(product)
        console.log("Guardar producto", result)
        navigation("/admin/productList");
    }

    const keyImage = uuidv4();

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
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                        />
                        <TextField 
                            label="Precio"
                            variant="outlined"
                            fullWidth
                            className="grid-mb"
                            InputLabelProps={{
                                shrink: true
                            }}
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                        />
                        
                        <TextField 
                            label="Stock"
                            variant="outlined"
                            fullWidth
                            className="grid-mb"
                            InputLabelProps={{
                                shrink: true
                            }}
                            name="stock"
                            value={product.stock}
                            onChange={handleChange}
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
                            name="description"
                            value={product.description}
                            onChange={handleChange}
                        />

                        <FormControl className="form-control">
                            <InputLabel id="brand-select-label">
                                Marca
                            </InputLabel>
                            <Select
                            labelId="brand-select-label"
                            id="brand-select"
                            value={brand}
                            onChange={handleBrandChange}
                            >
                                <MenuItem value={1}>
                                    Nike
                                </MenuItem>
                                <MenuItem value={2}>
                                    Adidas
                                </MenuItem>
                                <MenuItem value={3}>
                                    Maldiva
                                </MenuItem>
                            </Select>
                        </FormControl>
                        
                        <FormControl className="form-control">
                            <InputLabel id="category-select-label">
                                Categoria
                            </InputLabel>
                            <Select
                            labelId="category-select-label"
                            id="category-select"
                            value={category}
                            onChange={handleCategoryChange}
                            >
                                <MenuItem value={1}>
                                    Verano
                                </MenuItem>
                                <MenuItem value={2}>
                                    Invierno
                                </MenuItem>
                                <MenuItem value={3}>
                                    Primavera
                                </MenuItem>
                            </Select>
                        </FormControl>
                        
                        <Grid container spacing={2}>
                            <Grid item sm={6} xs={12}>
                                <ImageUploading
                                    value={images}
                                    onChange={onChange}
                                    key={keyImage}
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
                                src={
                                    product.imageTemp
                                    ?
                                    product.imageTemp
                                    :
                                    imageDefault}
                                />
                            </Grid>
                        </Grid>
                        <Button
                        variant="contained"
                        color="primary"
                        onClick={saveProduct}
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