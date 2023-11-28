let booksArray = [];
let key = 0;

export const addBook = (book) => {
    let bookJson = book;
    key++;
    bookJson.key = key
    booksArray.push(bookJson);

    console.log('data books', booksArray)
}

export const bookList = () => {
    return booksArray;
}

export const getBookKey = (key) => {
    return booksArray.find( b => b.key == key)
}

export const editBookData = (data) =>{
    booksArray.forEach( book => {
        if(data.key == book.key){
            book.category = data.categoryE;
            book.title = data.titleE;
            book.author = data.authorE;
        }
    })
    return booksArray;
}

export const deleteBookData = (book) => {
    booksArray = booksArray.filter(b => b.key !== book.key)
    const bookNewData = bookList()
    return bookNewData
}