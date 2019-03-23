import { 
    USER_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/type';

const INITIAL_STATE = { 
    username: '',
    password: '',
    user: null,
    message: '',
    isUser: false,
    loading: false,
    
    
}

export default (state = INITIAL_STATE, action) => {
    console.log(action)
    switch(action.type) {
        case USER_CHANGED:
            return { ...state, username: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        // case LOGIN_USER:
        //     return { ...state, loading: true, error: ''};
        case LOGIN_USER_SUCCESS:
            return { ... state, user: action.payload, isUser: true};
        case LOGIN_USER_FAIL:
            return { ... state, message: action.payload};

        default:
            return state;
    }
}