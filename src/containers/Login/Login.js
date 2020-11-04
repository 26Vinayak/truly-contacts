import React from 'react';
import LoginUI from '../../layout/Login/LoginUI';
import useForm from './useForm';

function Login() {
    
    return (
        <LoginUI form = {useForm()}/>
    )
}

export default Login;
