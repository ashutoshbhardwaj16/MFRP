import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import RegistrationPage from '../RegistrationPage'
import './login.css'


const Login = ({ history }) => {
    const [eMail, seteMail] = useState('');
    const [password, setpassword] = useState('')

    const [details, setDetails] = useState({
        eMail: '',
        password: ''
    })

    const handleeMail = (e) => {
        e.preventDefault()
        let value = e.target.value
        setDetails(prevState => ({
            ...prevState,
            eMail: value
        }))
        return (seteMail(""))
    }
    const handlePassword = (e) => {
        e.preventDefault()
        const value = e.target.value
        setDetails(prevState => ({
            ...prevState,
            password: value
        }))
        return (setpassword(""))
    }

    const handleSubmit = async (e) => {

        e.preventDefault()
        try {
            let response = await axios.post("http://localhost:8282/api/login", {

                eMail: details.eMail,
                password: details.password,
            })
            console.log(response.data.message)
            if (response.data.status === true) {
                console.log("login...")
                sessionStorage.setItem("token", response.data)

                history.push('/user')
            }
        }
        catch (err) {
            console.log(err)
        }
    }


    return (
        <div>
            <nav className="navbar navbar-light bg-transparent text-dark ">
                <a className="navbar-brand">Bus Adda</a>
                <form className="form-inline " onSubmit={e => handleSubmit(e)} >
                    <input className="form-control mr-sm-2" type="text" required placeholder="Login ID" aria-label="Search" onBlur={e => handleeMail(e)} />
                    <div style={{ color: "red" }}>{eMail}</div>
                    <input className="form-control mr-sm-2" type="password" required placeholder="Password" aria-label="Search" onBlur={e => handlePassword(e)} />
                    <div style={{ color: "red" }}>{password}</div>
                    <button className="btn-outline-info logg" type="submit" >Login</button>
                </form>
            </nav>
            <RegistrationPage />
        </div>
    );
};

export default Login; 