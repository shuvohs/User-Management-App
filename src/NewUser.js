import React,{useState} from 'react'
import { useUserContext } from './context/useUserContext';

function NewUser({handleAddNewUser}) {
    const {setUsers} =  useUserContext()
    const [username, setUserName] = useState("");
    const handleChange = (e) => {
        setUserName (e.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser =  {id: new Date().getTime().toString(), username: username};
        setUsers(prevUsers => [...prevUsers, newUser])
        setUserName('')


    }

    
  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' name="username" value={username} onChange={handleChange} required/>
        <button type='submit'>Add User</button>
      </form>
    </div>
  )
  }


export default NewUser
