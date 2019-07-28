import { ADD_USER } from '../constants/actionTypes';


const initialState = {
    message: ''
};

const reducer = {
    [ADD_USER]: (state, action) => {
        return {
            ...state,
            message: action.payload

        }
        
    }
};

export default (state = initialState, action) => reducer[action.type]
    ? reducer[action.type](state, action)
    : state