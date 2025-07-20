import { useState } from "react";

function Favorites({ favorites, onRemoveFromFavorites }) {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">My Favorite Meals</h1>
            
            {favorites && favorites.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {favorites.map((meal, index) => (
                        <div key={index} className="bg-amber-100 border rounded-xl p-4">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="font-medium text-xl">
                                    {meal.strMeal || meal.strCategory}
                                </h2>
                                <button 
                                    onClick={() => onRemoveFromFavorites(meal)}
                                    className="text-xl bg-red-500 hover:bg-red-600 text-white p-2 rounded"
                                >
                                    🗑️
                                </button>
                            </div>
                            
                            <img 
                                src={meal.strMealThumb || meal.strCategoryThumb}
                                alt={meal.strMeal || meal.strCategory}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            
                            <div className="flex justify-between">
                                <p>Category: {meal.strCategory}</p>
                                <p>Country: {meal.strArea}</p>
                            </div>
                            
                            <p className="mt-2">
                                ID: {meal.idMeal || meal.idCategory}
                            </p>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <p className="text-xl text-gray-600">No favorites yet!</p>
                    <p className="text-gray-500">Start adding meals to your favorites.</p>
                </div>
            )}
        </div>
    );
}

export default Favorites;
