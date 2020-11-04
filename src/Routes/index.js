import RegisterComponent from '../containers/Register/index';
import ContactsComponent from '../containers/Contacts/Contacts';
import LoginComponent from '../containers/Login/Login';
import CreateContactComponent from '../containers/CreactContacts/CreateContacts';

const routes = [
    {
        path: "/auth/register",
        component: RegisterComponent,
        title: 'Register',
        needsAuth:false,
    },
    {
        path: "/auth/login",
        component: LoginComponent,
        title: 'Login',
        needsAuth:false,
    },
    {
        path: "/contacts/create",
        component: CreateContactComponent,
        title: 'Create-Contact',
        needsAuth:true,
    },    
    {
        path: "/",
        component: ContactsComponent,
        title: 'Contacts',
        needsAuth:true,
    },
    
];


export default routes;