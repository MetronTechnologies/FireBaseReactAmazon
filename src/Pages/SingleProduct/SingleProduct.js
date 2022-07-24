import React from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch} from "react-redux";
import ad from "../../Logos/ad.jpg";
import {products} from "../../Utilities/ProductData";
import {addToBasket} from "../../Redux/Actions";
import "./SingleProduct.css"


function SingleProduct () {

    let {id} = useParams();
    let single_product = products.find(
        (item) => item.id === id
    );

    const dispatch = useDispatch();

    function AddItemToBasket() {
        const item = {
            id: single_product.id,
            rating: single_product.rating,
            title: single_product.title,
            price: single_product.price,
            image: single_product.image,
            specification: single_product.specification,
            detail: single_product.detail
        }
        dispatch(addToBasket(item));
    }



  return (
      <div className='single_product_container'>
            <img src={ad} alt="" className='single_product_ad'/>
            <div>
                <div className="single_product">
                    <img className='single_product_image' src={single_product.image} alt="" />
                    <div className="single_product_info">
                        <div className="single_product_title">
                            {single_product.title}
                        </div>
                        <div className="single_product_rating">
                            {
                                Array(single_product.rating).fill().map(
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
                        <p className="single_product_price">
                            Price: <strong>$</strong>
                            <strong>{single_product.price}</strong>
                        </p>
                        <div className="single_product_specification">
                            <h4>Specification</h4>
                            {
                                single_product.specification && single_product.specification.map(
                                    (item, index) => (
                                        <li key={index}>{item}</li>
                                    )
                                )
                            }
                        </div>
                        <div className="single_product_description">
                            <h4>Product Description</h4>
                            <p>{single_product.detail}</p>
                        </div>
                        <button onClick={AddItemToBasket}>
                            <i className="fa fa-shopping-cart"/>
                            Add to basket
                        </button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default SingleProduct