import { CONTACTS_LOADING, CONTACTS_LOAD_ERROR, CONTACTS_LOAD_SUCCESS, LOGOUT_USER, ADD_CONTACT_LOAD, ADD_CONTACT_SUCCESS, ADD_CONTACT_ERROR, CLEAR_ADD_CONTACT, SEARCH_CONTACTS, DELETE_CONTACT_SUCCESS, DELETE_CONTACT_LOADING, ADD_REMOVE_STAR_LOADING, ADD_REMOVE_STAR_SUCCESS } from "../../constants/actionTypes";
import contactsinitialState from '../InitialState/contactsInitialState';
const contacts =  (state,action) => {
    switch(action.type){
        case CONTACTS_LOADING:
            return{
                ...state,
                contacts:{
                    ...state.contacts,
                    loading:true,
                }
            };
        case CONTACTS_LOAD_SUCCESS:
            return{
                ...state,
                contacts:{
                    ...state.contacts,
                    loading:false,
                    data:action.payload,
                }
            };
        case CONTACTS_LOAD_ERROR:
            return{
                ...state,
                contacts:{
                    ...state.contacts,
                    loading:false,
                    error: action.payload,
                }
            }; 

        case LOGOUT_USER:
            return{
                ...state,
                contactsinitialState,
            };
        case CLEAR_ADD_CONTACT:
            return{
                ...state,
                addContact:{
                    ...state.addContact,
                    loading:false,
                    error:null,
                    data:null,
                },
            }

        case ADD_CONTACT_LOAD:
            return {
                ...state,
                addContact:{
                    ...state.addContact,
                    loading:true,
                    error:null,
                },
            };

        
        case ADD_CONTACT_SUCCESS:{
            return{
                ...state,
                addContact: {
                    ...state.addContact,
                    loading:false,
                    data:action.payload,
                },
                contacts:{
                    ...state.contacts,
                    loading:false,
                    data:[action.payload, ...state.contacts.data],
                },
            }
        }
        case DELETE_CONTACT_LOADING:{
            return{
                ...state,
                contacts:{
                    ...state.contacts,
                    loading:false,
                    data:state.contacts.data.map((item) => {


                        if(item.id===action.payload)
                        {
                            return  {...item,deleting:true};
                        }

                        return item;
                    }),
                },
            }
        }
        case ADD_REMOVE_STAR_SUCCESS : {
            return {
                ...state,
                contacts:{
                    ...state.contacts,
                    data:state.contacts.data.map((item) => {
                        if(item.id === action.payload.id){
                            return action.payload;
                        }
                        return item;
                    })
                }
            }
        }
        case DELETE_CONTACT_SUCCESS:{
            return{
                ...state,
                contacts:{
                    ...state.contacts,
                    loading:false,
                    data:state.contacts.data.filter((item)=> item.id!==action.payload),
                },
            }
        }
        case ADD_CONTACT_ERROR:
            return {
                ...state,
                addContact: {
                    ...state.addContact,
                    loading:false,
                    
                }
            }
        case SEARCH_CONTACTS:
            return {
                contacts:{
                    ...state.contacts,
                    loading:false,
                    isSearchActive:action.payload.length>0||false,
                    foundContacts: state.contacts.data.filter((item) => {
                        try {
                            return item.first_name.toLowerCase().search(action.payload.toLowerCase())!==-1 ||
                               item.last_name.toLowerCase().search(action.payload.toLowerCase())!==-1 ||
                               item.phone_number.toLowerCase().search(action.payload.toLowerCase())!==-1
                        } catch (error){
                            return [];
                        }
                    }),
                }
            }

        default:
            return state;
    }
};


export default contacts;