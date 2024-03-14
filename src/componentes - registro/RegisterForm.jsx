
import React, { useState } from 'react';
import './RegisterForm.css';
import video from '../assets/img/iph.mp4'; 

function RegisterForm() {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        ciudad: '',
        nacionalidad: '',
        fechaNacimiento: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        ciudad: '',
        nacionalidad: '',
        fechaNacimiento: '',
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

        if (!formData.nombre.trim()) {
            formErrors.nombre = 'Nombre es requerido';
        }

        if (!formData.apellido.trim()) {
            formErrors.apellido = 'Apellido es requerido';
        }

        if (!formData.telefono.trim()) {
            formErrors.telefono = 'Telefono es requerido';
        }

        if (!formData.email.includes('@')) {
            formErrors.email = 'Formato de Email invalido.';
        }

        if (!formData.ciudad.trim()) {
            formErrors.ciudad = 'Ciudad es requerido';
        }

        if (!formData.nacionalidad.trim()) {
            formErrors.nacionalidad = 'Nacionalidad es requerido';
        }

        if (!formData.fechaNacimiento.trim()) {
            formErrors.fechaNacimiento = 'Fecha de nacimiento es requerido';
        }

        if (!formData.password.trim()) {
            formErrors.password = 'Password es requerido';
        }

        if (Object.keys(formErrors).length === 0) {
            console.log('Form submitted:', formData);
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className="register-container">
            <h2>Registro</h2>
            <video autoPlay loop className="video-background">
    
    <source src={video} type="video/mp4" />
    Tu navegador no soporta el elemento de video.
</video>

<div className="content">
    {/* Aquí puedes agregar el contenido que se superpondrá al video */}
</div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                    />
                    {errors.nombre && <p className="error-message">{errors.nombre}</p>}
                </div>
                <div className="form-group">
                    <label>Apellido</label>
                    <input
                        type="text"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                    />
                    {errors.apellido && <p className="error-message">{errors.apellido}</p>}
                </div>
                <div className="form-group">
                    <label>Telefono</label>
                    <input
                        type="text"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                    />
                    {errors.telefono && <p className="error-message">{errors.telefono}</p>}
                </div>
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
                    <label>Ciudad</label>
                    <input
                        type="text"
                        name="ciudad"
                        value={formData.ciudad}
                        onChange={handleChange}
                    />
                    {errors.ciudad && <p className="error-message">{errors.ciudad}</p>}
                </div>
                <div className="form-group">
                    <label>Nacionalidad</label>
                    <input
                        type="text"
                        name="nacionalidad"
                        value={formData.nacionalidad}
                        onChange={handleChange}
                    />
                    {errors.nacionalidad && <p className="error-message">{errors.nacionalidad}</p>}
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
                <button type="submit">Registrarme</button>
            </form>
        </div>
    );
}

export default RegisterForm;
