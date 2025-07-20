import { useState } from "react";
import Favorites from "./Favorites";

function Recipe(){
    const [meals,setMeals] = useState([]);
    const [searchCountry, setSearchCountry] = useState("")
    const [searchCategory, setSearchCategory] = useState("")
    const [searchMeal, setSearchMeal] = useState("")
    const [favorites, setFavorites] = useState([]);
    
    const handleCountryChange = (e) => {
        const value = e.target.value; // Remove e.preventDefault() from onChange
        setSearchCountry(value);
    }
    const handleCategoryChange = (e) => {
        const value = e.target.value; // Remove e.preventDefault() from onChange
        setSearchCategory(value);
    }
    const handleMealChange = (e) => {
        const value = e.target.value; // Remove e.preventDefault() from onChange
        setSearchMeal(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (searchCountry) {
            getCountry(e);
        } else if (searchCategory) {
            getCategory(e);
        } else if (searchMeal) {
            getMeal(e);
        } else {
            alert("Please enter a search term");
        }
    }

  const handleAddToFavorites = (meal) => {
        // Check if meal is already in favorites
        const isAlreadyFavorite = favorites.some(fav => 
            (fav.idMeal && fav.idMeal === meal.idMeal) || 
            (fav.idCategory && fav.idCategory === meal.idCategory)
        );
        
        if (!isAlreadyFavorite) {
            setFavorites(prev => [...prev, meal]);
            alert(`${meal.strMeal || meal.strCategory} added to favorites!`);
        } else {
            alert("Already in favorites!");
        }
    };

     const handleRemoveFromFavorites = (mealToRemove) => {
        setFavorites(prev => prev.filter(meal => 
            (meal.idMeal !== mealToRemove.idMeal) && 
            (meal.idCategory !== mealToRemove.idCategory)
        ));
    };

    const getCountry = async(e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${searchCountry}`)
            const data = await response.json()
            setMeals(data.meals);
            console.log(data.meals);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const getCategory = async(e) => {
        e.preventDefault();
        
        try {
            if(searchCategory.trim() === "") {
                setMeals([]);
                return;
            }
            
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
            const data = await response.json();
            
            const matches = data.categories.filter(category => 
                category.strCategory.toLowerCase().startsWith(searchCategory.toLowerCase())
            );
            
            setMeals(matches);
            console.log('Filtered categories:', matches);
            
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const getMeal = async(e) => {
        e.preventDefault();
        // Add your meal search logic here
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`)
            const data = await response.json()
            setMeals(data.meals);
            console.log(data.meals);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="flex gap-4 mt-10">
                    <div className="mb-6">
                        <label className="block font-medium ml-3 text-xl mb-2">Country:</label>
                        <input 
                            value={searchCountry}
                            type="text" 
                            placeholder="Enter Country"
                            className="border border-gray-800 px-8 py-3 rounded-lg bg-white"
                            onChange={handleCountryChange}
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block font-medium ml-3 text-xl mb-2">Category:</label>
                        <input 
                            value={searchCategory}
                            type="text" 
                            placeholder="Enter Category"
                            className="border border-gray-800 px-8 py-3 rounded-lg bg-white"
                            onChange={handleCategoryChange}
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block font-medium ml-3 text-xl mb-2">Meal Name:</label>
                        <input 
                            value={searchMeal}
                            type="text" 
                            placeholder="Enter Meal Name"
                            className="border border-gray-800 px-8 py-3 rounded-lg bg-white"
                            onChange={handleMealChange}
                        />
                    </div>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Search
                </button>
            </form>
        
           {/* Display results if meals exist */}
{meals && meals.length > 0 ? (
    <div className="grid grid-cols-3 gap-10">  {/* ✅ Single grid container */}
        {meals.map((meal, index) => (
            <div key={index} className="bg-amber-100 border w-73 mt-20 h-[27rem] rounded-xl hover:bg-amber-200">
                <div className="flex justify-between items-center mt-4 mb-4">
                    <h1 className="font-medium ml-3 text-xl">{meal.strMeal || meal.strCategory}</h1>
                   <button 
    onClick={() => handleAddToFavorites(meal)}
    className="text-2xl mr-5 bg-black hover:bg-gray-600 p-2 rounded"
>
    ❤️
</button>
                </div>
                <img 
                    src={meal.strMealThumb || meal.strCategoryThumb} 
                    alt={meal.strMeal || meal.strCategory}
                    className="w-50 rounded-3xl h-50 ml-10 mt-1" 
                />
                <div className="flex justify-between items-center">
                    <p className="ml-4 mt-4">
                        Category: {meal.strCategory}
                    </p>
                    <p className="mr-6 mt-4">
                        Country: {meal.strArea}
                    </p>
                </div>
                <p className="ml-4 mt-4">
                    ID: {meal.idMeal || meal.idCategory}
                </p>
            </div>
        ))}
    </div>
) : (
                    <div>Please search a query.</div>
            )}
             <Favorites 
                    favorites={favorites} 
                    onRemoveFromFavorites={handleRemoveFromFavorites} 
                />
        </div>
    )
}

export default Recipe;
