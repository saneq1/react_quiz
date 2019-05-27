import React, {Component} from 'react';
import classes from './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component{
  state = {
    activeQuestion:0,
    answerState:null,
    quiz:[
      {
        rightAnsweId:2,
        question:'Какого цвета небо',
        id:1,
        answers:[
        {text: 'черный', id:1},
        {text: 'синий', id:2},
        {text: 'красный', id:3},
        {text: 'зеленый', id:4}
      ]
    },
    {
      rightAnsweId:3,
      question:'В каком году основали Санкт-Петербург',
      id:2,
      answers:[
      {text: '1700', id:1},
      {text: '1705', id:2},
      {text: '1703', id:3},
      {text: '1803', id:4}
    ]
  }
     ]
  }

  onAnswerClickHandler = (anserId) => {

    const question = this.state.quiz[this.state.activeQuestion]

     if(question.rightAnsweId ===anserId){

      this.setState({
        answerState:{[anserId]: 'success'}
      })

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          console.log('finish');
        }else{
          this.setState({activeQuestion:this.state.activeQuestion +1})
        }
        window.clearTimeout(timeout)
      },1000 )

      
     } else{
      this.setState({
        answerState:{[anserId]: 'error'}
      })
     }

    
  }

  isQuizFinished(){
    return this.state.activeQuestion+1===this.state.quiz.length
  }

  render(){
    return(
      <div className='Quiz'>
         
          <div className='QuizWrapper'>
             <h1>
            Ответься на все вопросы
          </h1>
            <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick = {this.onAnswerClickHandler}
            quizLength = {this.state.quiz.length}
            answerNumber = {this.state.activeQuestion + 1}
             state={this.state.answerState}
            />
          </div>
      </div>
    )
  }
}

export default Quiz