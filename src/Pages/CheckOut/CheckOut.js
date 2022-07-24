import React from 'react';
import "./CheckOut.css";
import ad from "../../Logos/ad.jpg";
import {useSelector} from "react-redux";
import CheckOutProduct from '../../ComponentJSX/CheckOutProduct/CheckOutProduct';
import SubTotal from '../../ComponentJSX/SubTotal/SubTotal';

function CheckOut () {

    const {basket, user} = useSelector(
        (state) => state.theBasket
    );

  return (
    <div className='checkout'>
        <div className="checkout_left">
            <img src={ad} alt="" className="checkout_ad" />
            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className="checkout_title">
                    {basket.length === 0 ? "Your shopping basket is empty" : "Your shopping basket"}
                </h2>
                {basket && basket.map(
                    (item) => (
                        <CheckOutProduct 
                            key = {item.id} 
                            id = {item.id} 
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />
                    )
                )}
            </div>
        </div>
        <div className="checkout_right">
            <SubTotal />
        </div>
    </div>
  );

}

export default CheckOut;