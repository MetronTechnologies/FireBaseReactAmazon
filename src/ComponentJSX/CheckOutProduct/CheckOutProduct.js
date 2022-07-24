import React from 'react';
import "./CheckOutProduct.css";
import {useDispatch} from "react-redux";
import { removeFromBasket } from '../../Redux/Actions';

function CheckOutProduct ({id, title, image, rating, price, hideButton}) {

    const dispatch = useDispatch();

    function removeItem(){
        dispatch(removeFromBasket(id));
    }


  return (
    <div className='checkout_product'>
        <img src={image} alt="" className="checkout_product_image" />
        <div className="checkout_product_info">
            <p className="checkout_product_title">
                {title}
            </p>
            <p className="checkout_product_price">
                <strong>$</strong>
                <strong>{price}</strong>
            </p>
            <div className="checkout_product_rating">
                {
                    Array(rating).fill().map(
                        (index) => {
                            return (
                                <p key={index}>
                                    <span className="fa fa-star"/>
                                </p>
                            );
                        }
                    )   
                }                    
            </div>
            {!hideButton && (
                <button onClick={removeItem}>
                    <i className="fa fa-shopping-cart"/>
                    Remove from basket
                </button>
            )}
            
        </div>
    </div>
  )
}

export default CheckOutProduct