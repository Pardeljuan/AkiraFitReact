import { useState, useEffect } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import './ItemDetailConteiner.scss';

import { db } from '../../firebase/config';  
import { doc, getDoc } from 'firebase/firestore';  

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);  
    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);

        
        const docRef = doc(db, 'products', itemId);

        getDoc(docRef)
            .then(docSnapshot => {
                if (docSnapshot.exists()) {
                    const data = docSnapshot.data();
                    const productAdapted = { id: docSnapshot.id, ...data };
                    setProduct(productAdapted);  
                } else {
                    console.log("No se encontró el producto");
                }
            })
            .catch(error => {
                console.error("Error al obtener el producto:", error);
            })
            .finally(() => {
                setLoading(false);  
            });

    }, [itemId]);

    return (
        <div className='ItemDetailContainer'>
            {loading ? <p>Cargando producto...</p> : <ItemDetail {...product} />}
        </div>
    );
};
