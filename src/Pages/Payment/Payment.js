import React, { useEffect, useState } from "react";
import "./Payment.css";
import CurrencyFormat from "react-currency-format";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CheckOutProduct from "../../ComponentJSX/CheckOutProduct/CheckOutProduct";
import { getBasketTotal } from "../../Utilities/BasketTotal";
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js"
import axios from "../../Utilities/Axios";
import { db } from "../../Utilities/firebase";
import { setBasketEmpty } from "../../Redux/Actions";



function Payment(){

    const {basket, user} = useSelector(
        (state) => state.theBasket
    );

    const dispatch = useDispatch();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(
        () => {
            const getClientSecret = async() => {
                const response = await axios({
                    method: "POST",
                    url: `/payments/create?total=${getBasketTotal(basket) * 100}`
                });
                setClientSecret(response.data.clientSecret)
            }
            getClientSecret()
        }, [basket]
    );

    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

     const submitHandler = async(e) => {
        e.preventDefault();
        setProcessing(true);
        const payload = await stripe
            .confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement)
                }
            })
            .then(
                ({paymentIntent}) => {
                    db.collection("users")
                        .doc(user && user.uid)
                        .collection("orders")
                        .doc(paymentIntent.id)
                        .set(
                            {
                                basket: basket,
                                amount: paymentIntent.amount,
                                created: paymentIntent.created
                            }
                        )
                    setSucceeded(true);
                    setError(null)
                    setProcessing(false);
                    dispatch(setBasketEmpty());
                    navigate("/orders");
                }
            )
    }

    function changeHandler(e){
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

    return (
        <div className="payment">
            <div className="payment_container">
                <h1>
                    CheckOut {<Link to="/checkout">{basket.length} items</Link>}
                </h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>
                            {user && user.email}
                        </p>
                        <p>House no. 410</p>
                        <p>Lagos, Nigeria</p>
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and Delivery</h3>
                    </div>
                    <div className="payment_items">
                        {
                            basket && basket.map(
                                (item) => (
                                    <CheckOutProduct 
                                        id = {item.id}
                                        title = {item.title}
                                        image = {item.image}
                                        price = {item.price}
                                        rating = {item.rating}
                                    />
                                )
                            )
                        }
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        <form onSubmit={submitHandler}>
                            <CardElement  onChange={changeHandler}/>
                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                    renderText = {
                                        (value) => (
                                            <>
                                                <h3>Order Total : {value}</h3>
                                            </>
                                        )
                                    }
                                    decimalScale = {2}
                                    value = {getBasketTotal(basket)}
                                    displayType = {"text"}
                                    thousandSeparator = {true}
                                    prefix = {"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? "Processing" : "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

}




export default Payment;