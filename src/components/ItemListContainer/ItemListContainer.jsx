import { useState, useEffect } from 'react';
import './ItemListContainer.scss';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../firebase/db';

import { db } from '../../firebase/config';  
import { getDocs, collection, query, where } from 'firebase/firestore';

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    
    
    const collectionRef = categoryId
      ? query(collection(db, 'products'), where('category', '==', categoryId))
      : collection(db, 'products');
    
    
    getDocs(collectionRef)
      .then(response => {
        const productsAdapted = response.docs.map(doc => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);  
      })
      .catch(error => {
        console.error("Error al obtener los productos:", error);
      })
      .finally(() => {
        setLoading(false);  
      });
  }, [categoryId]);  

  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      {loading ? <p>Cargando productos...</p> : <ItemList products={products} />}
    </div>
  );
};
