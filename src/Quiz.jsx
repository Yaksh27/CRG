import { useState } from "react";
import questions from './data/questions.json';

function Quiz(){
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswer, setUserAnswer] = useState(Array(11).fill(null));
    

    function handleAnswerSelect(selectedIndex) {
    const newAnswers = [...userAnswer];
    newAnswers[currentQuestion] = selectedIndex;
    setUserAnswer(newAnswers);
}
    
    function handleNext(){
      if(currentQuestion < 10){
        setCurrentQuestion(currentQuestion + 1);
      }
     
      }
    
    function handlePrev(){
          if(currentQuestion > 0){
        setCurrentQuestion(currentQuestion - 1);
      }

    }


return(
    <div>
       <h1 className="text-3xl text-center mt-10 font-medium ">{questions[currentQuestion].questions}</h1>
            <div className="max-w-xl mx-auto mt-10">
            {questions[currentQuestion].answerOptions.map((option, index) => (
                <button
                    
                   className={`w-full px-6 py-4 mb-3 text-left rounded-lg border-2 transition-colors ${
    userAnswer[currentQuestion] === index 
        ? 'bg-blue-500 text-white border-blue-500' 
        : 'bg-gray-50 border-gray-200 hover:border-blue-400 hover:bg-blue-50'
}`}
                    key={index}
                   onClick={() => handleAnswerSelect(index)}>
                    {option.text}
                    
                </button>
                
            ))}
        </div>
        <button
        onClick={handlePrev}
        className=" text-center ml-14 px-6 py-2 mb-3 bg-gray-50  rounded-lg border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-colors">
            Previous
        </button>
        <button
        onClick={handleNext}
        className=" text-center absolute right-30 ml-10 px-6 py-2 mb-3 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-colors">
            Next 
        </button>
        
        
    </div>
)

}
export default Quiz;