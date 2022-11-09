import { Card } from 'antd';
import './App.css';
import MuiCard from './components/Mui/MuiCard';
import MuiData from './components/Mui/MuiData';
import MuiTab from './components/Mui/MuiTab';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { ExternalRedirect } from './components/ExternalRedirect';
import { InventoryManage } from './components/InventoryManage';
import  {BrowserRouter ,Routes,Route } from 'react-router-dom';
import {Redirect}  from './components/Redirect';
import RecordDetail from './components/RecordDetail';
import { Page } from './components/Page';
import Header from './sidebar/Header';

function App() {
  return (

    <BrowserRouter>
        <div className="App">
  
        <NavBar/>
      <Routes>
        <Route  path='/'          element ={<Home/>} />
        <Route  path ='/login'    element ={<ExternalRedirect/>} />
        <Route  path='/redirect'  element ={<Redirect/>}/>
        <Route  path='inventory' element ={<InventoryManage/>} >
            
        </Route>
        <Route path='detailpage' element={<RecordDetail/>} />
        <Route  path='/test'      element ={<MuiData/>} />
        <Route path='/page' element={<Page/>}/>
      </Routes>
        </div>
            
        {/* <MuiCard/> */}
        {/* <MuiTab/> */}
      

              {/* <div className="site-card-border-less-wrapper">
                <Card title="Card title" bordered={false} style={{ width: 300 }}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </div> */}

    </BrowserRouter>
    
  );
}

export default App;
