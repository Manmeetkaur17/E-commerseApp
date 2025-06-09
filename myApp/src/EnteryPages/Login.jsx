import './Login.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [name, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const matchedUser = users.find(user => user.name === name && user.password === password);

        if (matchedUser) {
            alert("Login Successful!");
            localStorage.setItem("loggedInUser", JSON.stringify(matchedUser)); // Store session info
            navigate("/cardsContent"); // Navigate to protected page
        } else {
            alert("Invalid name or password.");
        }
    };

    return (
        <div className="Entry">
            <h1>Login</h1><br />
            <TextField required label="Name" value={name} onChange={(e) => setUsername(e.target.value)} /><br />
            <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
            <Button variant="contained" onClick={handleLogin}>Submit</Button><br />
            <h4>New user? <a href="/signup">Sign up</a></h4>
        </div>
    );
}
