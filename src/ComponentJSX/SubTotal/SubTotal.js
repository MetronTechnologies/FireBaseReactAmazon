import React from 'react';
import "./SubTotal.css";
import CurrencyFormat from 'react-currency-format';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getBasketTotal} from "../../Utilities/BasketTotal";

function SubTotal () {

    const {basket, user} = useSelector(
        state => state.theBasket
    );

    const navigate = useNavigate();
    function checkOutHandler() {
        if (user) {
            navigate("/payment");
        }
        else {
            navigate("/login");
        }
    }


    return (
      <div className='subtotal'>
          <CurrencyFormat
            renderText = {
              (value) => (
                  <>
                    <p>
                        SubTotal ({basket.length} items) : <strong>{value}</strong>
                    </p>
                    <small className='subtotal_gift'>
                        <input type="checkbox"/>
                        This order contains a gift
                    </small>
                  </>
              )
          }
          decimalScale = {2}
          value = {getBasketTotal(basket)}
          displayType = {"text"}
          thousandSeparator = {true}
          prefix = {"$"}
        />
        <button onClick={checkOutHandler}>
            Proceed to checkout
        </button>
      </div>
  )
}

export default SubTotal