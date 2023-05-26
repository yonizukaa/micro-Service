const fetchIds = async(url,ids) => {
    let response =  await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ids)
    });
    return await response.json();
}

const formatByField = (data,field) => {
    return data.reduce((prev,cur) => {
        prev[cur[field]] = cur;
        return prev;
    },{})
}

export const getLinkedData = async (books) => {
    const responseAuthor = await fetch(`http://localhost:4500/get/${books.author_id}`);
    const dataAuthor = await responseAuthor.json();
    const responseCategory = await fetch(`http://localhost:4600/get/${books.category_id}`);
    const dataCategory = await responseCategory.json();
    books.category = dataCategory;
    books.author= dataAuthor;
    return books;
}

export const getMultipleLinkedData = async (books) => {
    let idsAuthors = books.map((book) => {
        return book.author_id;
    })
    let idsCategory = books.map((book) => {
        return book.category_id
    })
    let authors = await fetchIds('http://localhost:4500/get/multiple',idsAuthors);
    authors = formatByField(authors,"id");
    let categories = await fetchIds('http://localhost:4600/get/multiple',idsCategory);
    categories = formatByField(categories,"id");
    return books.map((book) => {
        book.category = categories[book.category_id];
        book.author = authors[book.author_id];
        return book;
    })

}
