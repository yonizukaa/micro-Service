// bookService.js
import { books } from "./book.js";
import { eventBus } from "./EventBus.js";

export const bookService = {
  getAllBooks: () => {
    return books;
  },

  getBookById: (id) => {
    return books.find((book) => book.id === id);
  },

  createBook: (title, authorId, categoryId) => {
    const newBook = {
      id: books.length + 1,
      title,
      authorId,
      categoryId
    };
    books.push(newBook);

    eventBus.publish("bookCreated", newBook);
    return newBook;
  },

  updateBook: (id, title, authorId, categoryId) => {
    const book = books.find((book) => book.id === id);
    if (book) {
      book.title = title;
      book.authorId = authorId;
      book.categoryId = categoryId;

      eventBus.publish("bookUpdated", book);

      return book;
    }
    return null;
  },

  deleteBook: (id) => {
    const index = books.findIndex((book) => book.id === id);
    if (index !== -1) {
      books.splice(index, 1);

      eventBus.publish("bookDeleted", deletedBook);

      return true;
    }
    return false;
  }
};
