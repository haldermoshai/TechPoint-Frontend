import React from 'react';
import "../styles/ProductCard.css";

const ProductCard = ({productImg,title,price}) => {
  return (
    <div>
      <div className='productCard'>
        <section className='productImage'>
          <img src={productImg} alt='img'/>
        </section>

        <section>
          <p>{title}</p>
          <p>{price}</p>
        </section>

        <section>
          <button className='cart'>Add to Cart</button>
          <button className='buy'>Buy Now</button>
        </section>
      </div>
    </div>
  )
}

export default ProductCard;