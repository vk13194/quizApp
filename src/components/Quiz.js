import React, { Component } from 'react'
import quizService from '../quizService'
import QuestionBox from './QuestionBox'
import Result from './Result'
 class Quiz extends Component {
     state={
         questionBank:[],
         score:0,
         responses:0
     }
     getQuestion =() =>{
         quizService().then(question=>{
             this.setState({
                 questionBank:question
             })
         })
     }
     componentDidMount(){
         this.getQuestion();
     }
     computeAnswer=(answer, correctAnswer)=>{
         if(answer===correctAnswer){
            this.setState({
                score:this.state.score+1
            })
         }
         this.setState({
             responses:this.state.responses < 5 ? this.state.responses+1 :5
         })
     }
     playAgain= () =>{
         this.getQuestion();
         this.setState({
             score:0,
             responses:0
         })
     }
    render() {
        return (
            <div>
                <ul>
                    {this.state.responses <5 && this.state.questionBank.map(
                        ({question, answers,correct,questionId})=>
                        <QuestionBox question={question} 
                        options={answers} 
                         key={questionId}
                         selected={answer =>this.computeAnswer(answer, correct)}
                          />
                        )}
                </ul>
                {this.state.responses===5 ? (<Result score={this.state.score} playAgain={this.playAgain}/>):null}
            </div>
        )
    }
}

export default Quiz
