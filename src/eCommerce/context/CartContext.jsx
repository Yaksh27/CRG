import { createContext, useContext, useEffect, useReducer } from "react";

//step 1 create context 

const CartContext = createContext();


//step 2 create the reducer 

const cartReducer = (state,action) =>{

    switch(action.type){
    case 'ADD_ITEM':
        //check if exists first
        const existingItem = state.find(item=>item.id ===action.payload.id);

        if(existingItem){
            return state.map(item=> item.id === action.payload.id ? {...item,quantity : item.quantity + 1 } : item );
        }

        return [...state, {...action.payload, quantity : 1 }];

    case 'REMOVE_ITEM' : 
    
        return state.filter(item=>item.id !== action.payload);

    case 'UPDATE_QUANTITY' :

        return state.map(item=> item.id === action.payload.id ? {...item, quantity : action.payload.quantity }
        : item
    ) 

    case 'CLEAR_CART' : 

        return [];

    default:
    return state;

    }

};

// step 3 - create provider that wraps your app
export const CartProvider = ({ children }) => {

  // useReducer manages complex cart state
  const [cart, dispatch] = useReducer(cartReducer, []);


  
  // helper functions that components will use
  const addToCart = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // step -4 passing functions to other children components
  
  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// step - 5 custom hook using useContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};


