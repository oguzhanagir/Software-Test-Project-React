import React,{ useState,useEffect } from "react";
import axios from "axios";

const CategoryTable = ({ categories}) => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const fetchProduct = async ()=> {
      const response = await axios.get(`http://localhost:5238/api/Product/${categories.id}`,{
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      });
      setProducts(response.data);
    }
    fetchProduct();
  });
  
  return (
    <div>
      <h2>{categories.name}</h2>
      <table>
        {products.map((product)=>(
          <button>{product.name}</button>
        ))}
      </table>
    </div>

 
    );
};

export default CategoryTable;
