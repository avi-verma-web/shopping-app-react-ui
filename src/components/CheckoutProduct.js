import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'


function CheckoutProduct({ id, title, price, rating, image }) {
    const [{ basket }, dispatch] = useStateValue()

    const removeFromBasket = () => {

        dispatch({
            type:"REMOVE_TO_BASKET",
            id:id,
        })

    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_img" src={image} alt=""></img>

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>&#8377;</small>
                    <strong>{price}</strong>
                </p>


                <button onClick={removeFromBasket}>Remove from Basket</button>

            </div>
        </div>
    )
}

export default CheckoutProduct
