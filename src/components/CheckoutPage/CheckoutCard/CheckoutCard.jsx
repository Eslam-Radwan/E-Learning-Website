import React from 'react';
import styles from './checkoutCard.module.css'
function CheckoutCard(props) {
    return (
        <div className={styles.checkoutCard}>

            <h2>Checkout</h2>
            <div >
                <h3>cart Type</h3>
                <div className={styles.checkoutCard__methods}>
                    <img src="/images/Paypal.png" alt="" />
                    <img src="/images/ae.png" alt="" />
                    <img src="/images/visa.png" alt="" />
                    <img src="/images/Mastercard.png" alt="" />
                </div>
            </div>
            <div>
                <form action="">
                    <label htmlFor="name">Name on card</label>
                    <br />
                    <input type="text" id='name' />
                    <br />
                    <label htmlFor="cardNumber">Card Number</label>
                    <br />
                    <input type="text" />
                    <br />
                    <label htmlFor="">Expiration Date(MM/YY)</label>
                    <br />
                    <input type="text" name="" id="" />
                    <br />
                    <label htmlFor="">cvv</label>
                    <br />
                    <input type="text" name="" id="" />
                </form>
            </div>
            <button>Confirm Payment</button>
        </div>
    );
}

export default CheckoutCard;