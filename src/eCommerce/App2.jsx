import Header from "./components/Header";
import ProductList from "./components/ProductList"
import { CartProvider } from "./context/CartContext";

function App2(){


    return (
       
        <div>
              <Header/>
            <h1 className="text-3xl font-medium  mb-10 mt-10">
                Checkout Our Latest Products :
            </h1>

                <ProductList/>
              
        </div>

    )

}
export default App2;