import { useState } from "react";
import { evaluate } from "mathjs";



 
function Calculator(){

const buttons = [
        "7","8","9", "/",
        "4", "5","6", "*",
        "1", "2", "3","-",
        "0",".","=","+",
        "C"
];
 
 const [input,setInput] = useState("");

 function handleInputChange(btn){
    if(btn=="C"){
        setInput("");
    }
    else if(btn =="="){
        const result = evaluate(input);
        setInput(result);
    }
    else{
        setInput((prevValue) => prevValue + btn)

    }

 }

 
 return (
    <div>
        <h1 className="text-3xl font-medium">Calculator </h1>
        <div className="px-5 w-64 py-4 border-2 border-gray-900 rounded-2xl mt-6 bg-amber-200" >{input || 0}</div>
        <div> </div>
        <div className="border-2 border-orange-800 p-5 mt-6 rounded-3xl w-96 grid grid-cols-4">
            {buttons.map((btn,index) => 
                 <button 
                className=" border border-gray-500 rounded-xl px-4 py-3 bg-amber-100 hover:bg-amber-500"
                onClick={()=>handleInputChange(btn)}
                > {btn}</button>
                
             )}
        </div>

 
    </div>
 )

 }

 export default Calculator;