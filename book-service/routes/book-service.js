import { books } from '../books.js'
import { getLinkedData,getMultipleLinkedData } from '../utils.js';

export const bookService = {
    getBooksById: async (id) => {
        let foundBook =  books.find((entry) => {
            return entry.id == id;
        })
        return await getLinkedData(foundBook);
    },
    getAllBooks: async () => {
        return await getMultipleLinkedData(books); 
    },
    createBook: async({name, author_id, category_id}) => {
        let id_max = books.length+1;
        let newBook = {
            name,
            author_id,
            category_id,
            id: id_max
        }
        books.push(newBook);
        return await getLinkedData(newBook);
    },
    updateBooks: async({name, author_id, category_id,id}) => {
        let bookToUpdate = books.find((entry) => {
            return entry.id == id;
        });
        if(name){
            bookToUpdate.name = name;
        }
        if(author_id){
            bookToUpdate.author_id = author_id;
        }
        if(category_id){
            bookToUpdate.category_id = category_id;
        }
        return await getLinkedData(bookToUpdate);
    }
}