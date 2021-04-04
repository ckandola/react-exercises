import React from 'react';
import CartItem from './CartItem';
import { useGlobalContext } from './index';

const CartContainer = () => {
    const { cart, cartTotal, clearCart } = useGlobalContext();

    return (
        <section className="cart">
            <header>
                <h2>Your Bag</h2>
            </header>

            {cart.length === 0 ?
                <header>
                    <h4 style={{width:'28%', margin:'auto'}}>Is Currently Empty</h4>
                </header>
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
                                Total <span>${cartTotal}</span>
                            </h4>
                        </div>
                        <button 
                            className="cart-btn cart-clear-btn"
                            onClick={clearCart}>
                            Clear Cart
                        </button>
                    </footer>
                </div>
            }
        </section>
    );
};

export default CartContainer;
