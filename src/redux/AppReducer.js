const INPUT_CHANGE = 'INPUT_CHANGE'
const ADD_TASK = 'ADD_TASK'
const DELETE_TASK = 'DELETE_TASK'

const INITIAL_STATE = {
  tasks: [
    {
      description: 'fazer portfólio',
      date: new Date().toLocaleDateString('pt-BR'),
      time: new Date().toLocaleTimeString('pt-BR'),
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
            location: 'São Paulo'
          }
        ],
        inputValue: ''
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks.slice(0, action.payload),
          ...state.tasks.slice(action.payload + 1)
        ]
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