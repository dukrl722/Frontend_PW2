import React, { useState } from 'react';
import { useHistory } from 'react-router';
import api from '../../services/api';

export default function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const history = useHistory();

    async function handleSubmitSignUp(event) {
        event.preventDefault();

        if (confirmPassword !== password) {
            alert('Incorrect password confirmation');
            return;
        }

        try {
            const result = await api.post('/auth/register', {
                email: email,
                password: password,
                level: 2
            });

            history.push('/');
        } catch (err) {
        }
    }

    return (
        <>
            <div className="signUp">
                <form className="formSignUp" onSubmit={handleSubmitSignUp}>
                    <div className="label">
                        <label>Sign Up</label>
                    </div>
                    <div className="formInput">
                        <input className="mailInput" onChange={e => setEmail(e.target.value)} type="email" placeholder="Type in your email"></input>
                        <input className="passwordInput" onChange={e => setPassword(e.target.value)} type="password" placeholder="Type in your password"></input>
                        <input className="confirmedPasswordInput" onChange={e => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm your password"></input>

                        <div className="btnContinue">
                            <button>Create account</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}