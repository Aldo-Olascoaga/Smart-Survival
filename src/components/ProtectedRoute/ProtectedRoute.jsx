import React from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token');

    // const valid; verificación de token válido
    // jwt.verify}
    console.log("Protected");
    console.log(token);
    if (token == null) // && valid
        return <Navigate to="/login" />;

    return children;
}

export default ProtectedRoute;