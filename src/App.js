import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BusAdd from './components/BusAdd';
import ViewBus from './components/ViewBus';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/busadd" element={<BusAdd/>}/>
    <Route path="/viewbus" element={<ViewBus/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
