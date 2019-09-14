import React, { useState, Fragment } from 'react'
import HooksButton from "./HooksButton";
import ResourceLists from "./ResourceLists"
import UserLists from "./UserLists"


const Hooks = () => {
  const [resource, setresource] = useState({methode:'posts'})
  return (
    <Fragment>
      <UserLists />
      <HooksButton setresource={setresource}/>
      <ResourceLists resource = {resource} />
    </Fragment>
  )
}


export default Hooks
