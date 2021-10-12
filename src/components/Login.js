import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export const Login = (props) => {
    const host = "http://localhost:5000"
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let history = useHistory();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken)
            props.showAlert("Logged In Successfully", "success");
            history.push("/");
        }
        else
            props.showAlert("Invalid Credentials", "danger");
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className="container mt-2">
            <h2 className="my-4">Login to <span className="text-success">iNotebook</span></h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control form-control-lg w-50" id="email" name="email" value={credentials.email} onChange={onChange} />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control form-control-lg w-50" id="password" value={credentials.password} name="password" onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-lg btn-success mt-2">Login</button>
            </form>
        </div>
    )
}

export default Login