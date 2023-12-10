import React from 'react';
import  "../styles/Categories.css";

const Categories = ({ categoryText }) => {
  return (
    <div>
      <section className ='category'>
        <p>{ categoryText }</p>
      </section>
    </div>
  )
}

export default Categories;