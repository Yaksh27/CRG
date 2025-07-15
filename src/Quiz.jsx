import { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import Result from "./components/Results";
import questions from "./constants/questions.json"

function Quiz(){
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswer, setUserAnswer] = useState([]);

    const handleNext = (isCorrect) =>{
        setCurrentQuestion(currentQuestion+1);
        setUserAnswer([...userAnswer,isCorrect])
    }
    const resetQuiz = () =>{
        setCurrentQuestion(0);
        setUserAnswer([]);
        
    }

return(
   <div>
        <h2>General Knowledge Quiz</h2>
        {/* Questions */}
        {currentQuestion < questions.length ? (
            <QuestionCard 
                question={questions[currentQuestion]} 
                onAnswerClick={handleNext}
            />
        ) : (
            <div>
                <h3>Quiz Complete!</h3>
                <p>Thanks for playing!</p>
            </div>
        )}

        {/* Results */}
        {currentQuestion === questions.length && (

       
        <Result
        userAnswer={userAnswer}
       question={questions}
        resetQuiz= {resetQuiz}/>
         )}
    </div>
    )
}

export default Quiz;