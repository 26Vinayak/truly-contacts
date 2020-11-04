import { useState,useContext, useEffect} from "react";
import { register } from "../../Context/actions/auth/register";
import { GlobalContext } from "../../Context/reducers/Provider";
import { useHistory } from "react-router-dom";

export default () => {

    const [form,setForm] = useState({});
    const [fieldErrors,setfieldErrors] = useState({});

    const history = useHistory();

    const {
            authDispatch,
            authState: {
            auth:{loading,error,data},
        },
    } = useContext(GlobalContext);

    
    useEffect(()=>{
        if(error)
        {
            for(const item in error){
                setfieldErrors({...fieldErrors,[item]:error[item][0]});
            }
        }
    },[error]);


    useEffect(()=>{

        if(data){
            history.push("/auth/login");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data]);
    
    console.log("error",error);
    console.log("data",data);

    console.log("loading", loading);

    const onChange =  (e,{name,value}) => {
        setForm({...form,[name]:value});
    };

    console.log("form =>  ",form);

    const registerFormValid = !form.username?.length 
                            || !form.firstName?.length
                            || !form.lastName?.length
                            || !form.email?.length
                            || !form.password?.length;



    const onSubmit = ()=>{
        setfieldErrors({});
        register(form)(authDispatch);
    };
    return {form,onChange,loading,registerFormValid,onSubmit,fieldErrors};
};