import './Login.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [name, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

<<<<<<< HEAD
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
=======
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
>>>>>>> 69937d9bc210f5287756cb262a3408831323fcab
        }
    };

    return (
        <div className="Entry">
            <h1>Login</h1><br />
<<<<<<< HEAD
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
            /><br /><br />
=======
            <TextField required label="Name" value={name} onChange={(e) => setUsername(e.target.value)} /><br />
            <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
>>>>>>> 69937d9bc210f5287756cb262a3408831323fcab
            <Button variant="contained" onClick={handleLogin}>Submit</Button><br />
            <h4>New user? <a href="/signup">Sign up</a></h4>
        </div>
    );
}
