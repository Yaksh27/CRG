import { useState } from "react";


function Practice(){

    const [count , setCount ] = useState(0);


    

    return(

        <div>

        <h1 
        className={count>0 ? "text-green-400" : "text-red-500"}>Counter : {count}</h1>
        <div>
            <button 
            onClick={()=> setCount(count+1)}
            className="border border-gray-800 px-5 py-2 p-4 rounded-xl font-normal bg-gray-300">
                Increment 
            </button>
             
             
             <button 
             onClick={()=> setCount(count-1)}
             className="border border-gray-800 px-5 py-2 p-4 rounded-xl font-normal bg-gray-300">
                Decrement  
            </button>

            
        </div>
        </div>
    )

}


export default Practice;