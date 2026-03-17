import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { useCartStore } from '../../store/useCartStore';
import { useAuthStore } from '../../store/useAuthStore';
import { Plus, Minus, ShoppingBag } from 'lucide-react';
import './Products.css';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  const { items, addItem, updateQuantity, removeItem } = useCartStore();
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const getCartQuantity = (productId: string): number => {
    const found = items.find(i => i.product_id === productId);
    return found ? found.quantity : 0;
  };

  const syncCart = async () => {
    if (!isAuthenticated) return;
    try {
      const currentItems = useCartStore.getState().items;
      await api.post('/cart/sync', { items: currentItems });
    } catch (error) {
      console.error("Failed to sync cart", error);
    }
  };

  const handleAdd = (product: Product) => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    addItem({
      product_id: product._id,
      name: product.name,
      price: product.price,
      image_url: product.image_url,
      quantity: 1
    });
    syncCart();
  };

  const handleIncrement = (productId: string) => {
    const current = getCartQuantity(productId);
    updateQuantity(productId, current + 1);
    syncCart();
  };

  const handleDecrement = (productId: string) => {
    const current = getCartQuantity(productId);
    if (current <= 1) {
      removeItem(productId);
    } else {
      updateQuantity(productId, current - 1);
    }
    syncCart();
  };

  if (loading) {
    return (
      <div className="products-loading">
        <div className="spinner"></div>
        <p>Loading fresh produce...</p>
      </div>
    );
  }

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Fresh from the Village</h1>
        <p>Pure, organic, and authentic ingredients delivered straight to your home.</p>
      </div>

      <div className="products-grid">
        {products.map((product) => {
          const qty = getCartQuantity(product._id);
          return (
            <div className="product-card" key={product._id}>
              <div className="product-image-container">
                <img src={product.image_url} alt={product.name} />
                <div className="product-category">{product.category}</div>
                {qty > 0 && (
                  <div className="cart-badge">{qty} in cart</div>
                )}
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">₹{product.price.toFixed(2)}</span>
                  
                  {qty === 0 ? (
                    <button 
                      className="add-to-cart-btn"
                      onClick={() => handleAdd(product)}
                      aria-label="Add to cart"
                    >
                      {isAuthenticated ? (
                        <><Plus size={18} /><span>Add</span></>
                      ) : (
                        <><ShoppingBag size={18} /><span>Login to Buy</span></>
                      )}
                    </button>
                  ) : (
                    <div className="quantity-selector">
                      <button className="qty-btn" onClick={() => handleDecrement(product._id)}>
                        <Minus size={16} />
                      </button>
                      <span className="qty-count">{qty}</span>
                      <button className="qty-btn" onClick={() => handleIncrement(product._id)}>
                        <Plus size={16} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
