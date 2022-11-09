import { Card } from 'antd';
import './App.css';
import Home from './components/Home';
import { ExternalRedirect } from './components/ExternalRedirect';
import { InventoryManage } from './components/InventoryManage';
import  {BrowserRouter ,Routes,Route } from 'react-router-dom';
import {Redirect}  from './components/Redirect';
import RecordDetail from './components/RecordDetail';
import Header from './sidebar/Header';
import NavBar from './components/NavBar';
import MuiData from './components/Mui/MuiData';

function App() {
  return (

    <BrowserRouter>
        <div className="App">
  
        <NavBar/>
      <Routes>
        <Route  path='/'          element ={<Home/>} />
        <Route  path ='/login'    element ={<ExternalRedirect/>} />
        <Route  path='/redirect'  element ={<Redirect/>}/>
        <Route  path='inventory' element ={<InventoryManage/>} ></Route>
        <Route  path='detailpage' element={<RecordDetail/>} />
        <Route  path='/test'      element ={<MuiData/>} />
      </Routes>
        </div>

    </BrowserRouter>
    
  );
}

export default App;
