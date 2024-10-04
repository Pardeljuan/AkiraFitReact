import './CartWidget.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export const CartWidgets = () => {
    const { cart } = useContext(CartContext); 
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <Link to='/cart' style={{display: totalQuantity > 0 ? 'block' : 'none'}} className="cart-widget">
            <img src='../../../public/carrito-de-compras.png'className='CartImg' alt="carrito" />
            <span>{totalQuantity}</span>  {}
        </Link>
    );
};
