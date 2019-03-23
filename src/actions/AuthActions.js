import {
    USER_CHANGED,
    PASSWORD_CHANGED, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAIL,
    LOGIN_USER,
} from './type';
import firebase from 'react-native-firebase';
import { NavigationActions}  from 'react-navigation';
export const usernameChanged = (text) => {
    return {
        type: USER_CHANGED,
        payload: text
    }
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
};

export const loginUser = ({ username, password }) => {
    console.log("username is :", username);
    console.log("password is :", password);
    return (dispatch) => {

        firebase
            .auth()
            .signInWithEmailAndPassword(username, password)
            .then((user) => loginUserSuccess(dispatch, user))
            .catch(error => loginUserFail(dispatch,error))
            
    };
};

const loginUserFail = (dispatch, error) => {
    dispatch({
        type: LOGIN_USER_FAIL,
        payload: error.message
    })
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
  

};