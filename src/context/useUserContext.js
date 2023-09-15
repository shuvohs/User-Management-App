import {useContext} from 'react'
import { UsersContext } from './UserContext'


export const useUserContext = () => {
 return useContext(UsersContext)
}
