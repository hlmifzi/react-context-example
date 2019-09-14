import React from 'react'
import { useResource } from "./myHooks/useResource";


const UserLists = () => {

  const users = useResource({methode:'users'})

  return (
    <ul>
      {users.length}
      {users.map((v, i) => <li key={i}> {i + 1+")"} {v.name}</li>)}
    </ul>
  )
}


export default UserLists
