import React, { useEffect, useState } from "react";
import { requestServer } from "../utility/HttpReq";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import RecordDetail from "./RecordDetail";
import Button from "@mui/material/Button";


import ROUTE_PATHS from "../properties/routePaths";

export const InventoryManage = (props) => {

  const [property, setProperty] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [page, setPage] = useState(1);
  const [noOfPages, setNoOfPages] = useState(0);

  const [filteredProperty, setFilteredProperty] = useState([{}]);
  const [propertyNameSrc, setPropertyNameSrc] = useState('');
  const [propertyStatusSrc,setPropertyStatusSrc]=useState('');
  const [propertyBedroomSrc,setPropertyBedroomSrc] = useState();

  const navigate = useNavigate();

    useEffect(() => {
        requestServer("post", process.env.REACT_APP_API_ENDPOINT +ROUTE_PATHS.FETCH_PROPERTIES, {}, null).then(
          (res) => {
            console.log("inside get records", res);
            setProperty(res.data.records);
            setFilteredProperty(res.data.records);
            setNoOfPages(Math.ceil(res.data.records.length / itemsPerPage));
            setLoading(false);
          }
        );
    }, []);

    //nav to rec detail page 

  const handleGoToDetails = (item) => {
    console.log("cardId", item);
    // localStorage.setItem("selectedCard", cardId);
    navigate("/detailpage",{state:{name:item}});
   
  };



  const handleChangePage = (event, value) => {
    setPage(value);
  };

  function handleSearch() {

    // if(property!== undefined){
      const newData = 
                    property
                    .filter(i => i.Name.includes(propertyNameSrc))
                    .filter(j => j.Status__c  == (propertyStatusSrc == "" ? j.Status__c  : propertyStatusSrc))
                    .filter(k => k.CD_Bedrooms__c.includes(propertyBedroomSrc))
                    setFilteredProperty(newData);
                    setNoOfPages(Math.ceil(newData.length / itemsPerPage));
    // }  
  
  }

  function handleReset() {
    console.log("res", property);
    setFilteredProperty(property);
    setPropertyNameSrc('');
    setPropertyStatusSrc('');
    setPropertyBedroomSrc('')
    setNoOfPages(Math.ceil(property.length / itemsPerPage));
    // window.location.reload(false)
  }

  if (loading) {
    return (
      <>
        <div>Loading.....</div>
      </>
    );
  }

  if (property !== undefined) {
    return (
      <>
          <div>
            <div>
              <input placeholder="Search Property" value={propertyNameSrc} 
                     onChange={(e) => setPropertyNameSrc(e.target.value)}
              />
              <select className="form-control" value={propertyStatusSrc}
                      onChange={(e) => setPropertyStatusSrc(e.target.value)}
              >
                <option value="">-Search by Status-</option>
                <option value="ON HOLD">ON HOLD</option>
                <option value="Available">Available</option>
                <option value="Sold">Sold</option>
                <option value="Booked">Booked</option>
                <option value="Processed">Processed</option>
                <option value="Registered at DLD">Registered at DLD</option>
                <option value="Commission Paid to Sotheby's">Commission Paid to Sotheby's</option>
                <option value="Commission Paid to third party brokerage">Commission Paid to third party brokerage</option>
              </select>
              <select className="form-control" value={propertyBedroomSrc}
                      onChange={(e) => setPropertyBedroomSrc(e.target.value)}
              >
                <option value="">-Search by BedRrooms-</option>
                <option value="1">1BR</option>
                <option value="2">2BR</option>
                <option value="3">3BR</option>
              </select>
            </div>
            <div>
              <Button type="submit" onClick={handleSearch}>Search</Button>
              <Button type="reset" onClick={handleReset}>Clear</Button>
            </div>
        </div>

        <div>
          <Card dense compoent="span" sx={{ bgcolor: "white" }}>
            {
            filteredProperty && filteredProperty.length>0?
            filteredProperty
              .slice((page - 1) * itemsPerPage, page * itemsPerPage)
              .map((item) => {
                return (
                  <div>
                    <CardContent sx={{ bgcolor: "aliceblue", m: "20px" }}>
                      <div
                        key={item.Id}
                        button
                        onClick={() => handleGoToDetails(item.Id)}
                      >
                        {/* //()=>setRecordDetailId(item.Id) */}
                        <h1>{item.Name} </h1>
                        <div>Project Name : {item.Project_Name__c} </div>
                        <div>City :{item.CD_City__c} </div>
                        <div>Type : {item.Type__c} </div>
                        <div>Status : {item.Status__c} </div>
                        <div>B.Room : {item.CD_Bedrooms__c} </div>
                      </div>
                    </CardContent>
                  </div>
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
};
