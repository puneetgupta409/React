import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styled from 'styled-components';


const FromControl = styled.div`
  margin: 0.5rem 0;

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color: ${props => (props.invalid ? 'red' : '')};;
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props => (props.invalid ? 'red' : 'black')};
  font: inherit;
  background : ${props => (props.invalid ? '#f8c3c3' : '')};
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

 & input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}
`;
const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    } else {
      setIsValid(true);
      props.onAddGoal(enteredValue);
    }

  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FromControl className={!isValid && 'invalid'}></FromControl> */}
      <FromControl invalid={!isValid}>
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FromControl >
      {/* <div className={`form-control ${!isValid ? 'invalid' : ''}`}> */}
      {/* <label style={{color: isValid ? 'black' : 'red'}}>Course Goal</label>
        <input style={{borderColor: isValid ? 'black' : 'red'}} type="text" onChange={goalInputChangeHandler} /> */}
      {/* <label >Course Goal</label> */}
      {/* <input type="text" onChange={goalInputChangeHandler} /> */}
      {/* </div> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
