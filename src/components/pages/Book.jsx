import { Button, Card, Container, Dialog, DialogContent, DialogTitle, Grid, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { addBook, bookList, deleteBookData, editBookData, getBookKey } from "../data/books";

const Book = () => {

    const [book, setBook] =  useState({
        category: '',
        title: '',
        author: ''
    })

    const [bookEdit, setBookEdit] =  useState({
        key: 0,
        categoryE: '',
        titleE: '',
        authorE: ''
    })

    const [booksArray, setBooksArray] = useState([])

    const [open, SetOpen] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setBook( prev => ({
            ...prev,
            [name]: value
        }));
    }

    const clearBook = {
        category: '',
        title: '',
        author: ''
    }

    const saveBook = () => {
        addBook(book);
        setBook(clearBook);
    }

    const bookDataList = () =>{
        const data = bookList()
        setBooksArray(data)
    }

    useEffect(() => {
        bookDataList()
    }, [booksArray.length])

    const openDialog = (key) =>{
        const bookData = getBookKey(key)
        setBookEdit({
            key: key,
            categoryE: bookData.category,
            titleE: bookData.title,
            authorE: bookData.author
        })
        SetOpen(true)
    }

    const deleteData = (data) =>{
        const booksListNew = deleteBookData(data);
        setBooksArray(booksListNew)
    }

    

    const handleChangeEdit = (e) => {
        const {name, value} = e.target;
        setBookEdit( prev => ({
            ...prev,
            [name]: value
        }));
    }

    const editBook = () => {
        const newBooks = editBookData(bookEdit);
        console.log("Edit Book", newBooks)
        closeDialog();
    }

    const closeDialog = () =>{
        SetOpen(false)
    }

    return (
        <Container className="container-mt">
            <Grid container justifyContent="center">
                <Grid item lg={7} md={8}>
                    <Card className="card" align="center">
                        <Typography variant="h4">
                            Libros
                        </Typography>
                        <form className="form" onSubmit={(e) => e.preventDefault()}>
                            <Grid container spacing={2}>
                                <Grid item md={12} xs={12} className="grid-mb">
                                    <TextField
                                        select
                                        label="Categoria"
                                        variant="outlined"
                                        fullWidth
                                        align="left"
                                        name="category"
                                        value={book.category}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="Programacion">Programacion</MenuItem>
                                        <MenuItem value="Historia">Historia</MenuItem>
                                        <MenuItem value="Matematica">Matematica</MenuItem>
                                    </TextField>
                                </Grid>
                                <Grid item md={6} xs={12} className="grid-mb">
                                    <TextField
                                        label="Titulo"
                                        variant="outlined"
                                        fullWidth
                                        name="title"
                                        value={book.title}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12} className="grid-mb">
                                    <TextField
                                        label="Autor"
                                        variant="outlined"
                                        fullWidth
                                        name="author"
                                        value={book.author}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={12} xs={12} className="grid-mb">
                                    <Button
                                    variant="contained"
                                    fullWidth
                                    color="primary"
                                    type="submit"
                                    onClick={saveBook}
                                    >
                                        Guardar
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Card>
                </Grid>
            </Grid>

            <TableContainer component={Paper} className="container-mt">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Categoria</TableCell>
                            <TableCell>Titulo</TableCell>
                            <TableCell>Autor</TableCell>
                            <TableCell align="center" colSpan={2}>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { booksArray.map((b) => (
                            <TableRow key={b.key}>
                                <TableCell>{b.category}</TableCell>
                                <TableCell>{b.title}</TableCell>
                                <TableCell>{b.author}</TableCell>
                                <TableCell>
                                    <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => openDialog(b.key)}
                                    >
                                        Editar
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => deleteData(b)}
                                    >
                                        Eliminar
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )) }
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog open={open} onClose={closeDialog} maxWidth="xs"
            fullWidth align="center"
            >
                <DialogTitle>Editar Libro</DialogTitle>
                <DialogContent>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <TextField
                            select
                            label="Categoria"
                            variant="outlined"
                            fullWidth
                            align="left"
                            className="grid-mb"
                            name="categoryE"
                            value={bookEdit.categoryE}
                            onChange={handleChangeEdit}
                        >
                            <MenuItem value="Programacion">Programacion</MenuItem>
                            <MenuItem value="Historia">Historia</MenuItem>
                            <MenuItem value="Matematica">Matematica</MenuItem>
                        </TextField>

                        <TextField
                            label="Titulo"
                            variant="outlined"
                            fullWidth
                            name="titleE"
                            className="grid-mb"
                            value={bookEdit.titleE}
                            onChange={handleChangeEdit}
                        />

                        <TextField
                            label="Autor"
                            variant="outlined"
                            fullWidth
                            name="authorE"
                            className="grid-mb"
                            value={bookEdit.authorE}
                            onChange={handleChangeEdit}
                        />

                        <Button
                        variant="contained"
                        fullWidth
                        color="primary"
                        className="grid-mb"
                        type="submit"
                        onClick={editBook}
                        >
                            Actualizar
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        </Container>
    );
}

export default Book;