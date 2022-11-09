import React, { useEffect } from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

  const MuiPage = (props) =>  {


    useEffect(()=>{
        console.log('props',props)
    })

    const handlePageChange = (event, value) => {
       console.log('event',event);
       console.log('value',value);
      };

  return (
    <div >
    <Pagination count={props.data} showFirstButton showLastButton onChange={handlePageChange} />

        {/* <Stack spacing={2}>
        <Pagination count={props.data} showFirstButton showLastButton onChange={handlePageChange} />
         <Pagination count={props.data} hidePrevButton hideNextButton /> 
        </Stack> */}

    </div>
  )
}

export default MuiPage;
