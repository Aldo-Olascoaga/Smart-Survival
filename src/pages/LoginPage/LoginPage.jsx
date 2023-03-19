import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarPages from '../../components/NavbarPages/NavbarPages';
import Footer from '../../components/Footer/Footer';
import "./LoginPage.css"
let base64 = require('base-64');


const LoginPage = () => {
    const form = useRef();
    const navigate = useNavigate();
    const [hasAccount, setHasAccount] = useState(true);

    const toggleHasAccount = () => {
        setHasAccount(!hasAccount);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // handle login or registration logic


        const uri = 'http://smart-survival-api.us-east-1.elasticbeanstalk.com/usuario';
        const email = form.current.email.value;
        const password = form.current.password.value;
        const response = await fetch(uri, {
            method: 'GET',
            headers: {
                authorization: 'Basic ' + base64.encode(email + ":" + password)
            }
        });
        //
        //base64.encode(username + ":" + password));

        /*const formData = new FormData(form.current);
        const uri = 'http://apitc2005b23-env.eba-hipqm9w8.us-east-1.elasticbeanstalk.com/login';
        const response = await fetch(uri, {
            method: 'POST',
            body: formData
        });*/

        if (response.status !== 200) {
            const data = await response.json();
            alert(data.error.message);
        } else {
            const data = await response.json();

            console.log(data);
            if (data.token !== "") {
                localStorage.setItem("token", data.token);
                navigate('/')
            } else {
                alert("Error");
            }
        }

    }

    return (
        <body>
            <div className='login-page'>
                <NavbarPages />
                <h2>{hasAccount ? 'Log in' : 'Create an account'}</h2>
                <form ref={form} onSubmit={handleSubmit}>
                    {hasAccount ? (
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="user" required />
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" required />
                            <button type="submit">Log in</button>
                        </div>
                    ) : (
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" required />
                            <button type="submit">Create account</button>
                        </div>
                    )}

                    <div style={{ marginTop: '1rem' }}>
                        <p>
                            {hasAccount ? "Don't have an account? " : 'Already have an account? '}
                            <button type="button" onClick={toggleHasAccount}>
                                {hasAccount ? 'Create one' : 'Log in'}
                            </button>
                        </p>
                    </div>
                </form>
            </div>
            <Footer />
        </body>
    );
}

export default LoginPage;



