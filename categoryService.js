// categoryService.js
import { categories } from "./category.js";
import { eventBus } from "./EventBus.js";


export const categoryService = {
  getAllCategories: () => {
    return categories;
  },

  getCategoryById: (id) => {
    return categories.find((category) => category.id === id);
  },

  createCategory: (name) => {
    const newCategory = {
      id: categories.length + 1,
      name
    };
    categories.push(newCategory);
    eventBus.publish("categoryCreated", newCategory);
    return newCategory;
  },

  updateCategory: (id, name) => {
    const category = categories.find((category) => category.id === id);
    if (category) {
      category.name = name;

      eventBus.publish("categoryUpdated", category);
      return category;
    }
    return null;
  },

  deleteCategory: (id) => {
    const index = categories.findIndex((category) => category.id === id);
    if (index !== -1) {
      categories.splice(index, 1);


      eventBus.publish("categoryDeleted", deletedCategory);
      return true;
    }
    return false;
  }
};
