import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Remove_Todo, Toggle_Todo } from '../redux/action'

const Display = () => {

    let selector = useSelector((Store) => Store.todo)
    let dispatch= useDispatch()
    return (
        <>
            {
                selector.map((todo) => {
                    return (
                        <>
                            <h1>{todo.task}</h1>
                            <button onClick={()=>dispatch(Remove_Todo(todo.id))}>remove</button>
                            <button onClick={()=>dispatch(Toggle_Todo(todo.id))}>{todo.iscompleted?'completed':'padding'}</button>
                        </>
                    )
                })
            }
        </>
    )
}

export default Display