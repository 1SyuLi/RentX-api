import { CategoryRepository } from "../../repositories/CategoryRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesRepositories = CategoryRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepositories);
const importCategoryController = new ImportCategoryController(importCategoryUseCase);


export { importCategoryController };