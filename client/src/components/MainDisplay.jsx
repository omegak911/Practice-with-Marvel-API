import React from 'react';

const MainDisplay = ({addNewCharacter, searchInventory}) => {

  let find = () => {
    let query = document.getElementById('query').value;

    searchInventory(query);
    document.getElementById('query').value = '';
  }

  let add = () => {
    let character = {
      name:  document.getElementById('charName').value,
      description:  document.getElementById('description').value,
      urls:  document.getElementById('urls').value,
      thumbnail:  document.getElementById('thumbnail').value,
      comics:  document.getElementById('comics').value,
      series:  document.getElementById('series').value
    }

    addNewCharacter(character);
  }

  return (
    <div>
      display main pic here

      <form>
        <input id="query" type="text"/>
        <button type="button" onClick={find}>Find Character!</button>
      </form>
      <br/>
      <br/>
      Add New Character
      <form>
        <input id="charName" type="text"/> Character Name
        <br/>
        <input id="description" type="text"/> Description
        <br/>
        <input id="urls" type="text"/> urls
        <br/>
        <input id="thumbnail" type="text"/> picture
        <br/>
        <input id="comics" type="text"/> comic appearances
        <br/>
        <input id="series" type="text"/> series
        <button type="button" onClick={add}>Create New Character!</button>
      </form>
    </div>
  )
}

export default MainDisplay;