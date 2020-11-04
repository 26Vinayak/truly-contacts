import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route, useHistory} from 'react-router-dom';
import routes from './Routes/index';
import { GlobalProvider } from './Context/reducers/Provider';
import isAuthenticated from './utils/isAuthenticated';
import UserLeaveConformation from './Components/UserLeaveConformation';

const RenderRoute = (route) => {
  const history = useHistory();
  document.title = route.title||'TrulyContacts';
  if(route.needsAuth  && !isAuthenticated())
  { 
      history.push('/auth/login');
  }

  return (   
  <Route
      path = {route.path}
      exact
      render = {(props) => <route.component {...props}/>}
    ></Route>);
};

function App() {

  const [confirmOpen,setConfirmOpen] = useState(true);

  return (
    <GlobalProvider>
       <Router getUserConfirmation = {(message,callback) => {

          return UserLeaveConformation(message,callback,confirmOpen,setConfirmOpen);

       }}>
          <Switch>
              {routes.map((route,index) => <RenderRoute {...route} key = {index}/>)}
          </Switch>
       </Router>
   </GlobalProvider>
  );
}

export default App;
