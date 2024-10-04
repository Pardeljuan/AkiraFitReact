import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../firebase/config';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import './Checkout.scss';

const Checkout = () => {
  const { cart, total, clearCart } = useContext(CartContext); // Cambiar totalPrice a total
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    const order = {
      buyer: { name, email, phone },
      items: cart.map(item => ({
        id: item.id,
        title: item.name, // Cambia 'title' por 'name'
        price: item.price,
        quantity: item.quantity,
      })),
      total: total, // Usar total en lugar de totalPrice()
      date: Timestamp.fromDate(new Date()),
    };

    try {
      const docRef = await addDoc(collection(db, 'orders'), order);
      setOrderId(docRef.id); // Asigna el ID de la compra
      clearCart(); // Limpia el carrito después de confirmar la compra
    } catch (error) {
      setError('Hubo un problema al generar la orden, por favor intenta de nuevo.');
    }
  };

  return (
    <div className="checkout-container">
      <h2>Finaliza tu compra</h2>
      {orderId ? (
        <div>
          <h3>¡Gracias por tu compra!</h3>
          <p>Tu ID de compra es: {orderId}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="checkout-form">
          <div>
            <label>Nombre</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Teléfono</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Generar compra</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
