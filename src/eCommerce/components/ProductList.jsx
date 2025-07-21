import { useState } from 'react';
import { products } from '../data/db';
import ProductCard from './ProductCard';


function ProductList() {

    const [selectedCategory, showSelectedCategory] = useState('All');

    const filteredProducts = selectedCategory === 'All' ?
    products : 
    products.filter(items=>items.category.toLowerCase() === selectedCategory.toLowerCase());

    return(
        <div>
            {/* top buttons */}
            <div className=' flex gap-5 justify-start items-start'>
                <button 
                    onClick={() => showSelectedCategory('All')}
                    className={`px-4 py-2 rounded-full mt-10 border border-gray-400 ${
                        selectedCategory === 'All' 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-white hover:bg-gray-300'
                    }`}>
                
                    All Products
                </button>

                   <button 
                    onClick={() => showSelectedCategory('Electronics')}
                    className={`px-4 py-2 rounded-full mt-10 border border-gray-400 ${
                        selectedCategory === 'Electronics' 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-white hover:bg-gray-300'
                    }`}
                >
                    Electronics 
                </button>

                <button 
                    onClick={() => showSelectedCategory('Home')}
                    className={`px-4 py-2 rounded-full mt-10 border border-gray-400 ${
                        selectedCategory === 'Home' 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-white hover:bg-gray-300'
                    }`}
                >
                    Home 
                </button>

                <button 
                    onClick={() => showSelectedCategory('Accessories')}
                    className={`px-4 py-2 rounded-full mt-10 border border-gray-400 ${
                        selectedCategory === 'Accessories' 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-white hover:bg-gray-300'
                    }`}
                >
                    Accessories 
                </button>

            </div>
         
         <h1 className="text-3xl font-medium  mb-10 mt-10">
                Checkout Our Products :
            </h1>
        <div className='grid grid-cols-3 gap-y-10 '>
            {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>

        </div>
    )
}

export default ProductList;
