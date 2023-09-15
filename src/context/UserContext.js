import { createContext, useState} from "react";

export const UsersContext = createContext({})
const UsersProvider = ({children}) => {
    const[users,setUsers]=useState(
        [
          {id:1, username: 'anisul'},
          {id:2, username: 'rony'}
        ]
      )


      return <UsersContext.Provider value={{users, setUsers}}>
        {children}
      </UsersContext.Provider>
    }
    export default UsersProvider;