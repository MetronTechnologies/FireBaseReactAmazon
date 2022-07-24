import React from 'react';
import "./Home.css";
import {products, headerItems} from "../../Utilities/ProductData";
import banner1 from "../../Logos/Banner1.jpg";
import banner2 from "../../Logos/Banner2.jpg";
import banner3 from "../../Logos/Banner3.jpg";
import banner4 from "../../Logos/Banner4.jpg";
import banner5 from "../../Logos/Banner5.jpg";
import banner6 from "../../Logos/Banner6.jpg";
import Slider from "../../ComponentJSX/Slider/Slider";
import Product from "../../ComponentJSX/Product/Product";
import BackToTop from "../../ComponentJSX/BackToTop/BackToTop";


function Home() {

    const bannerImages = [banner1, banner2, banner3, banner4, banner5, banner6]


    return (
        <div>
            <div className="item_container">
                {
                    headerItems && headerItems.map(
                        (item, index) => {
                            return (
                                <p>{item}</p>
                            )
                        }
                    )
                }
            </div>
            <div className="home">
                <div className="home_container">
                    <Slider images ={bannerImages}/>
                    <div className="home_row">
                        {
                            products.slice(0, 2).map(
                                (item) => {
                                    return (
                                        <Product
                                            key={item.id}
                                            id={item.id}
                                            title={item.title}
                                            price={item.price}
                                            rating={item.rating}
                                            image={item.image}
                                            specification={item.specification}
                                            detail={item.detail}
                                        />
                                    );
                                }
                            )
                        }
                    </div>
                    <div className="home_row">
                        {
                            products.slice(2, 5).map(
                                (item) => {
                                    return (
                                        <Product
                                            key={item.id}
                                            id={item.id}
                                            title={item.title}
                                            price={item.price}
                                            rating={item.rating}
                                            image={item.image}
                                            specification={item.specification}
                                            detail={item.detail}
                                        />
                                    );
                                }
                            )
                        }
                    </div>
                    <div className="home_row">
                        {
                            products.slice(5, 6).map(
                                (item) => {
                                    return (
                                        <Product
                                            key={item.id}
                                            id={item.id}
                                            title={item.title}
                                            price={item.price}
                                            rating={item.rating}
                                            image={item.image}
                                            specification={item.specification}
                                            detail={item.detail}
                                        />
                                    );
                                }
                            )
                        }
                    </div>
                    <div className="back_to_top">
                        <BackToTop/>
                    </div>
                </div>
            </div>
        </div>
    );
}






export default Home;


