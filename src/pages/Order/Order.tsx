import { useEffect, useState } from 'react';
import { useAuthStore } from '../../store/useAuthStore';
import api from '../../services/api';
import { Package, Clock, MapPin, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Order.css';

interface OrderItem {
  product_id: string;
  name: string;
  quantity: number;
  price: number;
}

interface OrderData {
  _id: string;
  items: OrderItem[];
  total_price: number;
  status: string;
  payment_status: string;
  logistics_provider: string;
  tracking_id: string | null;
  created_at: string;
  address: {
    full_name: string;
    address_line: string;
    city: string;
    state: string;
    pincode: string;
  };
}

export default function Order() {
  const [orders, setOrders] = useState<OrderData[]>([]);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated) {
      fetchOrders();
    } else {
      setLoading(false);
    }
  }, [isAuthenticated]);

  const fetchOrders = async () => {
    try {
      const res = await api.get('/orders');
      setOrders(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const colors: Record<string, string> = {
      pending: '#FF9800',
      confirmed: '#2196F3',
      shipped: '#9C27B0',
      delivered: '#4CAF50',
      cancelled: '#F44336'
    };
    return {
      background: `${colors[status] || '#888'}15`,
      color: colors[status] || '#888',
      border: `1px solid ${colors[status] || '#888'}30`
    };
  };

  if (!isAuthenticated) {
    return (
      <div className="orders-empty-state">
        <Package size={64} strokeWidth={1.5} />
        <h2>Login to view your orders</h2>
        <p>Track your village food deliveries and order history.</p>
        <Link to="/login" className="order-login-btn">Login to Continue</Link>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="orders-loading">
        <div className="spinner"></div>
        <p>Loading your orders...</p>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="orders-empty-state">
        <Package size={64} strokeWidth={1.5} />
        <h2>No orders yet</h2>
        <p>Start shopping to see your orders here.</p>
        <Link to="/products" className="order-login-btn">Browse Products</Link>
      </div>
    );
  }

  return (
    <main className="orders-page">
      <div className="orders-header">
        <h1>Your Orders</h1>
        <p>{orders.length} order{orders.length > 1 ? 's' : ''} placed</p>
      </div>

      <div className="orders-list">
        {orders.map(order => (
          <div className="order-card" key={order._id}>
            <div className="order-card-header">
              <div className="order-meta">
                <span className="order-id">#{order._id.slice(-8).toUpperCase()}</span>
                <span className="order-date">
                  <Clock size={14} />
                  {new Date(order.created_at).toLocaleDateString('en-IN', {
                    day: 'numeric', month: 'short', year: 'numeric'
                  })}
                </span>
              </div>
              <span className="status-badge" style={getStatusBadge(order.status)}>
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </span>
            </div>

            <div className="order-items-preview">
              {order.items.map((item, idx) => (
                <div className="order-item-row" key={idx}>
                  <span className="item-name">{item.name}</span>
                  <span className="item-qty">×{item.quantity}</span>
                  <span className="item-price">₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="order-card-footer">
              <div className="order-shipping">
                <div className="shipping-detail">
                  <Truck size={16} />
                  <span>{order.logistics_provider}</span>
                </div>
                {order.tracking_id && (
                  <span className="tracking-id">Tracking: {order.tracking_id}</span>
                )}
                <div className="shipping-detail">
                  <MapPin size={16} />
                  <span>{order.address.city}, {order.address.state} - {order.address.pincode}</span>
                </div>
              </div>
              <div className="order-total">
                <span>Total</span>
                <strong>₹{order.total_price.toFixed(2)}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
