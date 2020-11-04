import React, { useEffect } from 'react';
import RegisterUI from '../../layout/Register/RegisterUI';
import useForm from './useForm';

function Register() {
    

    useEffect(() => {
        
    }, []);
    return (
        <RegisterUI form = {useForm()}/>
    )
}

export default Register;
