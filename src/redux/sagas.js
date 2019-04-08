import { takeEvery, put, delay, select } from 'redux-saga/effects';
import { ADD_TASK, DELETE_TASK, COMPLETE_TASK, APP_MOUNT, SET_TASKS } from './AppReducer';

function* getFromStorage() {
  const item = localStorage.getItem('to-do-list')
  const tasks = JSON.parse(item)

  if (tasks && tasks.length) {
    yield put({ type: SET_TASKS, payload: tasks })
  }
}

function* saveToStorage() {
  yield delay(500)

  const tasks = yield select(state => state.tasks)

  localStorage.setItem('to-do-list', JSON.stringify(tasks))
}

export function* mainSaga() {
  yield takeEvery(APP_MOUNT, getFromStorage)

  yield takeEvery([
    ADD_TASK,
    DELETE_TASK,
    COMPLETE_TASK
  ], saveToStorage)
}