import {ADD_TASK,DELETE_TASK} from '../constant/constant';


export const addTask = (taskDesc,status) =>{
      const action ={
            type:ADD_TASK,
            taskDesc,
            status
      }
        return action;
}

export const deleteTask = (id) =>{
      const action = {
            type:DELETE_TASK,
            id
      }
      return action;
      
}