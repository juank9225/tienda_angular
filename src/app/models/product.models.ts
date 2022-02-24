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
