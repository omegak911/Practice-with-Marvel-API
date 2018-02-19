import React from 'react';
import Inventory from './Inventory';

const InventoryList = ({inventory}) => {

  return (
    <div className="inventoryList">
      {inventory.map( character => 
        <Inventory character={character}/>
      )}
    </div>

  )
}

export default InventoryList;