import React, { useState, useEffect } from 'react'
import axios from 'axios'


const ResourceLists = ({resource}) => {
  // state = { resource: [] }

  const [resources, setResources] = useState([])

  const fetch = async() => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
    // this.setState({ resource: res.data })

    setResources(res.data)
  }

  // async componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.resource !== this.props.resource) {
  //     const res = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
  //     this.setState({ resource: res.data })
  //   }
  // }

  useEffect(() => {
    fetch(resource)
  }, [])

    return (
      <div>
        {resources.length}
      </div>
    )
}


export default ResourceLists
