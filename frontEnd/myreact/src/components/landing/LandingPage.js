import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from '../login/Login';
import ToggleScreen from '../Togle/ToggleScreen';

const LandingPage = () => {
  return (
    <Router>
      
    <Switch>
      <Route path='/' exact render={props =>  <Login {...props} />}/>
      <Route path='/user' render={props=>{
     
          if(sessionStorage.getItem('token')){
            return(<ToggleScreen {...props}/>)
          }else{
              return( <Redirect to='/'/>)
          }

      }}/>
      
    </Switch>
       
   </Router>
    
      
  );
}

export default LandingPage;














/*

          <div className="list-group-item" >
          <div className="row">
         
            <div className="col-9">
                <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a  className='nav-link active'  href="#">Plan Your Travel</a>
                </li>
                <li className="nav-item">
                  <a  className='nav-link active'  href="#">Select Your Seats</a>
                </li>
                
                <li className="nav-item">
                  <a  className='nav-link active'  href="#">Payment</a>
                </li>
                
                <li className="nav-item">
                  <a  className='nav-link active'  href="#">Ticket Confirmation</a>
                </li>
              </ul>
             </div>
          </div>
        </div>

*/



/*

        <div className="container grid ">
                <span><input type="text" placeholder="From"/></span>
                <span><input type="text" placeholder="to"/></span>
                <span><input placeholder="Date" class="textbox-n" type="text" onfocus="(this.type='date')"/></span>
                <span><button type="button" class="btn btn-dark">Search</button></span> 
            </div>
            */