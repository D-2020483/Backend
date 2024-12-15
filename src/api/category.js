import express from "express";
import { createCategory, deleteCategory, getCategories, getCategory, updateCategory } from "../application/category.js";

export const categoryRouter = express.Router()

categoryRouter.route('/').get(getCategories).post(createCategory)
categoryRouter.route('/:id').get(getCategory).patch(updateCategory).delete(deleteCategory)

