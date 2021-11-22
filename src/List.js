import { useEffect, useState} from 'react'
import './App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function List(){
    
    const[data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{

        setTimeout(() => {
            axios.get(`https://randomuser.me/api/0.8/?results=20`)
            .then(res => {
                setData(res);
                localStorage.setItem('USER-LIST', JSON.stringify(res.results));
                console.log(data);        
            })
        }, 4000);
    },[])

    function addUser(){
        navigate('/addUser')
    }

    return (
        <div className="main">
            <div class="container">
                {/* <ul>
                    {data.map(d => <li key={d.name}y>{d.name}</li>)}
                </ul>                         */}
            </div>
            <button type="submit"  onClick={addUser}>Add User</button>
        </div>
      );
}

export default List;