import NotFoundError from "../domain/errors/not-found-error.js";
import Category from "../infrastructure/schemas/Category.js";

const categories = [
    {id: "1", name: "Headphoones"},
    {id: "2", name: "Smart Speakers"},
    {id: "3", name: "Smart Watch"},
    {id: "4", name: "Smartphones"},
    {id: "5", name: "Accessories"}

];
// Get All Categories
export const getCategories = async (req, res, next) => { 
  try {
    const data = await Category.find();
    return res.status(200).json(data).send();
  } catch (error) {
    next(error);
    
  }
  
};

//Create A New Category
export const createCategory = async (req, res , next) => {
  try {
    await Category.create(req.body);
    return res.status(201).send();
  } catch (error) {
    next(error);
  }
 
};

//Read Single Category 
export const getCategory = async (req, res , next) => {
    try {
      const id = req.params.id;
      const category = await Category.findById(id);
    
      if (!category) {
        throw new NotFoundError("Categoory not found");
      }
      return res.status(200).json(category).send();
      
    } catch (error) {
      next(error);
    }
    
  };

//Update A Category
export const updateCategory = async (req, res , next) => {
    try {
      const id = req.params.id;
    const category = await Category.findByIdAndUpdate(id, req.body);
  
    if(!category){
      throw new NotFoundError("Category not found");
    }
    return res.status(200).send(category); 
    } catch (error) {
      next(error);
    }
  
  };

  //Delete A Category
  export const deleteCategory = async (req, res , next) => {
    try {
      const id = req.params.id;
      const category = await Category.findByIdAndDelete(id);
      if(!category) {
        throw new NotFoundError("Category not found");
      }
        
        return res.status(204).send()
      
    } catch (error) {
      next(error);
    }
  
  };

