import React from 'react';
import CartItem from './CartItem';
import { useGlobalContext } from './index';

const CartContainer = () => {
    const {cart} = useGlobalContext();

    return (
        <section className="cart">
            <header>
                <h2>Your Bag</h2>
            </header>

            {cart.length === 0 ?
                <h4>Is Currently Empty</h4>
                :
                <div>
                    <div>
                        {cart.map(cartItem => {
                            return <CartItem key={cartItem.id} {...cartItem} />
                        })}
                    </div>
                    <footer>
                        <hr className="cart-hr"/>
                        <div className="cart-total">
                            <h4>
                                Total <span>$0.00</span>
                            </h4>
                        </div>
                        <button className="cart-btn cart-clear-btn">
                            Clear Cart
                        </button>
                    </footer>
                </div>
            }
        </section>
    );
};

export default CartContainer;
