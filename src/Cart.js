import React from 'react';
import CartSummary from './CartSummary';
import CartTotal from './CartTotal';


/*CART COMPONENT CONTAINS SUMMARY & TOTAL*/
function Cart(props) {

    return (

        <section className="main__summary">

            <h2>Your cart</h2>

            <CartSummary 
                format={props.format} 
                selected={props.selected} 
            />

            <div className="summary__total">
                <div className="summary__total__label">Total</div>

                <CartTotal 
                    format={props.format} 
                    selected={props.selected}
                />
            </div>

        </section>
    );
};

export default Cart;