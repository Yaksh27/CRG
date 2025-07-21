import Header from "./components/Header";
import ProductList from "./components/ProductList"
import { CartProvider } from "./context/CartContext";

function App2(){


    return (
       
        <div>
              <Header/>
           

                <ProductList/>
              
        </div>

    )

}
export default App2;