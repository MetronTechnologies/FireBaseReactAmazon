import React from 'react';
import {Link, Outlet} from "react-router-dom";
import '../Header/Header.css';
import "../../font-awesome-4.7.0/css/font-awesome.css";
import amazonLogo from '../../Logos/Amazon_Logo.png';
import {useDispatch, useSelector} from 'react-redux';
import { logerOut } from '../../Redux/AsyncActions';



function Header() {

    const dispatch = useDispatch();
    const {user, basket} = useSelector(
        (state) => {
            return (state.theBasket)
        }
    );

    function signOutHandler() {
            if(user) {
                dispatch(logerOut())
            } 
    }



    return (
        <>
            <nav className="header">
                <Link to="/">
                    <img src={amazonLogo} alt="amazonLogo" className="header_logo"/>
                </Link>
                <div className="header_option">
                    <span className="fa fa-map-marker "/>
                </div>
                <div className="header_option">
                    <span className="header_option1">Hello</span>
                    <span className="header_option2">Select Your Address</span>
                </div>
                <div className="search">
                    <select>
                        <option>All</option>
                    </select>
                    <input type="text" className="search_input"/>
                    <div className="search_icon">
                        <span className="fa fa-search "/>
                    </div>
                </div>
                <div className="header_nav">
                    <Link className="header_link" to={`${user?  "/" : "/login"}`}>
                        <div onClick={signOutHandler} className="header_option">
                            <span className="header_option1">Hello {user ? user.email : "Guest"}</span>
                            <span className="header_option2">Sign {user? "Out" : "In"}</span>
                        </div>
                    </Link>
                    <Link className="header_link" to="/orders">
                        <div className="header_option">
                            <span className="header_option1">Returns</span>
                            <span className="header_option2">& Orders</span>
                       </div>
                    </Link>
                    <Link className="header_link" to="/login">
                        <div className="header_option">
                            <span className="header_option1">Your</span>
                            <span className="header_option2">Prime</span>
                       </div>
                    </Link>
                    <Link className="header_link" to="/checkout">
                        <div className="header_basket">
                            <span className="fa fa-shopping-basket"/>
                            <span className="header_option2 basket_count">{basket && basket.length}</span>
                        </div>
                    </Link>
                </div>
            </nav>
            <Outlet/>
        </>
    );
}

export default Header;