import { ADD_TASK, DELETE_TASK } from '../constant/constant';
import { bake_cookie, read_cookie } from 'sfcookies';

const task = (action) => {
      return {
            taskDesc: action.taskDesc,
            status: action.status,
            id: Math.floor(Math.random() * 100)
      }
}

const removeById = (state = [], id) => {
      const task = state.filter(task => task.id !== id);
      return task;
}

const tasksReducer = (state = [], action) => {
      let tasks = null;
      state = read_cookie('tasks');
      switch (action.type) {
            case ADD_TASK:
                  tasks = [...state, task(action)]
                  bake_cookie('tasks',tasks);
                  return tasks;
            case DELETE_TASK:
                  tasks = removeById(state, action.id);
                  bake_cookie('tasks',tasks);
                  return tasks
            default:
                  return state

      }

}

export default tasksReducer