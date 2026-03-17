import { useEffect } from 'react';
import { useCartStore } from '../../store/useCartStore';
import { useAuthStore } from '../../store/useAuthStore';
import api from '../../services/api';
import { Trash2, Plus, Minus, CreditCard, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const { items, totalPrice, updateQuantity, removeItem } = useCartStore();
    const { isAuthenticated } = useAuthStore();

    useEffect(() => {
        const fetchCart = async () => {
            if (isAuthenticated && items.length === 0) {
                try {
                    const response = await api.get('/cart');
                    if (response.data.items) {
                         const mappedItems = response.data.items.map((i: any) => ({
                             product_id: i.product_id,
                             quantity: i.quantity,
                             name: i.name,
                             price: i.price,
                             image_url: i.image_url
                         }));
                         useCartStore.getState().setCart(mappedItems, response.data.total_price);
                    }
                } catch (err) {
                    console.error("Could not fetch cart:", err);
                }
            }
        };
        fetchCart();
    }, [isAuthenticated, items.length]);

    const handleSync = async () => {
        if (!isAuthenticated) return;
        try {
            const currentItems = useCartStore.getState().items;
            await api.post('/cart/sync', { items: currentItems });
        } catch (error) {
            console.error("Could not sync cart:", error);
        }
    };

    const handleUpdate = (productId: string, quantity: number) => {
        updateQuantity(productId, quantity);
        handleSync();
    };

    const handleRemove = (productId: string) => {
        removeItem(productId);
        handleSync();
    };

    if (items.length === 0) {
        return (
            <div className="cart-empty-state">
                <div className="cart-empty-icon">🛒</div>
                <h2>Your village basket is empty</h2>
                <p>Looks like you haven't added any fresh products yet.</p>
                <Link to="/products" className="continue-shopping">
                    Explore Products
                </Link>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <div className="cart-header">
                <Link to="/products" className="back-link">
                    <ChevronLeft size={20} />
                    <span>Continue Shopping</span>
                </Link>
                <h1>Your Basket</h1>
            </div>

            <div className="cart-content">
                <div className="cart-items-list">
                    {items.map(item => (
                        <div className="cart-item-card" key={item.product_id}>
                            <img src={item.image_url} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h3>{item.name}</h3>
                                <p className="cart-item-price">₹{item.price.toFixed(2)}</p>
                            </div>
                            
                            <div className="cart-item-actions">
                                <div className="quantity-controls">
                                    <button 
                                        className="qty-btn"
                                        onClick={() => handleUpdate(item.product_id, item.quantity - 1)}
                                    >
                                        <Minus size={16} />
                                    </button>
                                    <span className="qty-display">{item.quantity}</span>
                                    <button 
                                        className="qty-btn"
                                        onClick={() => handleUpdate(item.product_id, item.quantity + 1)}
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>
                                <div className="cart-item-total">
                                    ₹{(item.price * item.quantity).toFixed(2)}
                                </div>
                                <button 
                                    className="remove-btn"
                                    onClick={() => handleRemove(item.product_id)}
                                    aria-label="Remove item"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cart-summary">
                    <h2>Order Summary</h2>
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>₹{totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="summary-row">
                        <span>Delivery (Delhivery)</span>
                        <span>₹49.00</span>
                    </div>
                    <div className="summary-divider"></div>
                    <div className="summary-row total">
                        <span>Total</span>
                        <span>₹{(totalPrice + 49).toFixed(2)}</span>
                    </div>
                    
                    <Link to="/checkout" className="checkout-btn">
                        <CreditCard size={20} />
                        <span>Proceed to Checkout</span>
                    </Link>
                    {!isAuthenticated && (
                        <p className="checkout-hint">You will be asked to log in before checking out.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;
