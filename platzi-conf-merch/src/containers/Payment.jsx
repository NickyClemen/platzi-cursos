import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button';

import AppContext from '../context/AppContext';
import { handleSumTotal } from '../utils/handleSumTotal';

import '../styles/components/Payment.css';

const CLIENT_ID =
    'AajgovElOQ1AOmQvAbQFxR1xRWLyp9jlRdodVITeW_63LHOJv8hF1UeWqTSqM8XyLaeW8lkjDIGLmPZS';

const Payment = () => {
    const {
        state: { cart, buyer },
        addNewOrder,
    } = useContext(AppContext);
    const history = useHistory();

    const paypalOptions = {
        clientId: CLIENT_ID,
        intent: 'capture',
        currency: 'USD',
    };

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect',
    };

    const handlePaymentSuccess = (data) => {
        if (data.status === 'COMPLETED') {
            const newOrder = {
                buyer,
                product: cart,
                payment: data,
            };

            addNewOrder(newOrder);
            history.push('/checkout/success');
        }
    };

    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido</h3>

                {cart.map((item) => (
                    <div className="Payment-item" key={item.title}>
                        <div className="Payment-element">
                            <h4>{item.title}</h4>
                            <span>${item.price}</span>
                        </div>
                    </div>
                ))}

                <div className="Payment-button">
                    <PayPalButton
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={handleSumTotal}
                        onPaymentStart={() => console.log('Start payment')}
                        onPaymentSuccess={(data) => handlePaymentSuccess(data)}
                        onPaymentError={(error) => console.log(error)}
                        onPaymentCancel={(data) => console.log(data)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Payment;
