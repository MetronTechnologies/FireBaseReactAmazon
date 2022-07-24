import React, { useEffect } from 'react';
import { useState } from 'react';
import "./Register.css";
import { Link, useNavigate} from 'react-router-dom';
import amazon_logo from  "../../Logos/Amazon_Logo.png";
import {useDispatch, useSelector} from "react-redux";
import { registrar } from '../../Redux/AsyncActions';



function Register() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const register = (e) => {
        e.preventDefault();
        dispatch(registrar(email, password));
        setEmail("");
        setPassword("")
    };


    const {user} = useSelector(
        (state) => {
            return (state.theBasket)
        }
    );

    // console.log("User => ", user);

    useEffect(
        () => {
            if(user){
                navigate("/");
            }
        }, [user, dispatch, navigate]
    );

    return (
        <div className="register">
            <Link to="/">
                <img src={amazon_logo} alt="register logo" className="register_logo"/>
            </Link>
            <div className="register_container">
                <h1>Create Account</h1>
                <form>
                    <h5>E-Mail</h5>
                    <input type="text" value={email} name="email" onChange={(e) => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="text" value={password} name="password" onChange={(e) => setPassword(e.target.value)}/>
                    <button type="submit" onClick={register} className="continue">
                        Continue
                    </button>
                    <div className="detail">
                        <p className="">Already have an account ?</p>
                        <Link to="/login" className='signIn_link'>
                            <p className=" ">Sign In</p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;