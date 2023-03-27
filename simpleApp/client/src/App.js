import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [listOfUsers, setListOfUsers] = useState()
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [username, setUsername] = useState();

  useEffect(() => {
    axios.get('http://localhost:3001/getUsers')
      .then((response) => {
        setListOfUsers(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const createUser = () => {
    axios.post('http://localhost:3001/createUser', {
      name,
      age,
      username
    }).then((res) => {
      setListOfUsers((data) =>
        [...data, {
          name,
          age,
          username
        }]
      );
      alert('User created successfully')
    })
  }
  return (
    <div className="App" >
      <div className='usersDisplay'>
        {
          listOfUsers?.map((user, index) => {
            return (
              <div>
                <h1>Name: {user.name}</h1>
                <p>Age: {user.age}</p>
                <p>Username: {user.userName}</p>
              </div>
            )
          })
        }
      </div>
      <div>
        <input type='text' placeholder='Name...' onChange={(event) => { setName(event.target.value) }}></input>
        <input type='text' placeholder='Age...' onChange={(event) => { setAge(event.target.value) }}></input>
        <input type='text' placeholder='Username...' onChange={(event) => { setUsername(event.target.value) }}></input>
        <button onClick={createUser}>Create User</button>
      </div>
    </div>
  );
}

export default App;