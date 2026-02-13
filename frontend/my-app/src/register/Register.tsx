import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router';

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        role: '',
        designation: '', // Maps to 'specialization'
        leetcodeurl: '',
        codeforceurl: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('http://localhost:5001/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to register user');
            }

            const data = await response.json();
            console.log('User registered successfully:', data);
            alert('User registered successfully!');
            // Optionally reset form
            setFormData({
                username: '',
                role: '',
                designation: '',
                leetcodeurl: '',
                codeforceurl: ''
            });
            localStorage.setItem("user_id", String(data.id));
            localStorage.setItem("username", data.username);
            navigate('/');
        } catch (err: any) {
            console.error('Error registering user:', err);
            setError(err.message || 'An error occurred during registration.');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="register-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <h2>Join MindTrace</h2>
                <p className="register-subtitle">Start building your personal development map today.</p>
                {error && <p style={{ color: 'red', textAlign: 'center', marginBottom: '10px' }}>{error}</p>}

                <div className="form-group">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="role"
                        placeholder="Role (e.g., Student, Developer)"
                        value={formData.role}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="designation"
                        placeholder="Specialization / Designation"
                        value={formData.designation}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="leetcodeurl"
                        placeholder="LeetCode URL"
                        value={formData.leetcodeurl}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="codeforceurl"
                        placeholder="CodeForces URL"
                        value={formData.codeforceurl}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Registering...' : 'Register'}
                </button>
            </form>
        </div>
    );
}

export default Register;