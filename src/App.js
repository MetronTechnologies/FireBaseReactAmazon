import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


// import Home from "./Pages/Home/Home";
// import Login from "./Pages/Login/Login";
// import Register from "./Pages/Register/Register";
// import SingleProduct from './Pages/SingleProduct/SingleProduct';
// import CheckOut from './Pages/CheckOut/CheckOut';
// import Payment from './Pages/Payment/Payment';
// import Orders from './Pages/Orders/Orders';


import Header from "./ComponentJSX/Header/Header";
import { useDispatch } from "react-redux";
import { auth } from "./Utilities/firebase";
import { setUser } from "./Redux/Actions";
import {loadStripe} from '@stripe/stripe-js/pure';
import { Elements } from "@stripe/react-stripe-js";
import Loading from "./ComponentJSX/Loading/Loading";

const Home = lazy(() => import("./Pages/Home/Home"));
const Login = lazy(() => import("./Pages/Login/Login"));
const Register = lazy(() => import("./Pages/Register/Register"));
const CheckOut = lazy(() => import("./Pages/CheckOut/CheckOut"));
const Payment = lazy(() => import("./Pages/Payment/Payment"));
const Orders = lazy(() => import("./Pages/Orders/Orders"));
const SingleProduct = lazy(() => import("./Pages/SingleProduct/SingleProduct"));

const promise = loadStripe(
  "pk_test_51L5btiHWyZAdybTwYgfXocbOaswqqRTjSRhBZE3H61VH2NizduqtqPn9ZHVxILoXk00zgJDiQwuy861pDpcb62Da00zlSjPNwd"
);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Header />}>
              <Route path="/" index element={<Home />} />
            </Route>

            <Route path="/checkout" element={<Header />}>
              <Route path="/checkout"  element={<CheckOut />} />
            </Route>
            
            <Route path="/orders" element={<Header />}>
              <Route path="/orders"  element={<Orders />} />
            </Route>
            
            <Route path="/payment" element={<Header />}>
              <Route
                path="/payment"
                index
                element={
                  <Elements stripe={promise}>
                    <Payment />
                  </Elements>
                }
              />
            </Route>
            <Route path="/product/:id" element={<Header />}>
              <Route path="/product/:id"  element={<SingleProduct />} />
            </Route>

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

          </Routes>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
