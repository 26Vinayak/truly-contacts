import React, {useContext, useEffect} from 'react'
import { GlobalContext } from '../../Context/reducers/Provider';
import getContacts from '../../Context/actions/contacts/getContacts';
import { useHistory } from 'react-router-dom';
import ContactListUI from '../../layout/Contacts/Lists/ContactListUI';
import deleteContacts from '../../Context/actions/contacts/deleteContacts';
import starUnstar from '../../Context/actions/contacts/starUnstar';
function Contacts() {

    const {contactsDispatch,contactsState} = useContext(GlobalContext);
    const history = useHistory();
    // console.log("contact",contactsState);

    const {contacts:{data}} = contactsState;

    const handledeleteContact = (id)=>{
        deleteContacts(id)(contactsDispatch);
    }


    const handlestarUnstar = (id,is_favorite)=>{
        
        starUnstar(id,!is_favorite)(contactsDispatch);
    };

    useEffect(() => {
        if(data.length===0){
            getContacts(history)(contactsDispatch);
        }
    }, []);

    return (
        <ContactListUI state = {contactsState} deleteContact = {handledeleteContact} starUnstar = {handlestarUnstar}/>
    )
}

export default Contacts;
