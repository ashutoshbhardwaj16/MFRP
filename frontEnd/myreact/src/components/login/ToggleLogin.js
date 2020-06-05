import React from 'react';
import SelectSeats from '../SelectSeats/SelectSeats'
import PlanTravel from '../PlanTravel/PlanTravel'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import Navigation from '../Navigation/Navigation';
import MakePayment from '../MakePayment/MakePayment';
import ConfirmedTicket from '../ConfirmedTicket/ConfirmedTicket';
import Login from '../login/Login';
import ToggleScreen from '../Togle/ToggleScreen'
  import Toggler from '../Togle/Toggler'
const ToggleLogin = () => {
    return (
        <Router>
        <div>
            welcome
             
          
                 <Switch>
                     <Route exact path='/' render={props=><Login  {...props}/>}/>
                     <Route exact path='/user' component={ToggleScreen}/>                                          
                 </Switch>
        </div>    
        </Router>
        
    );
};

export default ToggleLogin;

/*
<Route exact path='/user/plan' component={ToggleScreen}/>
  
*/