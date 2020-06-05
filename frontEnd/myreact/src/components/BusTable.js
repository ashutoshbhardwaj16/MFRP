import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './BusTable.css'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import './BusTable.css'


const BusTable = ({ value: buses }) => {

  return (
    <>

      <div className="container">
        <h3>Select Bus</h3>
        <div className="row">
          {buses.bus.map((row) => (


            <div className="cardbus card col ">

              <div>Bus Type {row.busType}</div>
              <div>Departure {row.departure}</div>
              <div>Arrival   {row.arrival}</div>
              <div>Date      {row.dateAvailable} </div>
              <div>Seats Available {row.seatsAvailable}</div>
              <div>Fare      {row.fare}</div>
              <div>Tax       {row.ServiceTax}</div>
              <div>From      {row.from}</div>
              <div>To        {row.to}</div>
              <div>
                <Link to={"/seats/" + row._id}><button className="btn btn-info"  > View Seats</button>
                </Link>
              </div>
            </div>
          ))}
          <hr />
        </div>
      </div>
    </>
  );
};

export default BusTable;





/*

<table>
      <tr>
<td class="table-dark">Departure</td>
<td class="table-dark">Arrival</td>
<td class="table-dark">Date</td>
<td class="table-dark">Available Seats</td>
<td class="table-dark">Fare</td>
<td class="table-dark">Tax</td>
<td class="table-dark">From</td>
<td class="table-dark">To</td>
</tr>
</table>
<table>
<div className="row">
           {buses.bus.map((row)=>(


              <tr>
                <div className="card container">

              <td>{row.busType}</td>
              <td>{row.departure}</td>
              <td>{row.arrival}</td>
              <td>{row.dateAvailable} </td>
              <td>{row.fare}</td>
              <td>{row.ServiceTax}</td>
              <td>{row.from}</td>
              <td>{row.to}</td>
              <td>
              <Link to={"/seats/" + row._id}><button className="btn btn-info"  > View Seats</button>
              </Link>
              </td>
              <hr/>

              </div>
              </tr>
                         ))}
</div>

</table>


*/





























/*

        <table>
                  <tr>
        <td class="table-dark">Departure</td>
        <td class="table-dark">Arrival</td>
        <td class="table-dark">Date</td>
        <td class="table-dark">Available Seats</td>
        <td class="table-dark">Fare</td>
        <td class="table-dark">Tax</td>
        <td class="table-dark">From</td>
        <td class="table-dark">To</td>
        </tr>
{console.log(buses.bus._id)}
        </table>


*/

/*




            <td className='table-active tx'>{row.depature}   </td>
            <td className="table-active tx">{row.arrival}    </td>
            <td className="table-active tx">{row.dateAvailable}  </td>
            <td className="table-active tx">{row.seatsAvailable}     </td>
            <td className="table-active tx">{row.fare}       </td>
            <td className="table-active tx">{row.serviceTax} </td>
            <td className="table-active tx">{row.from}   </td>
            <td className="table-active tx">{row.to} </td>
            <td><button className="btn btn-dark" >View Seats</button></td>


*/