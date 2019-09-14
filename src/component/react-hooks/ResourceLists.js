import React, { useState, useEffect } from 'react'
import axios from 'axios'


const ResourceLists = ({ resource }) => {

  const [resources, setResources] = useState([])

  const fetch = async resource => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/${resource.methode}`)

    setResources(res.data)
  }

  useEffect(
    () => {
      fetch(resource)
    }
    ,
    [resource.methode]
  )

  return (
    <div>
      {resources.length}
    </div>
  )
}


export default ResourceLists
