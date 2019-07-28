import { ADD_USER } from "../constants/actionTypes";

const config = {
    apiUrl: 'http://localhost:9000/testAPI/post',
    headers: {
        'Content-Type': 'application/json'
    }
};

export const addSubscriber = (subscriber) => async (dispatch) => {
    // console.log('przed')
    // const response = await fetch(config.apiUrl, {
    //     method: 'POST',
    //     headers: config.headers,
    //     body: JSON.stringify(subscriber),
    // });
    // console.log('po')
    // let message = await response.text();
    // console.log('po zapisie')
    // dispatch({ type: ADD_USER, payload: message });

    await fetch(config.apiUrl, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify(subscriber),})
        .then(dataWrappedByPromise => dataWrappedByPromise.text())
        .then(data => {
            dispatch({ type: ADD_USER, payload: data });

        })

};