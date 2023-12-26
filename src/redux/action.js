import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actiontype";

export const Add_Todo=(data)=>{
    console.log(data);
    return{
        type:ADD_TODO,
        payload:data,
    }
}
export const Toggle_Todo=(data)=>{
    return{
        type:TOGGLE_TODO,
        payload:data,
    }
}
export const Remove_Todo=(id)=>{
    return{
        type:REMOVE_TODO,
        payload:id,
    }
}