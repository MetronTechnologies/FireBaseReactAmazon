import React from 'react';
import "./Product.css";
import {Link} from "react-router-dom";
import "../../font-awesome-4.7.0/css/font-awesome.min.css";
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../Redux/Actions';

function Product({id, title, image, price, rating, specification, detail}) {

    const dispatch = useDispatch();
    function AddItemToBasket() {
        const item = {
            id,
            title,
            image,
            price,
            rating,
            specification,
            detail
        }
        dispatch(addToBasket(item))
    }

    return (
        <div className="product">
            <div className="info">
                <Link to={`/product/${id}`} className="title">
                    <p>{title}</p>
                </Link>
                <p className="price">
                    <strong>$</strong>
                    <strong>{price}</strong>
                </p>
                <div className="rating">
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
            </div>
            <img src={image} alt=""/>
            <button onClick={AddItemToBasket}>
                <i className="fa fa-shopping-cart"/>
                Add to basket
            </button>
        </div>
    );
}

export default Product;