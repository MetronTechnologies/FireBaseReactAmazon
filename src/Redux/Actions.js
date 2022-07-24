import {REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, SET_USER,LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAIL, ADD_TO_BASKET, REMOVE_FROM_BASKET, SET_BASKET_EMPTY} from "./ActionTypes";


const registerRequestAction = () => {
    return {
        type: REGISTER_REQUEST
    }
}

const registerSuccessAction = (user) => {
    return {
        type: REGISTER_SUCCESS,
        payload: user
    }
}

const registerFailAction = (error) => {
    return {
        type: REGISTER_FAIL,
        payload: error
    }
}


const loginRequestAction = () => {
    return {
        type: LOGIN_REQUEST
    }
}

const loginSuccessAction = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
}

const  loginFailAction = (error) => {
    return {
        type: LOGIN_FAIL,
        payload: error
    }
}


const logoutRequestAction = () => {
    return {
        type: LOGOUT_REQUEST
    }
}

const logoutSuccessAction = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}

const  logoutFailAction = (error) => {
    return {
        type: LOGOUT_FAIL,
        payload: error
    }
}

const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}

const addToBasket = (item) => {
    return {
        type: ADD_TO_BASKET,
        payload: item
    }
}

const removeFromBasket = (id) => {
    return {
        type: REMOVE_FROM_BASKET,
        payload: id
    }
}

const setBasketEmpty = () => {
    return {
        type: SET_BASKET_EMPTY
    }
}
    

export {registerRequestAction, registerSuccessAction, registerFailAction, loginRequestAction, loginSuccessAction, loginFailAction, setUser, logoutRequestAction, logoutSuccessAction, logoutFailAction, addToBasket, removeFromBasket, setBasketEmpty}




