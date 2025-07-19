import './Login.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [name, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, password })
            });

            const data = await response.json();

            if (response.ok) {
                alert("Login Successful!");
                localStorage.setItem("loggedInUser", JSON.stringify(data.user)); // Optional for session
                navigate("/cardsContent");
            } else {
                alert(data.msg || "Invalid credentials!");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("Server error. Try again later.");
        }
    };

    return (
        <div className="Entry">
            <h1>Login</h1><br />
            <TextField
                required
                label="Name"
                value={name}
                onChange={(e) => setUsername(e.target.value)}
            /><br />
            <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <Button variant="contained" onClick={handleLogin}>Submit</Button><br />
            <h4>New user? <a href="/signup">Sign up</a></h4>
        </div>
    );
}
