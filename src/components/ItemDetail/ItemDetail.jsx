import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";
import './ItemDetail.scss';
import { CartContext } from '../../context/CartContext';

export const ItemDetail = ({ id, name, image, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        const item = { id, name, price, image };
        addItem(item, quantity);
    };

    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>{name}</h2>
            </header>
            <picture>
                <img src={`${image}`} alt={name} className='ItemImg' />
            </picture>
            <section>
                <p className='Info'>Categoría: {category}</p>
                <p className='Info'>Descripción: {description}</p>
                <p className='Info'>Precio: ${price}</p>
                {/* Mensaje de sin stock */}
                {stock === 0 && <p className='out-of-stock'>Sin stock</p>}
                <footer className='ItemFooter'>
                    {quantityAdded > 0 ? (
                        <Link to='/cart' className='Option'>Terminar Compra</Link>
                    ) : (
                        stock > 0 ? (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                        ) : (
                            <p className='info'>No se puede agregar al carrito.</p>
                        )
                    )}
                </footer>
            </section>
        </article>
    );
};
