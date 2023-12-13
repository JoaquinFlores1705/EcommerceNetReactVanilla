import { Avatar, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useEffect } from "react";
import { useState } from "react";
import ImageUploading from 'react-images-uploading';
import { useNavigate, useParams } from "react-router-dom";
import { getProduct, updateProduct } from "../../../actions/ProductAction";
import {v4 as uuidv4} from "uuid";

const ProductEdit = () =>{

    const imageDefault = "https://i.pinimg.com/originals/84/f4/35/84f4353540d1933fae6cbca0c2b266f5.jpg";

    const params = useParams();

    const [images, setImages] = useState([]);
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");
    const [product, setProduct] = useState({
        id: 0,
        name: "",
        description: "",
        stock: 0,
        brandId:0,
        categoryId:0,
        price:0.0,
        image:"",
        file:"",
        imageTemp: null
    });
    const navigation = useNavigate();

    const keyImage = uuidv4();

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

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);

        let photo = imageList[0].file;
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

    const saveProduct = async () => {
        const id = params.id;
        product.categoryId = category;
        product.brandId = brand;

        const result = await updateProduct(id, product);
        console.log(result);

        navigation("/admin/productList");
    }

    useEffect(() => {

        const id = params.id;

        const getProductAsync = async()=>{
            const response = await getProduct(id);
            setProduct(response.data);
            setCategory(response.data.categoryId);
            setBrand(response.data.brandId);
        }
        
        getProductAsync();

    }, [])

    return(
        <Container className="container-mt">
            <Grid container justifyContent="center">
                <Grid item sm={6} xs={12}>
                    <Typography 
                    variant="h4"
                    className="text_title"
                    >
                        Editar Producto
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
                            value={product.name}
                            name="name"
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
                            value={product.price}
                            name="price"
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
                            value={product.stock}
                            name="stock"
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
                            value={product.description}
                            name="description"
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
                                    (product.image? product.image : imageDefault)}
                                />
                            </Grid>
                        </Grid>
                        <Button
                        variant="contained"
                        color="primary"
                        onClick={saveProduct}
                        >
                            Actualizar
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ProductEdit