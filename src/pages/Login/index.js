import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleSubmitLogin(event) {
        event.preventDefault();

        const result = await api.post('/auth/authenticate', {
            email: email,
            password: password,
        });

        if (result) {
            localStorage.setItem('level', result.data.user.level);
            history.push('/event');
        }
    }

    return (
        <>
            <div className="login">
                <form className="formLogin" onSubmit={handleSubmitLogin}>
                    <div className="label">
                        <label>Login</label>
                    </div>
                    <div className="formInput">
                        <input className="mailInput" onChange={e => setEmail(e.target.value)} type="email" placeholder="Type in your email"></input>
                        <input className="passwordInput" onChange={e => setPassword(e.target.value)} type="password" placeholder="Type in your password"></input>

                        <div className="btnContinue">
                            <button>Continue</button>
                        </div>
                    </div>
                    <div>
                        <p>
                            Don't have an account? <a href="/signup">Sign Up</a>
                        </p>
                    </div>
                </form>
            </div>
        </>
    );
}