import React, { useEffect,useState } from 'react'
import { useParams,useNavigate } from "react-router-dom"
import { requestServer } from "../utility/HttpReq";
import axios from 'axios';
import { FormControl ,InputLabel, Input,FormHelperText} from '@mui/material';
import { TextField ,Box} from '@mui/material'
import {useLocation} from 'react-router-dom';
import ROUTE_PATHS from "../properties/routePaths";

const RecordDetail= ({ item }) => {

    const location = useLocation();
    const [singleProperty, setSingleProperty] = useState([{}]);
    const [rec,setRec] =useState([{}])
    const {detailpage} = useParams()
    const navigate =useNavigate();
    const [showData,setShowData] = useState(false);
    const [single,setSingle] = useState([{}]);

    useEffect(()=>{

      // setSingle(location.state.name);
      console.log('location name',location.state.name)
      // setSingleProperty(location.state.rec)
      // setShowData(true)
      // setSingle(localStorage.getItem("selectedCard")); -- we store values using local storage
      
        requestServer("post", process.env.REACT_APP_API_ENDPOINT +ROUTE_PATHS.FETCH_SINGLE_PROPERTIES, {}, null).then(
          (res) => {
            setSingleProperty(res.data.records);
            setShowData(true);
          
          }

        );
        // axios.post("http://localhost:5600/recordId?searchId="+localStorage.getItem("selectedCard")) 
        
        axios.post(process.env.REACT_APP_API_ENDPOINT +ROUTE_PATHS.FETCH_SINGLE_PROPERTIES+"?searchId="+location.state.name) 
          .then((res)=>{
                console.log('inside rec ', res)
            })
       
        
    },[])



if(showData){

;

  return (
    <>
    <div>
      <button onClick={()=>navigate(-1)} >Inventory Page</button>
    </div>

    <Box component="form"sx={{'& .MuiTextField-root': { m: 1, width: '25ch' }, }}
      noValidate
      autoComplete="off">
          <div>
              <TextField label="Property Name" value={singleProperty.Name} InputProps={{readOnly: true }}/>
              <TextField label="Project" value={singleProperty.Project_Name__c} InputProps={{readOnly: true }} />
              <TextField label="Type" value={singleProperty.Type__c} InputProps={{readOnly: true }} />
              <TextField label="City" value={singleProperty.City_Dubizzle__c} InputProps={{readOnly: true }} />
              <TextField label="Country" value={singleProperty.CD_Country__c} InputProps={{readOnly: true }} />
              <TextField label="Status" value={singleProperty.Status__c} InputProps={{readOnly: true }} />
              <TextField label="Sales Price" value={singleProperty.CD_Sales_Price__c} InputProps={{readOnly: true }} />
              <TextField label="Bedrooms" value={singleProperty.CD_Bedrooms__c} InputProps={{readOnly: true }} />
          </div>
    </Box>
    </>
   
  )
}
 
}

export default RecordDetail