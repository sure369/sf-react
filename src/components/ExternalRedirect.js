import {useEffect } from 'react'


export const ExternalRedirect = () => {


    useEffect(()=>{
      window.location.href ='https://gulfsothebysinternational--cddev.sandbox.my.salesforce.com/services/oauth2/authorize?client_id=3MVG9GXbtnGKjXe7F9lwjAiAmI0L4sNQkwMccr1wXX8E6k_R_hM.B0QCl23_lvLpJAMeLUnIK4DANKwKRQ0Ot&redirect_uri=http://localhost:3001/redirect&response_type=code'
    },[]);

    return null
  }