import React, {useEffect, useState} from 'react';
import amazon_logo from  "../../Logos/Amazon_Logo.png";
import "./Login.css";
import {Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {logerIn} from "../../Redux/AsyncActions";


function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});

    const {user} = useSelector(
        (state) => {
            return (state.theBasket)
        }
    );

    useEffect(
        () => {
            if(user) {
                navigate("/");
            }
        }, [user, dispatch, navigate]
    );


    function inputHandler(e){
        const name = e.target.name;
        const value = e.target.value;
        function handler(values){
            return {
                ...values,
                [name]: value
            }
        }
        return (
            setInputs(handler)
        )
    }

    function signIn(e){
        e.preventDefault();
        dispatch(logerIn(inputs.email, inputs.password));
        setInputs(
            {
                email: "",
                password: ""
            }
        );
    }

    return (
        <div className="login">
            <Link to="/">
                <img src={amazon_logo} alt="login logo" className="login_logo"/>
            </Link>
            <div className="login_container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-Mail</h5>
                    <input type="text" value={inputs.email} name="email" onChange={inputHandler}/>
                    <h5>Password</h5>
                    <input type="text" value={inputs.password} name="password" onChange={inputHandler}/>
                    <button type="submit" onClick={signIn} className="login_signIn">
                        Sign In
                    </button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice</p>
            </div>
            <p>New to Amazon ?</p>
            <Link to="/register">
                <button className="login_register">
                    Create an Amazon Account
                </button>
            </Link>
        </div>
    );
}

export default Login;