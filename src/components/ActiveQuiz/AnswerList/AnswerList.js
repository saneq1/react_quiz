import React from 'react';
import classes from './AnswerList.css'
import AnswerItem from './AnsweItem/AnswerItem'

const AnswerList = props => (
  <ul className='AnswersList'>
    {props.answers.map((answer, index) => {
      return (
        <AnswerItem
        key ={index}
         answer= {answer}
         onAnswerClick={props.onAnswerClick}
         state={props.state ? props.state[answer.id] : null }
        />
      )
    })}
  </ul>
)

export default AnswerList