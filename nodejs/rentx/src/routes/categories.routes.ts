import { Router } from "express";
import { v4 as uuidv4 } from "uuid";
import { Category } from "../model/Category";
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { PostgresCategoryRepository } from "../repositories/PostgresCategoryRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();
const createCategory = new CreateCategoryService(categoriesRepository);

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  createCategory.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();
  return response.status(200).json(all);
});

export { categoriesRoutes };
