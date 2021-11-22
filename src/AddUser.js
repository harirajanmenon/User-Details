import { useState} from 'react';

function AddUser(){

    const[gender, setGender] = useState('');
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[date, setDate] = useState('');
    const[phone, setPhone] = useState('');

    function create(){
        var details = {gender, name, email, username, password, date, phone}
        localStorage.setItem('added-items', JSON.stringify(details));
    }

    return(
        <div className="main">
            <div class="container">
                    <label><b>Gender</b></label>
                    <input 
                        type="text" 
                        placeholder="Enter Gender"                         
                        value={gender} 
                        onChange={event => setGender(event.target.value)} 
                        required>
                    </input>
                
                    <label><b>Name</b></label>
                    <input 
                        type="text" 
                        placeholder="Enter Name" 
                        value={name} 
                        onChange={event => setName(event.target.value)} 
                        required>
                    </input>
                        
                    <label><b>Email</b></label>
                    <input 
                        type="text" 
                        placeholder="Enter Email" 
                        value={email} 
                        onChange={event => setEmail(event.target.value)} 
                        required>
                    </input>

                    <label><b>Username</b></label>
                    <input 
                        type="text" 
                        placeholder="Enter Username" 
                        value={username} 
                        onChange={event => setUsername(event.target.value)} 
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

                    <label><b>Date of Birth</b></label>
                    <input 
                        type="text" 
                        placeholder="Enter DOB" 
                        value={date} 
                        onChange={event => setDate(event.target.value)} 
                        required>
                    </input>

                    <label><b>Phone No:</b></label>
                    <input 
                        type="text" 
                        placeholder="Enter Phone Number" 
                        value={phone} 
                        onChange={event => setPhone(event.target.value)} 
                        required>
                    </input>
            </div>
            <button type="submit"  onClick={create}>Add User</button>
        </div>
    );
}

export default AddUser;