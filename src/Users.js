import React from 'react'

import User from './User'
import { useUserContext } from './context/useUserContext'


function Users() {
    const {users} =  useUserContext()
  return (
    <section className='users'>
      {users.map(user =><User key={user.id} user={user} />)}
    </section>
  )
}

export default Users
