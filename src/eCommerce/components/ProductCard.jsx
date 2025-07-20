import { ShoppingCart, Star } from 'lucide-react';

function ProductCard({ product }) {
    return(
        <div className="border-2 border-gray-300 h-[26rem] w-80 rounded-2xl bg-white shadow-lg hover:shadow-xl hover:scale-101 transition-shadow">
            {/* Image Section */}
            <div className="relative">
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-48 object-cover rounded-t-2xl"
                />
                <span className={`absolute top-2 left-2 text-white rounded-full px-3 ${
                    product.inStock ? 'bg-green-700' : 'bg-red-700'
                }`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
            </div>

            {/* Content Section */}
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                
                {/* Price and Rating */}
                <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-green-600">${product.price}</span>
                    <span className="text-yellow-500 flex items-center justify-center gap-2"><Star/> {product.rating}</span>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                    Add to Cart 
                    <ShoppingCart size={20} />
                </button>
            </div>
        </div>
    )
}

export default ProductCard;
