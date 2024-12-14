import { useCart } from "../context/CartContext";
import Counter from "./Counter";

const ProductListing = () => {
  const { products, addToCart, decreaseQtyFromCart } = useCart();
  const handleIncrement = (productId) => {
    addToCart(productId,1);
  };

  const handleDecrement = (productId) => {
    decreaseQtyFromCart(productId);
  };
  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">Price: ${product.price}</p>
              <div className="actions">
                <label>
                  <Counter
                    productQty={product.qty}
                    onIncrement={() => handleIncrement(product.id)}
                    onDecrement={() => handleDecrement(product.id)} 
                  />
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
