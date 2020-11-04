import React, { useState, useContext, useEffect } from 'react';
import CreateContactsUI from '../../layout/Contacts/Create/CreateContactsUI';
import createContact from '../../Context/actions/contacts/createContact';
import { GlobalContext } from '../../Context/reducers/Provider';
import { useHistory } from 'react-router-dom';
import clearCreateContact from '../../Context/actions/contacts/clearCreateContact';
function CreateContacts() {

    const [form,setform] = useState({});
    const [tempFile,settempFile] = useState(null);
    const history = useHistory();
    const {contactsDispatch,
        contactsState:{
            addContact:{
                loading,
                error,
                data,
    }}} = useContext(GlobalContext);
    

    const onImageChange = (e) =>{
        e.persist();
        const fileURL = e.target.files[0];
        setform({...form,contactPicture:fileURL});

        if(fileURL)
        {
            settempFile(URL.createObjectURL(fileURL));
        }
    } 

    useEffect(()=>{
        if(data)
        {
            history.push("/");
        }
        return ()=>{
            clearCreateContact()(contactsDispatch);
        }
    },[data]);

    const formIsHalffilling = Object.values(form).filter((item)=> item &&  item !== "")?.length > 0 && !data;


    console.log(formIsHalffilling);


    const onChange = (e,{name,value}) => {
        setform({...form,[name]:value});
    };
    console.log("form-> ",form);


    const onSubmit = () => {
        createContact(form)(contactsDispatch);
    }
    const formInValid = !form.firstName?.length
                        ||!form.lastName?.length
                        ||!form.countryCode?.length
                        ||!form.phoneNumber?.length;

    return (
       <CreateContactsUI onSubmit = {onSubmit} formInValid = {formInValid} onChange= {onChange}
                loading={loading}
                form = {form}
                formIsHalffilling = {formIsHalffilling}
                onImageChange = {onImageChange}
                tempFile = {tempFile}
            />
    );
}

export default CreateContacts;
