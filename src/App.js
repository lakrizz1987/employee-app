import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import EmployeeDetails from './Components/EmployeeDetails/EmployeeDetails';
import EmployeeForm from './Components/EmployeeForm/EmployeeForm';
import DeleteEmloyee from './Components/DeleteEmployee/DeleteEmloyee';
import EditEmployee from './Components/EditEmployee/EditEmployee';
import TaskDetails from './Components/TaskDetails/TaskDetails';
import DeleteTask from './Components/DeleteTask/DeleteTask';
import AddTask from './Components/AddTask/AddTask';
import EditTask from './Components/EditTask/EditTask';
import CompleteTask from './Components/CompleteTask/CompleteTask';

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
        <Route path='/task/:id/:employeeId' element={<TaskDetails/>}/>
        <Route path='/delete-task/:id' element={<DeleteTask/>}/>
        <Route path='/create-task/:employeeId' element={<AddTask/>}/>
        <Route path='/edit-task/:id/:employeeId' element={<EditTask/>}/>
        <Route path='/complete/:id/:employeeId' element={<CompleteTask/>}/>
      </Routes>
    </div>
  );
}

export default App;
