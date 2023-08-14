import React,{useContext} from 'react'
import { AppContext } from '../AppContext'

function Two() {
    const {data}= useContext(AppContext)
  return (
    <div  style={{backgroundColor:'red'}}>
        <h1>layrer two {data}</h1>
    </div>
  )
}

export default Two
