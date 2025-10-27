import { jwtDecode } from "jwt-decode";
import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const ProtectedRoute = () => {
    const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("Authorization");

        if (!token) {
            setIsAuthorized(false);
            return;
        }

        try {
            const decoded: any = jwtDecode(token);
            const now = Date.now() / 1000;
            if (decoded.exp && decoded.exp > now) {
                setIsAuthorized(true);
            } else {
                setIsAuthorized(false);
            }
        } catch (err) {
            console.error("Invalid token", err);
            setIsAuthorized(false);
        }
    }, []);

    if (isAuthorized === null) {
        return <div>Loading...</div>;
    }

    return isAuthorized ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;