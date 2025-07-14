import { Link } from "react-router-dom"

function NavBar(){
    
    
   return (
   <nav className="bg-green-800 mb-10 w-full px-6 py-4 rounded-xl text-lg text-yellow-400 flex justify-between items-center">
       <div>
           <Link to="/" className="font-bold text-xl hover:text-yellow-200">Movie App</Link>
       </div>
       <div className="space-x-6">
           <Link to="/" className="hover:text-yellow-200 transition-colors">Home</Link>
           <Link to="/favorites" className="hover:text-yellow-200 transition-colors">Favorites</Link>
       </div>
   </nav>
)
}

export default NavBar;