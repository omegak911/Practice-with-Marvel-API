import React from 'react';

const Login = ({login}) => {
 
  let keyHandler = () => {
    let name = document.getElementById('name').value;
    let password = document.getElementById('password').value;

    let params = {
      params: {
        name: name,
        password: password
      }
    }
    login(params);

    document.getElementById('name').value = '';
    document.getElementById('password').value = '';
  }

  return (
    <div>
      Hello from Login
      <form>
        name:.......<input id="name" type="text"/>
        <br/>
        password: <input id="password" type="text"/>
        <button type="button" onClick={keyHandler}>Submit</button>
      </form>
    </div>
  )
}


export default Login;