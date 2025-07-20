import { products } from '../data/db';
import ProductCard from './ProductCard';

function ProductList() {
    return(
        <div className='grid grid-cols-3 gap-y-10'>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductList;
