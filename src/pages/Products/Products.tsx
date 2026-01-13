import "./Products.css";

export default function Products() {
  return (
    <main className="products">
      <h1>Our Products</h1>

      <div className="product">
        <h2>Wheat Atta</h2>
        <p>Stone-ground, naturally sourced wheat.</p>
      </div>

      <div className="product">
        <h2>Rice</h2>
        <p>Unpolished, nutrient-rich varieties.</p>
      </div>

      <div className="product">
        <h2>Dal</h2>
        <p>Cleaned, sorted, and chemical-free.</p>
      </div>
    </main>
  );
}
