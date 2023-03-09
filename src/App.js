import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import EmployeeDetails from './Components/EmployeeDetails/EmployeeDetails';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/employee/:id' element={<EmployeeDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
