import axios from 'axios';
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from './types';

// LOGIN USER
export const login = (email, password) => (dispatch) => {
    // Headers 
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    
    // Request Body 
    const body = { email, password };
    
    axios
        .post("http://api.fakeshop-api.com/users/signin", body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data,
            })
        })
        .catch(err => {
            dispatch({
                type: LOGIN_FAIL
            })
        })
}

// REGISTER USER 
export const register = (email, username, password, firstname, lastname, city, street, number, zipcode, phone) => (dispatch) => {
    // Headers 
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    
    // Request Body 
    const body = JSON.stringify(
        {
            email: email,
            username: username,
            password: password,
            name:{
                firstname: firstname,
                lastname: lastname
            },
            address:{
                city: city,
                street: street,
                number: number,
                zipcode: zipcode,
                geolocation:{
                    lat:'-37.3159',
                    long:'81.1496'
                }
            },
            phone: phone
        }
    );
    axios
        .post("https://fakestoreapi.com/users", body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res
            });
        })
        .catch(err => {
            dispatch({
                type: LOGIN_FAIL
            })
            console.log(err.response)
        })
}