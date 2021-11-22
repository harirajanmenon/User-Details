import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import * as data from './login.json';

function Users() {

    const[name, setName] = useState('');
    const[password, setPassword] = useState('');

    const navigate = useNavigate();
    
    function login(){
        if (name === data.default.username && password === data.default.password) {
            navigate('/userlist')
        } else {
            alert("Invalid Credentials...!!")
        }
    }

    return (
        <div className="main">
            <div class="container">
                    <label><b>Username</b></label>
                    <input 
                        type="text" 
                        placeholder="Enter Username" 
                        value={name} 
                        onChange={event => setName(event.target.value)} 
                        required>
                    </input>
                
                    <label><b>Password</b></label>
                    <input 
                        type="password" 
                        placeholder="Enter Password" 
                        value={password} 
                        onChange={event => setPassword(event.target.value)} 
                        required>
                    </input>
                        
                    <button type="submit" onClick={login}>Login</button>
            </div>
    
            <div class="container">
                <button type="button" class="cancelbtn">Cancel</button>
                <span class="psw">Forgot <a href="#">password?</a></span>
            </div>
        </div>
        
      );
}

export default Users;