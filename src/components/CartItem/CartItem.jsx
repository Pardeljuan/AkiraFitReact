import React from 'react';
import './CartItem.scss';

const CartItem = ({ id, name, image, price, quantity, stock }) => {
    const totalPrice = price * quantity;

    return (
        <div className="cart-item">
            <img src={image} alt={name} className="cart-item__image" />
            <div className="cart-item__details">
                <h3 className="cart-item__name">{name}</h3>
                <p className="cart-item__price">Precio Unitario: ${price}</p>
                <p className="cart-item__quantity">Cantidad: {quantity}</p>
                <p className="cart-item__total">Total: ${totalPrice.toFixed(2)}</p>
                {stock === 0 && <p className="out-of-stock">Sin stock</p>} 
            </div>
        </div>
        
    );
};

export default CartItem;
