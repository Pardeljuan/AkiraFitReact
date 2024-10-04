import './Cart.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';

export const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        );
    }

    console.log("Carrito:", cart);

    return (
        <div>
            {cart.map(p => (
                <CartItem key={p.id} {...p} stock={p.stock} /> // Asegúrate de pasar `stock` aquí
            ))}

            <div className="cart-total">
                <h3>Total de la compra: ${total ? total.toFixed(2) : '0.00'}</h3>
            </div>

            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <Link to='/Checkout' className='checkout'>Checkout</Link>
        </div>
    );
};
