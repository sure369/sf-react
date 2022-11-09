import React ,{useEffect, useState ,useHistory, Children} from "react";
import  './Comp.css';
import axios, { Axios } from "axios";
//import {requestServer} from '../utility/HttpReq';
import { BrowserRouter } from "react-router-dom";
//const { requestServer } = require('../utility/HttpReq.js')
//var Component = require('../utility/HttpReq')


function LoginPage() {

  const [codeurl,setCodeurl] = useState();
  const [res ,setRes] = useState();
  useEffect(()=>{
   
    var hr = window.location.href;
        console.log('window id ',hr);
        var code = hr.split('?')
        console.log('code',code);
        code.forEach(c=>{setCodeurl(c.split('=')[1])})

        console.log('code url', codeurl);
        console.log(codeurl!== undefined)
        if(codeurl!== undefined){
          axios.post("http://localhost:5600/connection?code="+codeurl)
          .then(function(response) {
              console.log("test")
                  console.log(response)
                  setRes(response.data)
                  console.log('header',response.headers)
                  console.log('request',response.request.response)
          });
        }
    },[codeurl])


  const hanleclick = (e) => {
    console.log("code inside submit ",codeurl);
    const url='https://tecnosys-dev-ed.my.salesforce.com/services/oauth2/authorize?client_id=3MVG9pRzvMkjMb6nHc1vgqrgLi7NfjGYUcbMrg0k9ZQSSzGgUFryEaRRcmEXpZXziCzKBwZOLYJA14zFT.NzQ&redirect_uri=https://localhost:3001/redirect&response_type=code'
    window.location.replace(url);
        
    
  }


    const config ={
      headers :'123'
    }
    const bodyParams={key:"value"};

    axios.post(
      '/test',bodyParams,config
    )
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
  


  console.log('session tkn', sessionStorage.getItem('token'))

  if(window.location.href ==="http://localhost:3001/login")
    return (
         <button onClick={hanleclick} >login 2 </button>
        )


      

  return (
    <div>
      {res}
      <button >Send Token</button>
    </div>
  );
}

export default LoginPage; 