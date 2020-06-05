import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Item from '../items/Item'
import './ConfirmedTicket.css'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


const ConfirmedTicket = (props) => {

    const [details, setDetails] = useState({
        from: '',
        to: '',
        busType: '',
        arrival: '',
        departure: ''
    })
    let [count, setCount] = useState(0)
    let [name, setname] = useState([])
    let [seat, setseat] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8282/api/findseat/' + props.match.params._id)
            .then(res => {
                setDetails({
                    from: res.data.message.from,
                    to: res.data.message.to,
                    busType: res.data.message.busType,
                    arrival: res.data.message.arrival,
                    departure: res.data.message.departure,
                })
            })
    })

    var storedArray = JSON.parse('[' + sessionStorage.getItem("names") + ']');
    const names = storedArray.map((number) => number);
    console.log(names)

    var storedArray = JSON.parse('[' + sessionStorage.getItem("seat") + ']');
    const seats = storedArray.map((number) => number);
    console.log(seats)

    return (
        <div>



            <div class="alert alert-success" role="alert">
                <button className="btn btn-success alert-link">Download Ticket</button></div>
            <div className="container card ticket">
                <h3>Congratulation! Ticket Confirmed</h3>
                Bus code: {props.match.params._id}
                <div> BusType  {details.busType}</div>
                <div>
                    Route : {details.from} to {details.to}
                </div>
                <div> Arrival {details.arrival}</div>
                <div>Departure {details.departure}</div>
                <div> Travel Charges {sessionStorage.getItem("count") * 900}</div>
                <div> Service Tax {sessionStorage.getItem("count") * 90}</div><hr />
                <div> Total Fare {sessionStorage.getItem("count") * 990}</div>
                <div>
                    <hr />
                </div>
                <div>
                    Passangers Name :
                          {
                        names
                    }
                </div>
                <div>
                    Seat Numbers :
                            {
                        seats
                    }
                </div>
                <hr />
                <h5>Thank You for booking with us.....</h5>
                <h6>On behalf of Go-green mission we request you not to print the ticket, Just show the confirmation message....Happy Journey</h6>
            </div>

            <div>

            </div>
            <div>
            </div>
        </div>
    );
};

export default ConfirmedTicket;





















// {seat.forEach(displayNames=()=>{
//     console.log(seat)
// })}
/*

  // switch (sessionStorage.getItem("fare")) {
  //   case 1:  console.log(sessionStorage.getItem("name"))
  //   console.log(sessionStorage.getItem("seat"))
  //     break;
  //   case 2: console.log(sessionStorage.getItem("name1"))
  //       console.log(sessionStorage.getItem("seat1"))
  //     break;
  //   case 3: console.log(sessionStorage.getItem("name2"))
  //        console.log(sessionStorage.getItem("seat2"))
  //     break;
  //   case 4: console.log(sessionStorage.getItem("name3"))
  //           console.log(sessionStorage.getItem("seat3"))
  //     break;
  // }


*/