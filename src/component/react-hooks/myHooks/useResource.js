import { useState, useEffect } from 'react'
import axios from 'axios'

export const useResource = (resource) => {
  const [resources, setResources] = useState([])

  // const fetch = async resource => {
  //   const res = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)

  //   setResources(res.data)
  // }

  useEffect(
    () => {
      // fetch(resource.methode)

      //quicly useEffect
      (async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/${resource.methode}`)

        setResources(res.data)
      })()
    }
    ,
    [resource.methode]
  )

  return resources
}
