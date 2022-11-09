import React ,{useState,useEffect} from 'react'

import { requestServer } from '../utility/HttpReq';


export const Page = (props) => {

    const [singleRec,setSingleRec] =useState([{}])
    useEffect(() => {
        console.log('first')
        requestServer("post", "http://localhost:5600/recordId", {}, null)
        .then((res) => {
            console.log("inside get records", res.data.records);
            singleRec(res.data.records[0]);

          }
        );
      }, []);
   
  return (
    <div>
    
    </div>
  )
}

