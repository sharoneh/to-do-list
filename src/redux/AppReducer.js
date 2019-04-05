const INPUT_CHANGE = 'INPUT_CHANGE'
const ADD_TASK = 'ADD_TASK'
const DELETE_TASK = 'DELETE_TASK'
const COMPLETE_TASK = 'COMPLETE_TASK'

const INITIAL_STATE = {
  tasks: [
    {
      description: 'fazer portfólio',
      date: new Date().toLocaleDateString('pt-BR'),
      time: new Date().toLocaleTimeString('pt-BR'),
      complete: false
    }
  ],
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
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            description: state.inputValue,
            date: new Date().toLocaleDateString('pt-BR'),
            time: new Date().toLocaleTimeString('pt-BR'),
            complete: false
          }
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
    default:
      return state
  }
}

export const onInputChange = e => {
  const text = e.target.value
  
  return {
    type: INPUT_CHANGE,
    payload: text
  }
}

export const addTask = () => {
  return {
    type: ADD_TASK
  }
}

export const deleteTask = index => {
  return {
    type: DELETE_TASK,
    payload: index
  }
}

export const completeTask = index => {
  return {
    type: COMPLETE_TASK,
    payload: index
  }
}