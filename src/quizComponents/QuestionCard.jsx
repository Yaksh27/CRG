const QuestionCard = ({question, onAnswerClick = () => {}}) => {      
    return(         
        <div>            
            <h2>{question.questions}</h2>  
            <div className="grid grid-cols-2 gap-4 p-4">
                {question.answerOptions.map((option, index) => (
                    <button 
                        key={index}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={() => onAnswerClick(option.isCorrect)}
                    >
                        {option.text}
                    </button>
                ))}
            </div>     
        </div>     
    )   
}

export default QuestionCard;