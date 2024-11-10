import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation for empty fields
        if (username === '' || password === '') {
            setError('Please fill in both fields.');
            return;
        }

        try {
            // Check for hardcoded admin credentials
            if (username === 'Kawin' && password === 'Kawin_2005') {
                // Create an admin user object
                const adminUser = {
                    username: 'Kawin',
                    roles: 'admin',
                    token: 'admin-token' // Just an example token
                };
                
                // Store user info in local storage and set admin status
                localStorage.setItem('user', JSON.stringify(adminUser));
                login(adminUser); // Update auth context
                localStorage.setItem('isAdmin', 'true'); // Flag to indicate admin

                // Navigate to the admin dashboard
                navigate('/admin-dashboard');
            } else {
                // Proceed with normal authentication for other users
                const response = await axios.post('http://localhost:8080/userInfo/authenticate', {
                    username: username,
                    password: password,
                });

                const user = response.data;
                console.log(user);

                // Store user information if authenticated
                if (user) {
                    localStorage.setItem('user', JSON.stringify(user));
                    login(user);

                    // Check and set admin or user roles
                    const isAdmin = user.roles === 'admin';
                    localStorage.setItem('isAdmin', isAdmin.toString());

                    if (isAdmin) {
                        navigate('/admin-dashboard');
                    } else if (user.roles === 'user') {
                        navigate('/');
                    } else {
                        setError('Invalid role.');
                    }
                } else {
                    setError('Invalid username or password.');
                }
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>LOGIN</h2>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Login</button>
                <p>Don't have an account? <Link to="/signup">Signup</Link></p>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
};

export default Login;
