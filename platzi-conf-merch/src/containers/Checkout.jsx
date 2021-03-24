import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../context/AppContext';
import { handleSumTotal } from '../utils/handleSumTotal';

import '../styles/components/Checkout.css';

const Checkout = () => {
    const {
        state: { cart },
        removeFromCart,
    } = useContext(AppContext);

    const handleRemove = (product) => () => {
        removeFromCart(product);
    };

    return (
        <div className="Checkout">
            <div className="Checkout-content">
                <h3>
                    {cart.length > 0
                        ? 'Lista de pedidos'
                        : 'Aún no hay pedidos'}
                </h3>

                {cart.map((item) => (
                    <div className="Checkout-item" key={item.id}>
                        <div className="Checkout-element">
                            <h4>{item.title}</h4>

                            <span>${item.price}</span>
                        </div>

                        <button type="button" onClick={handleRemove(item)}>
                            <i className="fas fa-trash-alt" />
                        </button>
                    </div>
                ))}
            </div>

            {cart.length > 0 && (
                <div className="Checkout-sidebar">
                    <h3>{`Precio total $${handleSumTotal(cart)}`}</h3>

                    <Link to="/checkout/information">
                        <button type="button">Continuar pedido</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Checkout;
