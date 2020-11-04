import {DELETE_CONTACT_LOADING,DELETE_CONTACT_SUCCESS,DELETE_CONTACT_ERROR} from '../../../constants/actionTypes/index';
import {CONNECTION_ERROR} from '../../../constants/actionTypes/api';
import axiosInstance from '../../../helpers/axiosInstance';
export default (id) => (dispatch) => {

    dispatch({
        type:DELETE_CONTACT_LOADING,
        payload:id,
    })


    axiosInstance().delete(`/contacts/${id}`).then((res) =>{
        console.log("status",res.status);
        dispatch({
            type:DELETE_CONTACT_SUCCESS,
            payload:id,
        });

    }).catch(err =>{
        dispatch({
            type:DELETE_CONTACT_ERROR,
            payload:err.response?err.response.data:CONNECTION_ERROR,
        });
    });

};
