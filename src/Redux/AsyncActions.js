import {registerRequestAction, registerSuccessAction, registerFailAction, loginRequestAction, loginSuccessAction, loginFailAction, logoutRequestAction, logoutSuccessAction, logoutFailAction} from "./Actions";
import {auth} from "../Utilities/firebase";


function registrar(email, password) {
    return (
        function (dispatch) {
            dispatch(registerRequestAction());
            auth.createUserWithEmailAndPassword(email, password)
                .then(
                    ({ user }) => {
                        dispatch(registerSuccessAction(user));
                    }
                )
                .catch(
                    (error) => {
                        dispatch(registerFailAction(error.message));
                    }
                );
        }
    );
}


function logerIn(email, password) {
    return (
        function (dispatch) {
            dispatch(loginRequestAction());
            auth.signInWithEmailAndPassword(email, password)
                .then(
                    ({ user }) => {
                        dispatch(loginSuccessAction(user));
                    }
                )
                .catch(
                    (error) => {
                        dispatch(loginFailAction(error.message));
                    }
                );
        }
    );
}


function logerOut () {
    return function(dispatch) {
        dispatch(logoutRequestAction())
        auth
        .signOut()
        .then(
            () => {
                dispatch(logoutSuccessAction())
            }
        )
        .catch(
            (error) => {
                dispatch(logoutFailAction(error.message))
            }
        )
    }
}

export {registrar, logerIn, logerOut}