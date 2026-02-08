import "./Products.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../../components/Button/Button";
import { FaArrowRight } from "react-icons/fa";

import wheatImg from "../../assets/images/products/wheat.webp";
import riceImg from "../../assets/images/products/rice.webp";
import dalImg from "../../assets/images/products/dal.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const products = [
  {
    id: "wheat",
    name: "Wheat (Atta)",
    image: wheatImg,
    description:
      "Stone-ground, naturally sourced wheat from village farms. No bleaching, no additives — just honest flour for rotis and parathas the way they were meant to be.",
  },
  {
    id: "rice",
    name: "Rice",
    image: riceImg,
    description:
      "Unpolished, nutrient-rich rice varieties. We source directly from farmers and ensure proper moisture and purity testing so you get clean, wholesome grains.",
  },
  {
    id: "dal",
    name: "Dal",
    image: dalImg,
    description:
      "Cleaned, sorted, and chemical-free lentils. Sourced from trusted villages, tested for quality, and packed fresh — no long storage or hidden treatments.",
  },
];

export default function Products() {
  const navigate = useNavigate();

  return (
    <main className="products-page">
      {/* Hero */}
      <section className="products-hero">
        <div className="container">
          <motion.h1
            className="products-title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9 }}
          >
            Our <span className="highlight">Products</span>
          </motion.h1>
          <motion.p
            className="products-subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            We offer a limited range right now — Wheat, Rice, and Dal — so we can
            focus on <span className="highlight">quality</span>, traceability, and
            honest sourcing. Every batch is tested and trusted.
          </motion.p>
        </div>
      </section>

      {/* Product cards */}
      <section className="products-list">
        <div className="container">
          {products.map((product, i) => (
            <motion.article
              key={product.id}
              className="product-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="product-card-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-card-content">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="products-cta">
        <div className="container">
          <motion.p
            className="products-cta-text"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to bring honest food to your home?
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Button
              label="Make an Order"
              icon={<FaArrowRight />}
              bgColor="#7ddc8a"
              textColor="#000"
              onClick={() => navigate("/order")}
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
