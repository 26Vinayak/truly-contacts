import { CLEAR_LOGOUT_CONTACT } from "../../../constants/actionTypes";

export default () => (dispatch)=> {

    dispatch({
        type: CLEAR_LOGOUT_CONTACT,
    });
}