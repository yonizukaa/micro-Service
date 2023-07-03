import { authors } from "./author.js";
import { eventBus } from "./EventBus.js";
export const authorService = {
  getAllAuthors: () => {
    return authors;
  },

  getAuthorById: (id) => {
    return authors.find((author) => author.id === id);
  },

  createAuthor: (name) => {
    const newAuthor = {
      id: authors.length + 1,
      name
    };
    authors.push(newAuthor);
    eventBus.publish("authorCreated", newAuthor);
    return newAuthor;
  },

  updateAuthor: (id, name) => {
    const author = authors.find((author) => author.id === id);
    if (author) {
      author.name = name;

      eventBus.publish("authorUpdated", author);
      return author;
    }
    return null;
  },

  deleteAuthor: (id) => {
    const index = authors.findIndex((author) => author.id === id);
    if (index !== -1) {
      authors.splice(index, 1);

      eventBus.publish("authorDeleted", deletedAuthor);
      return true;
    }
    return false;
  }
};
