import React from 'react';

const Inventory = ({character}) => {

  //TODO: add thumbnails with clickable to display

  return (
    <div className="item">
      Hello from Inventory
      <img className="thumbnails" src={character.thumbnail}/>
      <br/>
      {character.name}
    </div>
  )
}

export default Inventory;