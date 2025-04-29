import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './../assets/styles/LoginPage.css';
import AuthService from '../auth'; // Import AuthService

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        if (!email || !password) {
            setError('All fields are required.');
            setLoading(false);
            return;
        }

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailRegex.test(email)) {
            setError('Invalid email format');
            setLoading(false);
            return;
        }

        try {
            const result = await AuthService.login(email, password);
            console.log("Login successful", result);
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('loggedInUser', JSON.stringify(result.user));
            navigate('/');
        } catch (err) {
            setError(err.message);
            console.error("Login Error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-page">
            <h2>Log In</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" disabled={loading}>
                    {loading ? 'Logging In...' : 'Log In'}
                </button>
                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </form>
        </div>
    );
}

export default LoginPage;