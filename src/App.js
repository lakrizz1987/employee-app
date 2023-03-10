import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import EmployeeDetails from './Components/EmployeeDetails/EmployeeDetails';
import EmployeeForm from './Components/EmployeeForm/EmployeeForm';
import DeleteEmloyee from './Components/DeleteEmployee/DeleteEmloyee';
import EditEmployee from './Components/EditEmployee/EditEmployee';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/employee/:id' element={<EmployeeDetails/>}/>
        <Route path='/create-employee' element={<EmployeeForm text='Create'/>}/>
        <Route path='/delete-employee/:id' element={<DeleteEmloyee/>}/>
        <Route path='/edit-employee/:id' element={<EditEmployee/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
