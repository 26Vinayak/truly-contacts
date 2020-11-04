import React, { useContext, useEffect } from 'react'
import { Menu,Image,Button, Icon, Input} from 'semantic-ui-react';
import logo from '../../assets/images/logo.svg';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Logout from '../../Context/actions/auth/Logout';
import {GlobalContext} from '../../Context/reducers/Provider';
import isAuthenticated from '../../utils/isAuthenticated';
import searchContacts from '../../Context/actions/contacts/searchContacts';
import clearLogout from '../../Context/actions/auth/clearLogout';

function Header() {

    const {pathname} = useLocation();
    const {contactsDispatch:dispatch,authDispatch} = useContext(GlobalContext);
    const history = useHistory();
    console.log("path=>",pathname);

    const handleUserLogout = ()=>{
        Logout(history)(dispatch);
        clearLogout()(authDispatch);
    }
        

    
    const handleClick = () =>
    {
        history.push('/contacts/create');
    }

    const onChange = (e,{value}) => {

            const searchText = value.trim().replace(/" "/g,"");


            searchContacts(searchText)(dispatch);

    }


    return (
       <Menu pointing secondary>
            <Image src = {logo} width = {60}/>
            <Menu.Item as = {Link} to = "/" style = {{fontSize:24}}>TrulyContacts</Menu.Item>

            {isAuthenticated() &&  <Menu.Item position = "right">
                <Input style = {{width:300}} placeholder = "Search Contacts"  onChange = {onChange}/>
            </Menu.Item>}

            {pathname==='/' && (
                <Menu.Item position = "right">
                    <Button onClick = {handleClick} primary basic icon>
                        <Icon name = "add"></Icon> 
                        Create Contact
                    </Button>
                </Menu.Item>
            )}
            {isAuthenticated() &&
                pathname!=='/'  && (<Menu.Item position = "right">
                    {" "}           
                    <Button onClick = {handleUserLogout} color = "red" basic icon>
                            <Icon name = "log out"></Icon>
                            Logout
                    </Button>
                </Menu.Item>
            )}
            {isAuthenticated() &&
                pathname==='/'  && (<Menu.Item>
                    {" "}           
                    <Button onClick = {handleUserLogout} color = "red" basic icon>
                            <Icon name = "log out"></Icon>
                            Logout
                    </Button>
                </Menu.Item>
            )}
            
       </Menu>
    );
}

export default Header;
