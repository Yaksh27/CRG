import CartItem from "./CartItem";
import { useCart } from "../context/CartContext";
import { SkipBack, StepBack } from "lucide-react";
import { useNavigate } from "react-router-dom";



function Cart(){
    const { cart, getCartTotal, getCartItemCount, clearCart } = useCart();
    const navigate = useNavigate();
    
    
    return(
        <div className="max-w-4xl mx-auto p-6">
            {/* Cart Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Shopping Cart ({getCartItemCount()} items)</h2>
                {cart.length > 0 && (
                    <button onClick={clearCart} className="text-red-500">
                        Clear Cart
                    </button>
                )}
            
             

            </div>

            {/* Cart Content */}
            {cart.length === 0 ? (
                <div>

              
                <div className="text-center py-12">
                    <p className="text-gray-500">Your cart is empty</p>
                </div>

                 <button 
                       onClick={()=> navigate("/")}
                       className="  flex gap-4 py-2 px-5 text-purple-400 font-bold bg-yellow-200 rounded-2xl  ">
                       <StepBack size={25}/> Continue Shopping 

                </button>
                  </div>
            ) : (
                <>
                    {/* Cart Items */}
                    <div>
                        {cart.map(item => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>

                    {/* Cart Summary */}
                    <div className="border-t pt-6 mt-6">
                       <button 
                       onClick={()=> navigate("/")}
                       className=" mb-10 flex gap-4 py-2 px-5 text-purple-400 font-bold bg-yellow-200 rounded-2xl  ">
                       <StepBack size={25}/> Continue Shopping 

                       </button>

                        <div className="flex justify-between items-center">
                            <span className="text-xl font-bold">
                                Total: ${getCartTotal().toFixed(2)}
                            </span>
                            <button className="bg-green-600 text-white px-6 py-3 rounded-lg">
                                Checkout
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}



export default Cart;