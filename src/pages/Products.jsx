import { CartProvider } from '../context/CartContext';
import ProductListing from '../components/ProductListing'; // Import Details Component
import CartListing from '../components/CartListing'; // Import Details Component

const Products = () => {
    return (
        <CartProvider>
            <div style={{ display: "flex", gap: "80px" }}>
                <ProductListing />
                <CartListing />
            </div>
        </CartProvider>
    );
};

export default Products;