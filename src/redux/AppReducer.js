export const INPUT_CHANGE = 'INPUT_CHANGE'
export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const COMPLETE_TASK = 'COMPLETE_TASK'
export const APP_MOUNT = 'APP_MOUNT'
export const SET_TASKS = 'SET_TASKS'

const INITIAL_STATE = {
  tasks: [],
  inputValue: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        inputValue: action.payload
      }
    case ADD_TASK:
      if (!state.inputValue) return { ...state }
      return {
        ...state,
        tasks: [
          {
            description: state.inputValue,
            date: new Date().toLocaleDateString('pt-BR'),
            time: new Date().toLocaleTimeString('pt-BR'),
            complete: false
          },
          ...state.tasks
        ],
        inputValue: ''
      }
    case DELETE_TASK:
      let index = action.payload
    
      return {
        ...state,
        tasks: [
          ...state.tasks.slice(0, index),
          ...state.tasks.slice(index + 1)
        ]
      }
    case COMPLETE_TASK:
      index = action.payload
      let tasks = []

      if (!state.tasks[index].complete) {
        tasks = [
          ...state.tasks.slice(0, index),
          ...state.tasks.slice(index + 1),
          {
            ...state.tasks[index],
            complete: !state.tasks[index].complete
          }
        ]
      } else {
          tasks = [
            ...state.tasks.slice(0, index),
            {
              ...state.tasks[index],
              complete: !state.tasks[index].complete
            },
            ...state.tasks.slice(index + 1)
          ]
      }

      return {
        ...state,
        tasks
      }
    case SET_TASKS:
      return {
        ...state,
        tasks: action.payload
      }
    default:
      return state
  }
}