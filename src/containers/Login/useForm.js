import { useState,useContext, useEffect} from "react";
import { GlobalContext } from "../../Context/reducers/Provider";
import { useHistory } from "react-router-dom";
import { login } from "../../Context/actions/auth/Login";

export default () => {

    const [form,setForm] = useState({});
    const history = useHistory();

    const {
            authDispatch,
            authState: {
            auth:{loading,error,data},
        },
    } = useContext(GlobalContext);

    


    
    console.log("error",error);
    console.log("data",data);

    console.log("loading", loading);

    const onChange =  (e,{name,value}) => {
        setForm({...form,[name]:value});
    };

    console.log("form =>  ",form);

    const LoginFormValid = !form.username?.length 
                            || !form.password?.length;
    const onSubmit = ()=>{
        login(form)(authDispatch);
    };

    useEffect(()=>{
        if(data)
        {
            if(data.user){
                history.push('/');
            }
        }
    },[data]);
    return {form,onChange,loading,LoginFormValid,error,onSubmit};
};