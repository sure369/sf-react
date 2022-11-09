import Card from '@mui/material/Card';
import { useEffect, useState } from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import MuiPage from './MuiPage';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import ListItemText  from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Pagination from '@mui/material/Pagination';
import Divider  from '@mui/material/Divider';
import Box  from '@mui/material/Box';



function MuiTab() {

    const [projectsList,setProjectsList] = useState([
                                    {id:'lx001',name:'test 1',city:'Dubai',type:'Villa',},
                                    {id:'lx002',name:'test 2',city:'Abu Dhabi',type:'Villa',},
                                    {id:'lx003',name:'test 3',city:'Doha',type:'Apartment',},
                                    {id:'lx004',name:'test 4',city:'Damascus',type:'Villa',},
                                    {id:'lx005',name:'test 5',city:'Doha',type:'Villa',},
                                    {id:'lx006',name:'test 6',city:'Dubai',type:'Apartment',},
                                    {id:'lx007',name:'test 7',city:'Damascus',type:'Villa',},
                                    {id:'lx008',name:'test 8',city:'Abu Dhabi',type:'Apartment',},
                                    {id:'lx009',name:'test 9',city:'Abu Dhabi',type:'Villa',},
                                    {id:'lx010',name:'test 10',city:'Damascus',type:'Apartment',},
                                    {id:'lx011',name:'test 11',city:'Doha',type:'Villa',},
                                    {id:'lx012',name:'test 12',city:'Dubai',type:'Apartment',},
                                ])

    const[itemsPerPage,setItemsPerPage] = useState(5) ;
    const [page, setPage] = useState(1);
    const [noOfPages] = useState(
      Math.ceil(projectsList.length / itemsPerPage)
    );                 
  
   
    const handleChange = (event, value) => {
        setPage(value);
      };

    return (
        <>
      <div>
      <List dense compoent="span">
        {projectsList
          .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map(projectItem => {
            const labelId = `list-secondary-label-${projectItem.name}`;
                return (
                <ListItem
                    key={projectItem.id}
                    button
                    onClick={() => console.log(projectItem.id)}
                    sx={{
                                        m:"10px",
                                        bgcolor:"aliceblue"
                                        
                                     }}
                >
                    <ListItemText
                    id={labelId}
                    primary={projectItem.name}
                    secondary={
                        <div>
                            <div> {projectItem.city} </div>
                            <div> {projectItem.type} </div>
                        </div>
                    }
                    
                    />
                </ListItem>
                );
          })}
      </List>
      <Divider />
      <Box component="span">
        <Pagination
          count={noOfPages}
          page={page}
          onChange={handleChange}
          defaultPage={1}
          color="primary"
          size="large"
          showFirstButton
          showLastButton
          
        />
      </Box>
    </div>
            {/* <MuiPage data={size}/> */}
    </>
       
    );
}
export default MuiTab