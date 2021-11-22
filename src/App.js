import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Users from './Users';
import List from './List';
import AddUser from './AddUser';

function App() {
  return (
   <Router>
       <Routes>
          <Route path = "/" element={<Users/>}/>
          <Route path = "userlist" element={<List/>}/>
          <Route path = "addUser" element={<AddUser/>}/>
       </Routes>
   </Router>
  );
}

export default App;
