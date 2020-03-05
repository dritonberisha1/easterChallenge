import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../../components/admin/auth-layout';

const INPUTS = {
    EMAIL: 'email',
    PASSWORD: 'password'
};

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <AuthLayout firstBox={<FirstBox />} secondBox={<SecondBox />} />
    )

    function FirstBox() {
        return (
            <Fragment>
                <h1>SIGN UP</h1>
                <div>
                    <p>
                        Don't have an account?
                        Sign up here to register your team and minutes.
                </p>

                    <div className="d-flex flex-column">
                        <Link to="/admin/sign-up" className="btn btn-third">Sign up</Link>
                    </div>
                </div>
                <div className="mt-4">
                    <p>Forgot your password?</p>
                    <div className="d-flex flex-column">
                        <Link to="/admin/reset-password" className="btn btn-third">Reset Password</Link>
                    </div>
                </div>
            </Fragment>
        )
    }

    function SecondBox() {
        return (
            <Fragment>
                <h1>LOGIN</h1>
                <div >
                    <div className="pt-2">
                        <label className="m-0">Email address</label>
                        <input
                            className="form-control"
                            name="email"
                            onChange={_onChange}
                            placeholder="Email"
                            type="text"
                            value={email} />
                    </div>
                    <div className="pt-2">
                        <label className="m-0">Password</label>
                        <input
                            className="form-control"
                            name="password"
                            onChange={_onChange}
                            placeholder="Password"
                            type="password"
                            value={password} />
                    </div>
                </div>
                <div className="d-flex flex-column mt-3">
                    {/* <button className="btn btn-secondary" onClick={_login}>Login</button> */}
                    <Link className="btn btn-secondary" to="/admin/create-team">Login</Link>
                </div>
            </Fragment>
        )
    }

    function _onChange(event) {
        const { name, value } = event.target;

        switch (name) {
            case INPUTS.EMAIL:
                return setEmail(value);
            case INPUTS.PASSWORD:
                return setPassword(value);
            default:
                return;
        }
    }

    function _login() {
        console.log("Login", email);
    }
}


export default LoginPage;