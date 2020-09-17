import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'

import CheckoutProduct from './CheckoutProduct'

function Checkout() {
    const [{ basket }] = useStateValue()

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img
                    className="checkout_ad"
                    src="https://cdn.wallpaperhi.com/1920x1080/20130111/nintendo%20video%20games%20minimalistic%20stars%20super%20mario%20classic%20shell%20shopping%20solid%20mario%20kart%20simplist_www.wallpaperhi.com_51.jpg"
                    alt=""
                >
                </img>

                {basket?.length === 0 ? (
                    <div>
                        <h2>Your shopping basket is empty</h2>
                        <p>You have no items in your basket.
                        To buy one click "Add to basket" next to item
                     </p>
                    </div>
                ) : (
                        <div >
                            <h2 className="checkout_title">Your shopping basket</h2>
                            {/* List out all the checkout products*/}

                            {basket.map((item) => {
                                return (<CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                ></CheckoutProduct>)

                            })}
                        </div>
                    )}
            </div>

            

        </div>
    )
}

export default Checkout
