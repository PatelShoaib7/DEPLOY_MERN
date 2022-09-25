import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import {Routes , Route} from "react-router-dom"
import { Login_Page } from './Components/Login_Page';
import { SignUp_Page } from './Components/SignUp_Page';
import { Home } from './Components/Home';
import { AllTasks } from './Components/AllTasks';
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/login"  element={<Login_Page />}/>
        <Route path="/signup"  element={<SignUp_Page />}/>
        <Route path="/task"  element={<AllTasks />}/>

      </Routes>
    
       
    </div>
  );
}

export default App;
