import { Link } from 'react-router-dom';
import { Leaf, Award, Truck, ShieldCheck, AlertCircle } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">100% Organic & Authentic</div>
          <h1 className="hero-title">
            The Pure Taste of <span>Village Roots</span>
          </h1>
          <p className="hero-subtitle">
            Tired of processed, adulterated food? We bring you natural, farm-fresh ingredients 
            directly from village farmers to your urban doorstep.
          </p>
          <div className="hero-actions">
            <Link to="/products" className="btn btn-primary">
              Shop Authentic Food
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Why We Are Different
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <img 
            src="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=800" 
            alt="Fresh Organic Vegetables from Village Farm" 
            className="hero-image"
          />
          <div className="floating-card glass-panel" style={{ top: '10%', left: '-10%' }}>
              <span className="emoji">🍯</span>
              <div>
                  <strong>Pure Honey</strong>
                  <span>Wild Harvested</span>
              </div>
          </div>
          <div className="floating-card glass-panel" style={{ bottom: '15%', right: '-5%' }}>
              <span className="emoji">🌾</span>
              <div>
                  <strong>Bilona Ghee</strong>
                  <span>Traditionally A2</span>
              </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="problem-section">
        <div className="section-header">
          <span className="section-label">THE PROBLEM</span>
          <h2>The Modern Food Industry is Broken</h2>
        </div>
        <div className="problem-grid">
          <div className="problem-item">
            <div className="problem-icon"><AlertCircle /></div>
            <h3>Excessive Processing</h3>
            <p>Most supermarket foods are stripped of nutrients and loaded with preservatives to increase shelf life.</p>
          </div>
          <div className="problem-item">
            <div className="problem-icon"><AlertCircle /></div>
            <h3>Widespread Adulteration</h3>
            <p>From milk to spices, finding pure products is nearly impossible. Chemical additives have become the norm.</p>
          </div>
          <div className="problem-item">
            <div className="problem-icon"><AlertCircle /></div>
            <h3>Hidden Sourcing</h3>
            <p>Do you know where your food comes from? Long supply chains prioritize profit over transparency and health.</p>
          </div>
        </div>
      </section>

      {/* Why We Are Better Section */}
      <section className="why-better-section">
        <div className="better-content">
          <span className="section-label">OUR MISSION</span>
          <h2>Why VillageFood is Different</h2>
          <div className="better-list">
            <div className="better-item">
              <div className="check-icon"><ShieldCheck /></div>
              <div>
                <h4>Zero Adulteration Guarantee</h4>
                <p>We perform rigorous quality checks to ensure everything is as pure as nature intended.</p>
              </div>
            </div>
            <div className="better-item">
              <div className="check-icon"><ShieldCheck /></div>
              <div>
                <h4>Farm to Fork via Shiprocket</h4>
                <p>We use Shiprocket (Delhivery, BlueDart, DTDC) to deliver fresh village produce to your doorstep in 2-4 days.</p>
              </div>
            </div>
            <div className="better-item">
              <div className="check-icon"><ShieldCheck /></div>
              <div>
                <h4>Empowering Village Farmers</h4>
                <p>By removing middlemen, we ensure fair pay for farmers while giving you premium quality at honest prices.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="better-image">
           <img 
             src="https://images.pexels.com/photos/2382665/pexels-photo-2382665.jpeg?auto=compress&cs=tinysrgb&w=800" 
             alt="Village Farmer working in field" 
           />
        </div>
      </section>

      {/* Product Categories / Quick Shop */}
      <section className="features-section">
        <div className="feature-card">
          <div className="feature-icon"><Leaf size={32} /></div>
          <h3>100% Organic</h3>
          <p>Verified organic farms following non-GMO traditional agriculture.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon"><Award size={32} /></div>
          <h3>Ancient Wisdom</h3>
          <p>Our products are made using traditional recipes passed down through generations.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon"><Truck size={32} /></div>
          <h3>Reliable Delivery</h3>
          <p>Shipped via Shiprocket's courier network for fast pan-India delivery with real-time tracking.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Pure Food, Pure Life.</h2>
          <p>Stop compromising on your health. Switch to authentic village products today.</p>
          <Link to="/products" className="btn btn-primary btn-large">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
