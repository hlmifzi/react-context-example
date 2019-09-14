import React from 'react'
import { useResource } from "./myHooks/useResource";


const ResourceLists = ({ resource }) => {

  const resources = useResource(resource)

  return (
    <ul>
      {resources.length}
      {resources.map((v, i) => <li key={i}> {i + 1+")"} {v.title}</li>)}
    </ul>
  )
}


export default ResourceLists
