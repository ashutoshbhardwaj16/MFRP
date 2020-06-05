import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './MakePayment.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";



const MakePayment = (props) => {
  console.log(sessionStorage.getItem("fare"))

  useEffect(() => {
    console.log('mounted..')
    console.log(props)
  })

  function handleClick(e) {
    console.log('payment success')
  }



  return (
    < >
      {console.log(props.match.params._id)}
      <div className="card payy">
        <h3>Amount to pay</h3>
        <h5>{sessionStorage.getItem('count') * 990}</h5>
        <h5>All major Cards Accepted</h5>
        <div className="check">
          <input type="radio" name="card" required value={"Debit Card"} />
          <label htmlFor="debeit card">Debit Card</label>
          <input type="radio" name="card" required value={"credit card"} />
          <label htmlFor="credit card"> Credit Card</label>
        </div>

        <div>Name on Card</div>
        <input type="text" required placeholder="John Doe" />
        <div>Card Number</div>
        <input type="number" required placeholder="1111-1111-1111-1111" />
        <span>Exp. Month-year</span>
        <input type="number" required placeholder="05-2023" />
        <span>CVV</span>
        <input type="number" required placeholder="123" />
        <Link to={"/confirmed/" + props.match.params._id}>

          <button className='btn btn-success' onClick={e => { handleClick(e) }}>Pay</button>

        </Link>

      </div>


    </>
  );
};

export default MakePayment;