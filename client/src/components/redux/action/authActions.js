import axios from "axios";
import {REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_PROFILE} from "./types";

export const register = ({name, email, password}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    const body = JSON.stringify({name, email, password});
    
    try {
        const res = await axios.post('/api/auth/register', body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: REGISTER_FAIL,
            payload: err.response.data.msg
        });
    }
};

export const login = ({email, password}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    const body = JSON.stringify({email, password});
    
    try {
        const res = await axios.post('/api/auth/login', body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,
            payload: err.response.data.msg
        });
    }
};

export const logout = ()    => dispatch => {
    dispatch({type: LOGOUT});
};