import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import "../styles/Home.css";
import dodLogo from "../logo/DOD.png";

import Categories from '../components/Categories';
import ProductCard from '../components/ProductCard';

// fetching products from database
const fetchProducts = async () => {
  const res = await axios.get ("http://localhost:4000/products");
  const data = res.data;
  return data;
};

const Home = () => {

  const [productData, setProductData] = useState ([]);
  const assignData = async () => {
    const fetchedProductData = await fetchProducts ();
    // shuffling all the products and choosing only 5 from them to show in home page
    const shuffledProducts = [...fetchedProductData].sort (() => 0.5 - Math.random ()); 
    /* [...fetchedProductData]: This is the spread operator used to create a new array or object by
    expanding the elements of another array or object. Here it is helping to create a shallow copy
    of the array and making it easier to manipulate arrays without mutating the original data.*/
    const selectedProducts = shuffledProducts.slice (0, 5);
    setProductData (selectedProducts);
  };
  useEffect (() => {
    assignData ();
  }, []);

  return (
    <div>
      <section className="categories">
        <h1>~ Categories ~</h1>
        <section className='cateList'>
          <Link to = "Smartphones"><Categories categoryText = "SMARTPHONES"/></Link>
          <Link to = "Laptops"><Categories categoryText = "LAPTOPS"/></Link>
          <Link to = "Earphones"><Categories categoryText = "EARPHONES"/></Link>
          <Link to = "Cameras"><Categories categoryText = "CAMERAS"/></Link>
        </section>
      </section>

      <section className="deal">
        <img className="dodLogo" src={dodLogo} alt="offer"></img>
      </section>

      <section className='products'>
        {productData.map((product) => {
          return (
            <ProductCard productImg={product.imgUrl} title={product.title} price={product.price}/>
          );
        })}
      </section>
    </div>
  );
}

export default Home;