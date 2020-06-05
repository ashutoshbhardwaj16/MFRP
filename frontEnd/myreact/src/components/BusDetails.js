import React, { Component } from 'react';
import axios from "axios";

class BusDetails extends Component {
    constructor(props) {
        super(props);
        this.state={
            buses: []
        }
        //state={bus:[]}
    }
    componentDidMount() {
        axios.get('http://localhost:8282/api/bus')
            .then(res => {
                const busses = res.data;
                this.setState = ({ busses })
            })
    }
    render() {
        return (
            <div>
                {this.state.busses.map(bus=>{
                    return(
                        <table>
                            <tr>
                    <td>{bus.busType}</td>
                            </tr>
                        </table>
                    )
                })}
            </div>
        );
    }
}
export default BusDetails;