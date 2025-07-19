import { useState } from "react";

function Recipe(){
    const [meals,setMeals] = useState([]);
    const [searchCountry, setSearchCountry] = useState("")
    const [searchCategory, setSearchCategory] = useState("")
    const [searchMeal, setSearchMeal] = useState("")
    
    const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setSearchCountry(value);
}
    
    const handleSubmit = (e) => {
    e.preventDefault();
    
    if (searchCountry) {
        getCountry(e);  // Call country search function
    } else if (searchCategory) {
        getCategory(e); // Call category search function  
    } else if (searchMeal) {
        getMeal(e);     // Call meal search function
    } else {
        // Handle case where no search term is entered
        alert("Please enter a search term");
    }
}



    const getCountry = async(e)=>{
        e.preventDefault();
        
        

        try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${searchCountry}`)
        const data = await response.json()
        setMeals(data);
        console.log(data);
            
        } catch (error) {
            throw error;
        }
        
    }


    return(
        <div>
          <form action=""
          onSubmit={handleSubmit} >
    <div className="flex gap-4 mt-10">
        <div className="mb-6">
            <label className="block font-medium ml-3 text-xl mb-2">Country:</label>
            <input 
                value={searchCountry}
                type="text" 
                placeholder="Enter Country"
                className="border border-gray-800 px-8 py-3 rounded-lg bg-white"
                onChange={handleChange}
                
            />
        </div>

        <div className="mb-6">
            <label className="block font-medium ml-3 text-xl mb-2">Category:</label>
            <input 
                type="text" 
                placeholder="Enter Category"
                className="border border-gray-800 px-8 py-3 rounded-lg bg-white"
            />
        </div>

        <div className="mb-6">
            <label className="block font-medium ml-3 text-xl mb-2">Meal Name:</label>
            <input 
                type="text" 
                placeholder="Enter Meal Name"
                className="border border-gray-800 px-8 py-3 rounded-lg bg-white"
            />
        </div>
    </div>
    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Search
    </button>
</form>


            <div className=" bg-amber-100 border w-73 mt-20 h-[27rem] rounded-xl hover:bg-amber-200">
                <div className="flex justify-between items-center mt-4 mb-4">
                    <h1 className="font-medium ml-3 text-xl">MEAL NAME</h1>
                    <h1 className=" text-2xl mr-5 bg-black hover:bg-gray-600">❤️</h1>
                </div>
              
                <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                className="w-50 rounded-3xl h-50 ml-10 mt-1" />
                <div className="flex justify-between items-center">
                     <p className="ml-4 mt-4 ">
                Category
                </p>
                   <p className="mr-6 mt-4 ">
               Country
                </p>
                </div>
               
                   <p className="ml-4 mt-4 ">
                ID : 
                </p>
            </div>
        </div>
    )
}

export default Recipe;
