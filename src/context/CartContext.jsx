import { createContext, useState, useEffect } from "react";

export const CartContext = createContext ( {
    cart: []
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])


    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        }else {
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId )
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }
    
    const calculateTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };
    
    
    const [total, setTotal] = useState(0);
    
    useEffect(() => {
        setTotal(calculateTotal());
    }, [cart]);

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, total}}>
            {children}
        </CartContext.Provider>   
    )
}
