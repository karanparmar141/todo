import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actiontype";

const initialStatle={
  todo:[],
};

export const reduser = (state=initialStatle,{type,payload}) => {
  switch(type){
    case ADD_TODO :
      return{
        ...state,
        todo:[...state.todo,payload],
      }
    case REMOVE_TODO :
      return{
        ...state,
        todo:state.todo.filter((todo)=>todo.id!=payload),
      }
    case TOGGLE_TODO:
      return{
        ...state,
        todo:state.todo.map((todo)=>todo.id==payload?{...todo,iscompleted:!(todo.iscompleted)}:todo)
      }
      default:
        return state;
  }
}
