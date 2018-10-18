import {getAllCourses} from '../actions';
// import {dispatch} from 'react-redux';
import {createCourse} from '../../../../core/entities';
export const getCourses = () =>async (dispatch, getState)=> {
  const courses = [
    createCourse({
      title: "React Redux",
      duration: "16h",
      description: `Adipisicing elit.
              Harum pariatur porro quam est exercitationem rem ut corrupti
              tempore! Mollitia ad similique dolore voluptas.
              Corrupti saepe placeat blanditiis aliquam totam sed?`
    }),
    createCourse({
      title: "Node.js",
      duration: "12h",
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Nemo ratione enim laudantium aspernatur, cupiditate quis
              placeat sapiente minus dolore ab necessitatibus aliquam magni
              earum neque assumenda accusantium veniam est voluptatibus`
    }),
    createCourse({
      title: "Ajax",
      duration: "6h",
      description: `Nemo ratione enim laudantium aspernatur, cupiditate quis
              placeat sapiente minus dolore ab necessitatibus aliquam magni
              earum neque assumenda accusantium veniam est`
    })
  ];

  return dispatch(getAllCourses(courses));
}
