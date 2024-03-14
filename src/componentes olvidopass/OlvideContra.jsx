// ForgotPasswordForm.jsx
import React, { useState } from 'react';
import './OlvideContra.css';

function OlvideContra() {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        fechaNacimiento: ''
    });
    const [errors, setErrors] = useState({
        email: '',
        username: '',
        fechaNacimiento: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let formErrors = {};

        if (!formData.email.includes('@')) {
            formErrors.email = 'Invalid email format';
        }

        if (!formData.username.trim()) {
            formErrors.username = 'Username is required';
        }

        if (!formData.fechaNacimiento.trim()) {
            formErrors.fechaNacimiento = 'Fecha de nacimiento is required';
        }

        if (Object.keys(formErrors).length === 0) {
            // Form is valid, proceed with password reset
            console.log('Form submitted:', formData);
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className="forgot-password-container">
            <h2>Recupera tu Password!</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="error-message">{errors.email}</p>}
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p className="error-message">{errors.username}</p>}
                </div>
                <div className="form-group">
                    <label>Fecha de Nacimiento</label>
                    <input
                        type="date"
                        name="fechaNacimiento"
                        value={formData.fechaNacimiento}
                        onChange={handleChange}
                    />
                    {errors.fechaNacimiento && <p className="error-message">{errors.fechaNacimiento}</p>}
                </div>
                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
}

export default OlvideContra;
