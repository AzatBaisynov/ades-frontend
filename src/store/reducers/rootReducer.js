import { AUTH, UNAUTH } from '../actions/isAuth'

const initialState = {
    isAuth : JSON.parse(localStorage.getItem("auth")) || "",
    token: localStorage.getItem("token") || ""
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH: return {...state, isAuth: true, token: action.value }
        case UNAUTH: return {...state, isAuth: false, token: ""}
        default: return state
    }
}

export default rootReducer