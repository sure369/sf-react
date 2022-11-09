import axios from "axios";

export const requestServer = (method,endpoint,payload,headers)=>{

        let token = sessionStorage.getItem('token');
        //setitem 

        headers = headers||{};

        headers.token = token;

        return  axios({
            method : method,
            url: endpoint,
            headers : headers,
            payload:payload

        })
        .then((res)=>{
            console.log('inside http res ',res)
            console.log('data',res.data)
            return res 

        }).catch((res)=>{

            return res

        })     
}
