import React, { useState, Fragment } from 'react'
import ResourceLists from "./ResourceLists"


const Hooks = () => {
  const [resource, setresource] = useState({methode:'posts'})
  return (
    <Fragment>
      <div>
        <button onClick={() => setresource({methode:'posts'})}>posts</button>
        <button onClick={() => setresource({methode:'todos'})}>todos</button>
      </div>
      <ResourceLists resource = {resource} />
    </Fragment>
  )
}


export default Hooks
