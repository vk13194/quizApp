import React, {useState} from 'react'

const QuestionBox = ({question, options, selected}) => {
    const [answers,setAnswers]=useState(options)
    //const {answers} =question
    //console.log(answers)
    return (
        <div className="container my-3">
           <div className="Card">
            <h5>{question}</h5>
            {answers.map((text, index)=>
            <button type="button" class="btn btn-outline-dark" 
            onClick={()=>{
                setAnswers([text])
                selected(text)
            }}
            key={index}>{text}</button>
            )}
           </div>
           
        </div>
    )
}

export default QuestionBox
