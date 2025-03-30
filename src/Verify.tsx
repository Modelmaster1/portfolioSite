import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

export default function Verify() {
    const [params] = useSearchParams();
    const token = params.get("token");
    const [message, setMessage] = useState("Verifying...");

    useEffect(() => {
        if (token) {
            axios.get(`http://localhost:4000/verify?token=${token}`)
                .then(res => setMessage(res.data.message))
                .catch(() => setMessage("Invalid or expired token"));
        } else {
            setMessage("No token provided");
        }
    }, [token]);

    return <h2>{message}</h2>;
}