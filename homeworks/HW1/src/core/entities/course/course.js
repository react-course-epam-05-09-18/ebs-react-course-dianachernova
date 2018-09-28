import {createDuration} from '../duration'

export const createCourse = (intialParams = null) => ({
  id: Math.random().toString(16).slice(2),
  title: '',
  duration: createDuration(),
  description: '',
  ...intialParams
});
