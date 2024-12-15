import NotFoundError from "../domain/errors/not-found-error.js";


const categories = [
    {id: "1", name: "Headphoones"},
    {id: "2", name: "Smart Speakers"},
    {id: "3", name: "Smart Watch"},
    {id: "4", name: "Smartphones"},
    {id: "5", name: "Accessories"}

];
// Get All Categories
export const getCategories = (req, res, next) => { 
  try {
    return res.status(200).json(categories).send();
  } catch (error) {
    next(error);
    
  }
  
};

//Create A New Category
export const createCategory = (req, res , next) => {
  try {
    categories.push(req.body);
    return res.status(201).send();
  } catch (error) {
    next(error);
  }
 
};

//Read Single Category 
export const getCategory = (req, res , next) => {
    try {
      const id = req.params.id
      const category = categories.find((cat) => cat.id == id);
    
      if (!category) {
        throw new NotFoundError("Categoory not found");
      }
      return res.status(200).json(category).send();
      
    } catch (error) {
      next(error);
    }
    
  };

//Update A Category
export const updateCategory = (req, res , next) => {
    try {
      const {id} = req.params
    const updates = req.body
    const category = categories.find((cat) => cat.id === id);
  
    if(!category){
      throw new NotFoundError("Category not found");
    }
    Object.assign(category, updates)
    return res.status(201).json(categories).send() 
    } catch (error) {
      next(error);
    }
  
  };

  //Delete A Category
  export const deleteCategory = (req, res , next) => {
    try {
      const id = req.params.id;
      const index = categories.findIndex((cat) => cat.id === id);
      if(index === -1) {
        throw new NotFoundError("Category not found");
      }
      categories.splice(index,1)
        return res.status(204).send()
      
    } catch (error) {
      next(error);
    }
  
  };

