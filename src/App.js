import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import EmployeeDetails from './Components/EmployeeDetails/EmployeeDetails';
import EmployeeForm from './Components/EmployeeForm/EmployeeForm';
import DeleteEmloyee from './Components/DeleteEmployee/DeleteEmloyee';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/employee/:id' element={<EmployeeDetails/>}/>
        <Route path='/create-employee' element={<EmployeeForm text='Create'/>}/>
        <Route path='/delete-employee/:id' element={<DeleteEmloyee/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
