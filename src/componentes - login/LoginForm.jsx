
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './LoginForm.css';
import video from '../assets/img/iph.mp4'; 


function LoginForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        email: '',
        password: ''
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

        if (!formData.email.trim()) {
            formErrors.email = 'Email es requerido.';
        } else if (!formData.email.includes('@')) {
            formErrors.email = 'Formato de Email invalido.';
        }

        if (!formData.password.trim()) {
            formErrors.password = 'Contraseña es requerida.';
        }

        if (Object.keys(formErrors).length === 0) {
            console.log('Form submitted:', formData);
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <video autoPlay loop className="video-background">
    
                <source src={video} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
            </video>
            
            <div className="content">
                {/* Aquí puedes agregar el contenido que se superpondrá al video */}
            </div>
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
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className="error-message">{errors.password}</p>}
                </div>
                <button type="submit">Iniciar Session</button>
            </form>
            <div className="additional-options">
                <Link to="/registro">No estás registrado? Regístrate aquí!</Link>
                <span> | </span>
                <Link to="/restaurar_contraseña">¿Olvidaste tu contraseña?</Link>
            </div>
            
        </div>
    );
}

export default LoginForm;
