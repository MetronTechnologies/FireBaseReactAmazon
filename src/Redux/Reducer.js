import initialState from "./InitialState";
import {ADD_TO_BASKET, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_REQUEST, LOGOUT_SUCCESS, REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS, REMOVE_FROM_BASKET, SET_BASKET_EMPTY, SET_USER} from "./ActionTypes";



function basketReducer (state=initialState, action) {
    switch (action.type) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case LOGOUT_REQUEST:
            return {
                ...state,
                loading: true
            };

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            };

        case LOGOUT_SUCCESS:
            return {
                ...state,
                user: null
            };

        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOGOUT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case SET_USER:
            return {
                ...state,
                user: action.payload
            }

        case ADD_TO_BASKET:
            const newBasket = [...state.basket, action.payload]
            return {
                ...state,
                basket: newBasket
            }

        case REMOVE_FROM_BASKET:
            const removeBasket = [...state.basket];
            const index = state.basket.findIndex(
                (item) => (item.id === action.payload)
            );
            if(index >= 0) {
                removeBasket.splice(index, 1);
            }
            return {
                ...state,
                basket: removeBasket
            }

        case SET_BASKET_EMPTY:
            return{
                ...state,
                basket: []
            }

        default:
            return state;
    }
}

export default basketReducer;



