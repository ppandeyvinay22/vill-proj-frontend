import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../../store/useCartStore';
import api from '../../services/api';
import { Plus, CreditCard, CheckCircle2, ChevronRight, Truck, ShieldCheck, Package } from 'lucide-react';
import './Checkout.css';

interface Address {
  _id: string;
  full_name: string;
  address_line: string;
  city: string;
  state: string;
  pincode: string;
  phone_number: string;
}

interface OrderResult {
  _id: string;
  tracking_id: string;
  logistics_provider: string;
  estimated_delivery: string;
  tracking_url: string;
  shiprocket_order_id: string;
}

const Checkout = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [selectedAddressId, setSelectedAddressId] = useState<string>('');
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isNewAddress, setIsNewAddress] = useState(false);
  const [orderResult, setOrderResult] = useState<OrderResult | null>(null);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  
  const [newAddr, setNewAddr] = useState({
    full_name: '', address_line: '', city: '', state: '', pincode: '', phone_number: ''
  });

  const { items, totalPrice, clearCart } = useCartStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetchAddresses();
    if (items.length === 0 && step < 3) {
      navigate('/products');
    }
  }, []);

  const fetchAddresses = async () => {
    try {
      const res = await api.get('/addresses');
      setAddresses(res.data);
      if (res.data.length > 0) setSelectedAddressId(res.data[0]._id);
    } catch (err) { console.error(err); }
  };

  const handleAddAddress = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post('/addresses', newAddr);
      setAddresses([...addresses, res.data]);
      setSelectedAddressId(res.data._id);
      setIsNewAddress(false);
    } catch { alert("Failed to add address"); }
    finally { setLoading(false); }
  };

  const handlePayAndOrder = async () => {
    if (!selectedAddressId) return;
    setPaymentProcessing(true);

    try {
      // Step 1: Create Razorpay-style payment order
      const paymentRes = await api.post('/payments/create', {
        amount: totalPrice + 49,
        order_id: `temp_${Date.now()}`
      });

      // Step 2: Simulate Razorpay payment modal (2 second delay)
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Step 3: Verify payment
      await api.post('/payments/verify', {
        razorpay_order_id: paymentRes.data.id,
        razorpay_payment_id: `pay_${Date.now()}`,
        razorpay_signature: `sig_${Date.now()}`,
        internal_order_id: paymentRes.data.receipt
      });

      // Step 4: Create order (auto-assigns logistics via Shiprocket)
      const orderRes = await api.post('/orders', { address_id: selectedAddressId });
      setOrderResult(orderRes.data);
      clearCart();
      setStep(3);
    } catch (err) {
      alert("Payment or order failed. Please try again.");
    } finally {
      setPaymentProcessing(false);
    }
  };

  // Step 3: Success
  if (step === 3 && orderResult) {
    return (
      <div className="checkout-success">
        <div className="success-content glass-panel">
          <CheckCircle2 size={80} color="#4CAF50" />
          <h1>Order Placed & Shipment Created!</h1>
          <p className="order-id-text">Order ID: <strong>#{orderResult._id.slice(-8).toUpperCase()}</strong></p>
          
          <div className="success-info">
             <h3>📦 Shipment Details</h3>
             <div className="shipment-details">
                <div className="detail-row">
                   <Package size={18} />
                   <span>Shiprocket Order: <strong>{orderResult.shiprocket_order_id}</strong></span>
                </div>
                <div className="detail-row">
                   <Truck size={18} />
                   <span>Courier: <strong>{orderResult.logistics_provider}</strong></span>
                </div>
                <div className="detail-row">
                   <span>📋</span>
                   <span>AWB Tracking: <strong>{orderResult.tracking_id}</strong></span>
                </div>
                <div className="detail-row">
                   <span>📅</span>
                   <span>Expected Delivery: <strong>{new Date(orderResult.estimated_delivery).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</strong></span>
                </div>
             </div>
             <a href={orderResult.tracking_url} target="_blank" rel="noreferrer" className="track-link">
                Track Shipment on Shiprocket →
             </a>
          </div>

          <div className="success-actions">
            <button className="btn btn-primary" onClick={() => navigate('/orders')}>
              View My Orders
            </button>
            <button className="btn btn-secondary" onClick={() => navigate('/products')}>
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-main">
          <div className="checkout-steps">
            <div className={`step ${step >= 1 ? 'active' : ''}`}>1. Shipping</div>
            <div className="step-divider"><ChevronRight size={16} /></div>
            <div className={`step ${step >= 2 ? 'active' : ''}`}>2. Payment</div>
          </div>

          {step === 1 && (
            <div className="section address-section">
              <h2>Select Delivery Address</h2>
              <div className="address-grid">
                {addresses.map((addr) => (
                  <div key={addr._id} className={`address-card ${selectedAddressId === addr._id ? 'selected' : ''}`} onClick={() => setSelectedAddressId(addr._id)}>
                    <div className="select-indicator"></div>
                    <div className="addr-header"><strong>{addr.full_name}</strong></div>
                    <p>{addr.address_line}</p>
                    <p>{addr.city}, {addr.state} - {addr.pincode}</p>
                    <p>Phone: {addr.phone_number}</p>
                  </div>
                ))}
                {!isNewAddress && (
                  <button className="add-address-card" onClick={() => setIsNewAddress(true)}>
                    <Plus size={32} /><span>Add New Address</span>
                  </button>
                )}
              </div>

              {isNewAddress && (
                <div className="new-address-form glass-panel">
                  <h3>New Delivery Address</h3>
                  <form onSubmit={handleAddAddress}>
                    <div className="form-grid">
                      <input placeholder="Full Name" required value={newAddr.full_name} onChange={e => setNewAddr({...newAddr, full_name: e.target.value})} />
                      <input placeholder="Phone Number" required value={newAddr.phone_number} onChange={e => setNewAddr({...newAddr, phone_number: e.target.value})} />
                      <input className="full-width" placeholder="Flat, House no, Building, Apartment" required value={newAddr.address_line} onChange={e => setNewAddr({...newAddr, address_line: e.target.value})} />
                      <input placeholder="City" required value={newAddr.city} onChange={e => setNewAddr({...newAddr, city: e.target.value})} />
                      <input placeholder="State" required value={newAddr.state} onChange={e => setNewAddr({...newAddr, state: e.target.value})} />
                      <input placeholder="Pincode" required value={newAddr.pincode} onChange={e => setNewAddr({...newAddr, pincode: e.target.value})} />
                    </div>
                    <div className="form-actions">
                       <button type="button" onClick={() => setIsNewAddress(false)} className="btn-text">Cancel</button>
                       <button type="submit" className="btn btn-primary" disabled={loading}>{loading ? 'Saving...' : 'Save & Select'}</button>
                    </div>
                  </form>
                </div>
              )}

              <div className="checkout-footer">
                <button className="btn btn-primary" disabled={!selectedAddressId} onClick={() => setStep(2)}>Continue to Payment</button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="section payment-section">
              <h2>Secure Payment</h2>
              <p className="payment-description">Your payment is processed securely via <strong>Razorpay</strong>.</p>
              
              <div className="payment-options">
                 <div className="payment-option selected">
                    <CreditCard size={24} />
                    <div className="opt-details">
                       <strong>Card / UPI / Netbanking</strong>
                       <span>Razorpay Secure Gateway</span>
                    </div>
                 </div>
              </div>

              <div className="mock-card-form glass-panel">
                 <div className="razorpay-badge">
                    <span className="rp-icon">🔒</span>
                    <span>Razorpay Secure Checkout</span>
                 </div>
                 <div className="form-group">
                    <label>Card Number</label>
                    <input placeholder="•••• •••• •••• ••••" defaultValue="4242 4242 4242 4242" />
                 </div>
                 <div className="grid-2">
                    <div className="form-group">
                       <label>Expiry Date</label>
                       <input placeholder="MM/YY" defaultValue="12/28" />
                    </div>
                    <div className="form-group">
                       <label>CVV</label>
                       <input placeholder="•••" defaultValue="123" type="password" />
                    </div>
                 </div>
                 <p className="payment-note">This is a mock payment gateway. In production, Razorpay handles this securely.</p>
              </div>

              <div className="checkout-footer">
                <button className="btn-text" onClick={() => setStep(1)}>Go Back</button>
                <button className="btn btn-primary btn-pay" onClick={handlePayAndOrder} disabled={paymentProcessing}>
                   {paymentProcessing ? (
                     <><span className="spinner-small"></span> Processing Payment...</>
                   ) : (
                     `Pay ₹${(totalPrice + 49).toFixed(2)} & Place Order`
                   )}
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="checkout-sidebar">
          <div className="order-summary-card glass-panel">
            <h3>Order Summary</h3>
            <div className="summary-items">
              {items.map(item => (
                <div className="item-row" key={item.product_id}>
                  <span>{item.name} × {item.quantity}</span>
                  <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="summary-divider"></div>
            <div className="summary-details">
               <div className="row"><span>Subtotal</span><span>₹{totalPrice.toFixed(2)}</span></div>
               <div className="row"><span>Shipping (Shiprocket)</span><span>₹49.00</span></div>
            </div>
            <div className="summary-divider"></div>
            <div className="row total">
               <span>Grand Total</span>
               <span>₹{(totalPrice + 49).toFixed(2)}</span>
            </div>
          </div>
          
          <div className="trust-info">
             <div className="trust-item">
                <ShieldCheck size={18} />
                <span>Razorpay Secure Payment</span>
             </div>
             <div className="trust-item">
                <Truck size={18} />
                <span>Shipped via Shiprocket</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
