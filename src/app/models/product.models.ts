export interface Product{

  id:String;
  title:String;
  price:number;
  images:String[];
  description: String;
  category:Category;
}

export interface Category{

  id:String;
  name:String;
}

export interface ProductDTO extends Omit<Product, 'id' | 'category'>{
  categoryId:number;
}
