import React, {useState} from 'react'

/* カウンターのstate初期値 */
const initialCountState = {count:0,counter:1}

const HeadMenu = () => {
  const [countData,setCountData] = useState(initialCountState);


  return (
    <div>
      <h1>My Notes App {countData.count} times</h1>
      <button
        onClick = { () => setCountData({...countData,'count':countData.count+1})}
      >
        count up
      </button>
    </div>
  )
}

export default HeadMenu