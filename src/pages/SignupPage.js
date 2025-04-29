import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './../assets/styles/SignupPage.css';
import AuthService from '../auth'; // Import AuthService


function SignupPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
    
        if (!username || !email || !password) {
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
    
        if (password.length < 8) {
            setError('Password must be at least 8 characters long.');
            setLoading(false);
            return;
        }
    
        try {
            const userData = { username, email, password };
            const result = await AuthService.signup(userData);
            console.log("Signup result:", result);
    
            // Set user authentication status in localStorage
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('user', JSON.stringify(userData)); // Store user details
    
            // Navigate to the Portfolio Page
            navigate('/login');
        } catch (err) {
            setError(err.message);
            console.error("Signup Error:", err);
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <div className="signup-page">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} className="signup-form">
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
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
                    {loading ? 'Signing Up...' : 'Sign Up'}
                </button>
                <p>Already have an account? <Link to="/login">Log in</Link></p>
            </form>
        </div>
    );
}

export default SignupPage;
