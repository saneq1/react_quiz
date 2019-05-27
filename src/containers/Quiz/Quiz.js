import React, {Component} from 'react';
import classes from './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

class Quiz extends Component{
  state = {
    results:{},
    isFinish:false,
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
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]
      if (this.state.answerState[key]==='success') {
        return
      }
    }


    const question = this.state.quiz[this.state.activeQuestion]
    const results = this.state.results 

     if(question.rightAnsweId ===anserId){
        if(!results[question.id]){
          results[question.id]= 'success'
        }
      this.setState({
        answerState:{[anserId]: 'success'},
        results
      })

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({isFinish:true})
        }else{
          this.setState({activeQuestion:this.state.activeQuestion +1,
          answerState: null
          })
        }
        window.clearTimeout(timeout)
      },1000 )

      
     } else{
       results[question.id]='error'
      this.setState({
        answerState:{[anserId]: 'error'},
        results
      })
     }

    
  }

  isQuizFinished(){
    return this.state.activeQuestion+1===this.state.quiz.length
  }

  retryHandler=()=>{
    this.setState({
      activeQuestion:0,
      answerState:null,
      isFinish:false,
      results:{}
    })
  }

  render(){
    return(
      <div className='Quiz'>
         
          <div className='QuizWrapper'>
             <h1>
            Ответить на все вопросы
</h1>
            {this.state.isFinish ? 
            <FinishedQuiz
              results= {this.state.results}
              quiz={this.state.quiz}
              onRetry = {this.retryHandler}
            /> : 
          <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick = {this.onAnswerClickHandler}
            quizLength = {this.state.quiz.length}
            answerNumber = {this.state.activeQuestion + 1}
             state={this.state.answerState}
            />
          }
          
            
          </div>
      </div>
    )
  }
}

export default Quiz