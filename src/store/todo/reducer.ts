import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TaskInterface} from "../../types/TaskTypes";

export interface TaskState {
  taskList: TaskInterface[];
}

const initialState: TaskState = {
  taskList: [],
};

const slice = createSlice({
  name: "taskList",
  initialState,
  reducers: {
    setTaskList: (state, action: PayloadAction<TaskInterface[]>) => {
      return {
        ...state,
        taskList: action.payload,
      };
    },
    updateTaskList: (state, action: PayloadAction<TaskInterface[]>) => {
      return {...state, taskList: action.payload};
    },
    addTask: (state, action: PayloadAction<TaskInterface>) => {
      const {taskList} = state;
      return {
        ...state,
        taskList: [...taskList, action.payload],
      };
    },
    updateTask: (state, action: PayloadAction<TaskInterface>) => {
      const {id, task} = action.payload;
      const editList = [...state.taskList];
      const findIndex = editList.findIndex(({id: taskId}) => taskId === id);
      editList.splice(findIndex, 1, {id, task});
      state.taskList = editList;
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      const {taskList} = state;
      state.taskList = taskList.filter(item => item.id !== action.payload);
    },
  },
});

export const {updateTaskList, addTask, setTaskList, updateTask, deleteTask} =
  slice.actions;
export default slice;
