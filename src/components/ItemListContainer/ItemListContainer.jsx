import { useState, useEffect } from 'react';
import React from 'react';
import './ItemListContainer.scss';
import { getProducts, getProductsByCategory } from '../../../listado';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])

  const {categoryId} = useParams()
  
  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts

    asyncFunc(categoryId)
    .then(response => {
      setProducts(response)
    })
    .catch(error => {
      console.error(error)
    })
  }, [categoryId])

  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <ItemList products={products}/>
    </div>
  );
};


