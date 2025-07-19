<<<<<<< HEAD
import './Login.css';
=======
import './Login.css'
>>>>>>> 69937d9bc210f5287756cb262a3408831323fcab
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

<<<<<<< HEAD
export default function Signup() {
=======
export default function Signup(){
>>>>>>> 69937d9bc210f5287756cb262a3408831323fcab
    const [name, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

<<<<<<< HEAD
    const submit = async () => {
        if (name && email && password) {
            try {
                const response = await fetch("http://localhost:5000/api/signup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ name, email, password })
                });

                const data = await response.json();

                if (response.ok) {
                    alert("✅ Account created successfully!");
                    setUsername("");
                    setEmail("");
                    setPassword("");
                } else {
                    alert(`❌ ${data.msg}`);
                }
            } catch (error) {
                console.error("Signup error:", error);
                alert("Server error. Please try again.");
            }
        } else {
            alert("Please fill all the fields");
        }
    };

    return (
        <div className="Entry">
            <h1>Sign Up</h1><br />

            <TextField
                required
                helperText="Please enter your name"
                label="Name"
                value={name}
                onChange={(e) => setUsername(e.target.value)}
            /><br />

            <TextField
                required
                helperText="Enter your Email"
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            /><br />

            <TextField
                required
                label="Password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            /><br />

            <Button
                variant="contained"
                color="inherit"
                size="medium"
                onClick={submit}
            >
                Submit
            </Button>

            <h4>Already have an account? <a href="/login">Log in</a></h4>
        </div>
    );
=======
    const submit= ()=> {
        if (name && email && password) {
            const user = {
                name,
                email,
                password
            };

            // Get existing users from localStorage
            const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

            // Add new user
            existingUsers.push(user);

            // Save back to localStorage
            localStorage.setItem('users', JSON.stringify(existingUsers));

            alert("Your account has been created");

            // Clear input fields
            setUsername("");

        setEmail("");
        setPassword("");
    } else {
        alert("Please fill all the fields");
    }

};



    return(
        <div className="Entry">

            <h1>Sign Up</h1>
            <br />

            <TextField
            required
            helperText="Please enter your name"
            id="name-demo-helper-text-misaligned"
            label="Name" 
            value={name}
            onChange={(e) => setUsername(e.target.value)}/>

            <br />

            <TextField
            required
            helperText="Enter your Email"
            id="email-demo-helper-text-misaligned"
            label="Email" type='email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
            
            <br />

            <TextField
            required
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
           />
            <br />

            <Button variant="contained" 
            color="inherit" size="medium" onClick={submit}>
                    Submit  
            </Button>
        
            <h4>Already have an account? <a href="Login" color='
            ' >Log in </a></h4>

        </div>   
    )
>>>>>>> 69937d9bc210f5287756cb262a3408831323fcab
}
