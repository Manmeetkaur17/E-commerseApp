import './Login.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function Signup(){
    const [name, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

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
}
