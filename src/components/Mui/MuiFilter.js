import React, { useState } from "react";
import Multiselect from 'multiselect-react-dropdown';

const OptionsPropertyType = [
  { name: "Condo", id: "Condo" },
  { name: "Coop", id: "Coop" },
  { name: "Duplex", id: "Duplex" },
  { name: "Lot/Land", id: "Lot/Land" },
  { name: "Manufactured", id: "Manufactured" },
  { name: "Multi Family", id: "Multi Family" },
  { name: "Other", id: "Other" },
  { name: "Penthouse", id: "Penthouse" },
  { name: "Single Family", id: "Single Family" },
  { name: "Studio", id: "Studio" },
  { name: "Townhouse", id: "Townhouse" },
  { name: "Villa", id: "Villa" },
  { name: "Apartment", id: "Apartment" },
];

function MuiFilter() {
  const [selected, setSelected] = useState([{}]);

     function handleSelect(selectedList, selectedItem) {
       console.log('selectedList',selectedList)
      setSelected(selectedList)
       console.log('selectedItem',selectedItem)
       console.log('selected',selected)

       }
       function handleRemove(selectedList, removedItem) {
        console.log('selectedList',selectedList)
        console.log('removedItem',removedItem)
        console.log('selected',selected)
          
        }
  return (
    <div>
   {/* {selected} */}
          <Multiselect
            options={OptionsPropertyType} // Options to display in the dropdown
            selectedValues={selected} // Preselected value to persist in dropdown
            onSelect={handleSelect} // Function will trigger on select event
            onRemove={handleRemove} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
          />
  </div>
  )
}

export default MuiFilter;