import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./RootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';


// const middleware = [thunk];

// if (process.env.NODE_ENV === "development") {
//     middleware.push(logger)
// }

// const store = createStore(rootReducer, applyMiddleware(...middleware));

function combinedStore() {
    return (
        createStore(
            rootReducer,
            composeWithDevTools(
                applyMiddleware(logger, thunk)
            )
        )
    );
}


export default combinedStore()

