import Card from "@mui/material/Card";
import { useEffect, useState } from "react";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
 
function MuiData() {

  const [res, setRes] = useState([
    { id: "lx001", name: "lx -13", city: "Dubai", type: "Villa" ,CD_Bedrooms__c:'2Br'},
    { id: "lx002", name: "lx-2b-14", city: "Abu Dhabi", type: "Apartment" ,CD_Bedrooms__c:'2Br'},
    { id: "lx003", name: "test 3", city: "Doha", type: "Apartment" ,CD_Bedrooms__c:'2Br'},
    { id: "lx004", name: "test 4", city: "Damascus", type: "Villa" ,CD_Bedrooms__c:'3Br'},
    { id: "lx005", name: "test 5", city: "Doha", type: "Villa",CD_Bedrooms__c:'1Br' },
    { id: "lx006", name: "BE-3b-6", city: "Dubai", type: "Apartment" ,CD_Bedrooms__c:'2Br'},
    { id: "lx007", name: "test 7", city: "Damascus", type: "Villa",CD_Bedrooms__c:'2Br' },
    { id: "lx008", name: "test 8", city: "Abu Dhabi", type: "Apartment",CD_Bedrooms__c:'3Br' },
    { id: "lx009", name: "test 9", city: "Abu Dhabi", type: "Apartment",CD_Bedrooms__c:'2Br' },
    { id: "lx010", name: "lx-2b-10", city: "Damascus", type: "Villa",CD_Bedrooms__c:'3Br' },
    { id: "lx011", name: "test 11", city: "Doha", type: "Villa",CD_Bedrooms__c:'2' },
    { id: "lx012", name: "test 12", city: "Dubai", type: "Apartment",CD_Bedrooms__c:'2' },
     { id: "lx013", name: "test 13", city: "Damascus", type: "Villa",CD_Bedrooms__c:'2' },
  ]);
 
  const [filterRes, setFilterRes] = useState([{}]);
 
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [page, setPage] = useState(1);
  const [noOfPages,setNoOfPages] = useState(Math.ceil(res.length / itemsPerPage));
  const [showFilterData, setShowFilterData] = useState(true);
  const [propertySearch, setPropertySearch] = useState("");
  const [filteredProperty,setFilteredProperty] = useState(res)
  const [propType,setPropType] =useState('');
  const [propBedRooms,setPropBedRooms] = useState('');
 
 
  const handleChangePage = (event, value) => {
    setPage(value);
  };
 
 function handleSearch(){

  const newData =  
          res
          .filter(i=>i.name.includes(propertySearch))
          .filter(j=>j.type == (propType ==''?j.type:propType))
          .filter(k=>k.CD_Bedrooms__c.includes(propBedRooms))
        setFilteredProperty(newData);
        setNoOfPages((Math.ceil(newData.length / itemsPerPage)))
  }
 
  function handleReset(){
        console.log('res',res)
        setFilteredProperty(res);
        setPropertySearch('')
        setPropType('')
        setPropBedRooms('');
        setNoOfPages((Math.ceil(res.length / itemsPerPage)))

  }
  

  if (showFilterData) {
   
    return (
      <>
        <div>

          <div>
                <input placeholder='Search Property' value={propertySearch} onChange={(e)=>setPropertySearch(e.target.value)} />    
                <select className="form-control" onChange={(e)=>setPropType(e.target.value)}>
                  <option value=''>-Select-</option>
                  <option value='Villa'>Villa</option>
                  <option value='Apartment'>Apartment</option>
                </select>
                <select className="form-control" onChange={(e)=>setPropBedRooms(e.target.value)}>
                  <option value=''>-Select-</option>
                  <option value='1'>1BR</option>
                  <option value='2'>2BR</option>
                  <option value='3'>3BR</option>
                </select>
          </div>
          <div>
                <Button type='submit' onClick={handleSearch}> Search</Button>
                <Button type="reset" onClick={handleReset}>Clear</Button>
          </div>
        </div>
 
        <div>
          <Card
            dense
            compoent="span"
            sx={{
              bgcolor: "white",
            }}
          >
            {
              filteredProperty && filteredProperty.length>0?
              filteredProperty
              .slice((page - 1) * itemsPerPage, page * itemsPerPage)
              .map((item) => {
                return (
                  <CardContent
                    sx={{
                      bgcolor: "aliceblue",
                      m: "20px",
                    }}
                  >
                    <div
                      key={item.id}
                      button
                      onClick={() => console.log(item.id)}
                    >
                      <h1>{item.name} </h1>
                      <p>{item.city} </p>
                      <p>{item.type} </p>
                      <p>{item.CD_Bedrooms__c} </p>
                    </div>
                  </CardContent>
                );
              })
              :"No Data"
              }
          </Card>
 
          <Box component="span">
            <Pagination
              count={noOfPages}
              page={page}
              onChange={handleChangePage}
              defaultPage={1}
              color="primary"
              size="large"
              showFirstButton
              showLastButton
            />
          </Box>
        </div>
      </>
    );
  }
}
 
export default MuiData;
