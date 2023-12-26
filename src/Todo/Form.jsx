import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Add_Todo } from '../redux/action'

const Form = () => {
  let [text, setText] = useState('')
  let dispatch = useDispatch()

  let HandelTask = () => {
    dispatch(Add_Todo({ task: text ,id: Date.now(),iscompleted:false}))
  }


  return (
    <>
      <input type="text" placeholder='enter the today task' onChange={(e) => setText(e.target.value)} />
      <button onClick={HandelTask}>add task</button>
    </>
  )
}

export default Form