// lưu state ở đây thực hiện action cũng ở trong này luôn
import { SET_AUTH } from "../contexts/constants";
export const authReducer = (state, action) => {
    const {type, payload: {isAuthenticated, user}} = action;
    switch (type) {
        case SET_AUTH:
            return {
                ...state,
                authLoading: false, 
                isAuthenticated,
                user
            }
        default:
            return state;
    }
}