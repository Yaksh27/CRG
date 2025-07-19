import { useEffect, useState } from "react";
import {GetAnimalDetails} from './animalapi.js';

function Animal(){

    const [input, setInput] = useState("");
    const [animal, setAnimal] = useState([]);

   


    const handleChange = (e) => {
        const value = e.target.value
        setInput(value);
        

        if(value.trim() == ''){
            setAnimal([]);
            return;
        }

    }
   

   const hanldeSearch = async(e) =>{
        e.preventDefault();
            try {
            const animalInfo = await GetAnimalDetails(input)
            setAnimal(animalInfo);
            console.log(animalInfo);
            } catch (error) {
                throw error;
                
            }
        }
      
   
    
    
    

    return(
        <div>
            <div>
                <form 
                onSubmit={hanldeSearch}>
                <input type="text"
                placeholder="Enter an animal name"
                value={input}
                className="px-7 py-3 border border-gray-500 rounded-lg bg-amber-200 mt-20 ml-55"
                onChange={handleChange}/>
                <button className="px-5 py-3 border border-gray-500 rounded-lg bg-amber-200 mt-20 ml-55">
                    Search 
                </button>
                </form>
              
            </div>
        {animal.length > 0 && (
  <div>
    <ol>
      {animal.map((info, index) => (
        <li key={index}>
          name: {info.name}
        </li>
      ))}
    </ol>
  </div>
)}


            


        </div>
    )

}

export default Animal;