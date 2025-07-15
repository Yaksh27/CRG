const Result = ({userAnswer, question, resetQuiz = () => {}}) => {   
    
   const correctAnswer = userAnswer.filter(answer => answer === true).length;

    return(         
        <div> 
            <h2>Results</h2>
            <p>
                You answered {correctAnswer} out of {question.length} questions.
            </p>
        </div>     
    )   
}

export default Result;