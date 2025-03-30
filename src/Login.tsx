import { useState } from "react";
import axios from "axios";

export default function Login() {
    const [email, setEmail] = useState("");

    const handleLogin = async () => {
        if (!email) return alert("Enter email");

        try {
            const res = await axios.post("http://localhost:4000/login", { email });
            alert(res.data.message);
        } catch (error) {
            alert("Error logging in");
        }
    };

    return (
        <div>
            <h2>Magic Link Login</h2>
            <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button onClick={handleLogin}>Get Magic Link</button>
        </div>
    );
}