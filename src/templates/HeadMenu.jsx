import React, {useState,useContext} from 'react'
import {countContext,authContext} from '../App'

/* カウンターのstate初期値 */
const initialCountState = {count:0}

const HeadMenu = () => {
  const [countData,setCountData] = useState(initialCountState);
  const [count,setCount] = useContext(countContext)
  
  const [auth,setAuth] = useContext(authContext)

  return (
    <div>
      <h1>SignedIn:{auth.isSignedIn}</h1>
      <h1>username:{auth.username}</h1>

      <h1>useState_value {countData.count} times</h1>
      <h1>useContext_value {count} times</h1>
      <button
        onClick = { () => setCountData({...countData,'count':countData.count+1})}
      >
        count up local
      </button>
      <button
        onClick = { () => setCount(count+1)}
      >
        count global
      </button>
    </div>
  )
}

export default HeadMenu