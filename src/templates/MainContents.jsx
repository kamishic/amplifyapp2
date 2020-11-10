import React, {useContext} from 'react'
import {countContext} from '../App'

const MainContents = () => {
  const [count,setCount] = useContext(countContext)
  return (
    <>
      <h1>MainContents</h1>
      <p>count global:{count}</p>
      <button
        onClick = {()=> setCount(count+2)}
      >
        MainContents Button
      </button>
    </>
  )
}

export default MainContents