import {useEffect } from 'react'


export const ExternalRedirect = () => {

  console.log('above use effect')

    useEffect(()=>{
      console.log('inside external redirect')
      window.location.href="https://google.com"
      // window.location.href ='https://gulfsothebysinternational--cddev.sandbox.my.salesforce.com/services/oauth2/authorize?client_id=3MVG9GXbtnGKjXe7F9lwjAiAmI0L4sNQkwMccr1wXX8E6k_R_hM.B0QCl23_lvLpJAMeLUnIK4DANKwKRQ0Ot&redirect_uri=https://sf-react.vercel.app/redirect&response_type=code'
     },[]);

    return null
  }