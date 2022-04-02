import { ADD_PERSON } from '../constants';

export function createAddPersonAction(obj) {
  return {
    type: ADD_PERSON,
    data: obj
  }
}