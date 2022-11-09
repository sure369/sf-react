import React, { useEffect,useState} from 'react'
import axios from 'axios'
import {requestServer} from '../utility/HttpReq';
import {useNavigate} from "react-router-dom";

import ROUTE_PATHS from "../properties/routePaths";

const { REACT_APP_API_ENDPOINT } = process.env;

export const Redirect = () => {

  

  const [codeurl,setCodeurl] = useState();
  const [res ,setRes] = useState();
  const [userName,setUserName] = useState()
  const [property,setProperty] = useState({})
  const navigate = useNavigate();
  

    useEffect(()=>{
      var hr = window.location.href;
      console.log('window id ',hr);
      var code = hr.split('?')
      console.log('code',code);
      code.forEach(c=>{setCodeurl((c.split('=')[1]))})

      console.log('code url', codeurl);

      if(codeurl!== undefined){
        // axios.post("http://localhost:5600/connection?code="+codeurl)
        // axios.post(REACT_APP_API_ENDPOINT +ROUTE_PATHS.LOGIN_PATH+"code="+codeurl) 
        axios.post("http://localhost:5600/api/connection?code="+codeurl)
        .then(function(response) {
          console.log("test")
              console.log('log response ',response)
              setRes(response.data)
              sessionStorage.setItem('token',response.data);
              console.log('header',response.headers);
              console.log('request',response.request.response);

              //get userDetails
              //  requestServer('post','http://localhost:5600/userdetails',{},null)   
              // requestServer('post',REACT_APP_API_ENDPOINT +ROUTE_PATHS.LOGIN_PATH,{},null)  
              requestServer('post','http://localhost:5600/api/userdetails',{},null)                
              .then((res)=>{
                console.log('below req server',res)
                setUserName(res.data)
                console.log('userName',res.data)
                console.log('userName',userName)
              })

              console.log('userName',userName)
              // axios.post("http://localhost:5600/userdetails")
            // axios.post(REACT_APP_API_ENDPOINT +ROUTE_PATHS.LOGIN_PATH)
            axios.post("http://localhost:5600/api/userdetails")
            .then((response)=>{
              console.log('res user',response)
            })
      });
       
      }
    },[codeurl])

  if(property !== undefined || property != null  ){

    return (
      <>
         <div> User Name: {userName}  </div>     
      </>
    )

  }
  
}
