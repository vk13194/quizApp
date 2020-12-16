import React from 'react'

const Result = ({score,playAgain}) => {
    return (
        <div className="container" >
        
        <div className="card">
        <div className="card-header">
            Quiz Score
        </div>
          <h6 className="card-title text-center my-5">
              your Score of quiz {score} out of 5 </h6>
           <h3 className="text-center" style={{fontSize:'50px'}}> <i class="fa fa-hand-spock-o" aria-hidden="true"></i>
</h3>   
          <button type="button" class="btn btn-outline-dark"
          onClick={playAgain}
          >PlayAgain</button> 
          </div>
        </div>
    )
}

export default Result
