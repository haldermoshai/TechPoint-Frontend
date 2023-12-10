import React, {useEffect, useState} from 'react';
import axios from "axios";
import ProductCard from './ProductCard';
import "../styles/ItemPage.css";

const fetchProducts = async () => {
  const res = await axios.get ("http://localhost:4000/products");
  const data = res.data;
  console.log (data);
  return data;
};

const Cameras = () => {

  const [productData, setProductData] = useState([]);
  // Fetch products when the component mounts
  const assignData = async () => {
    const fetchedProductData = await fetchProducts ();
    setProductData (fetchedProductData); //it will assign the data automatically in productData
  };

  useEffect(() => {
    assignData ();
  }, []);

  return (
    <div>
      <div className='itemDiv'>
        <p className='welcome'>Welcome! Choose your Camera.</p>
        <section className='items'>
          {productData.map((product) => {
            if (product.description === 'Camera'){
              return (
                <ProductCard productImg={product.imgUrl} title={product.title} price={product.price}/>
              );
            };
          })}
        </section>
      </div>
    </div>
  )
}

export default Cameras;