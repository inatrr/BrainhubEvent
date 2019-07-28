import { ADD_USER } from "../constants/actionTypes";

const config = {
    apiUrl: 'http://localhost:9000/addGuest/post',
    headers: {
        'Content-Type': 'application/json'
    }
};

export const addSubscriber = (subscriber) => async (dispatch) => {


    await fetch(config.apiUrl, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify(subscriber),})
        .then(dataWrappedByPromise => dataWrappedByPromise.text())
        .then(data => {
            dispatch({ type: ADD_USER, payload: data });

        })

};