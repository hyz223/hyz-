import { ADD_PERSON } from '../constants'

const initState = [
  {id: '1', name: 'yh01', age: 10},
  {id: '2', name: 'yh02', age: 11},
  {id: '3', name: 'yh03', age: 12}
];

export default function personReducer(perState = initState, action) {

  const { type, data } = action;

  switch (type) {
    case ADD_PERSON:
      return [data, ...perState];
    default:
      return perState;
  }

}