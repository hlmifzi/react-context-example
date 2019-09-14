import React, { Fragment } from 'react'


const Hooks = ({setresource}) => {
  return (
    <Fragment>
      <div>
        <button onClick={() => setresource({methode:'posts'})}>posts</button>
        <button onClick={() => setresource({methode:'todos'})}>todos</button>
      </div>
    </Fragment>
  )
}


export default Hooks
