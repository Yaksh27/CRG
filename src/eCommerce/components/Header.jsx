import { ShoppingBasket } from 'lucide-react';
import { Link } from 'react-router-dom';

function Header(){


    return ( 
        <nav className="flex justify-between rounded-lg items-center p-4 bg-gray-100 border-b-2 shadow-2xl border-gray-500">
        <h1 className="text-2xl font-medium">eCommerce</h1>
      <div className="space-x-5">
        <Link to="/" className="text-gray-700 hover:text-gray-900 mr-10 no-underline">Home</Link>
        <Link  to="/Cart" className="
    inline-flex        /* shrink-to-fit like a normal link */
    items-center       /* vertical center text & icon */
    gap-2              /* 0.5rem between them */
    text-gray-700 
    hover:text-gray-900 
    
  ">View Cart 
        <ShoppingBasket size= {20}/>
        
        </Link>
       
      </div>
    </nav>
    )

}

export default Header;