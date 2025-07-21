import { useCart } from "../context/CartContext";

function CartItem({item}){

    const {removeFromCart, updateQuantity} = useCart();

    const deleteFromCart = () =>{
        removeFromCart(item.id);
    }

    const handleUpdateQuantity = (newQuantity ) => {
        if(newQuantity<=0){
            removeFromCart(item.id);
        }
        else{
            updateQuantity(item.id, newQuantity)
        }

    }

    return(
        <div className="mb-6">
            <div className="border border-gray-300 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-4 gap-6 items-start">
                    
                    {/* Product Details Column */}
                    <div>
                        <h1 className="text-gray-500 text-xs font-medium mb-4 uppercase tracking-wide">PRODUCT DETAILS</h1>
                        <div className="flex items-start gap-4">
                            <img
                                className="w-20 h-20 rounded-lg object-cover" 
                                src= {item.image}
                                alt="" 
                            />
                            <div className="flex flex-col gap-2">
                                <p className="font-semibold text-gray-900">{item.name}</p>
                                <p className="text-sm text-gray-600">{item.category}</p>
                                <button 
                                onClick={deleteFromCart}
                                className="bg-red-500 hover:text-gray-700 hover:scale-105  text-sm flex items-center gap-1 px-3 py-1 rounded-xl mt-2 text-white">
                                    🗑️ Remove
                                </button>
                            </div>
                        </div>
                    </div>

            {/* Update the quantity buttons: */}
            <div>
                     <h3 className="text-gray-500 text-xs font-medium ml-14 mb-3 uppercase tracking-wide">QUANTITY</h3>
          
            <div className="flex items-center justify-center gap-3 mt-8">
             
                <button 
                    onClick={()=> handleUpdateQuantity(item.quantity -1)}
                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-700 font-bold"
                >
                    -
                </button>
                <span className="font-semibold text-gray-900 min-w-8 text-center">
                    {item.quantity}
                </span>
                <button 
                    
                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-700 font-bold"
                >
                    +
                </button>
            </div>
  </div>
                    
                    {/* Price Column */}
                    <div className="text-center">
                        <h1 className="text-gray-500 text-xs font-medium mb-4 uppercase tracking-wide">PRICE</h1>
                        <p className="font-semibold text-gray-900 text-lg mt-8">{item.price}</p>
                    </div>

                    {/* Total Column */}
                    <div className="text-center">
                        <h1 className="text-gray-500 text-xs font-medium mb-4 uppercase tracking-wide">TOTAL</h1>
                        <p className="font-bold text-green-600 text-xl mt-8">  ${(item.price * item.quantity).toFixed(2)}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CartItem;
