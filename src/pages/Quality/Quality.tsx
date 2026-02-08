import "./Quality.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../../components/Button/Button";
import { FaArrowRight } from "react-icons/fa";

/* Method images – replace with your actual equipment photos when available */
import methodMoisture from "../../assets/images/photos/21.webp";
import methodSieve from "../../assets/images/photos/22.webp";
import methodGrain from "../../assets/images/photos/23.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const methods = [
  {
    id: "moisture",
    title: "Moisture meter",
    image: methodMoisture,
    description:
      "We use a moisture meter to read the moisture content of grains (wheat, rice, dal) before packing. Correct moisture levels ensure longer shelf life without chemicals and reduce the risk of fungus or spoilage. Every batch is checked so you get grains that are safe and storage-ready.",
  },
  {
    id: "sieve",
    title: "Sieve and weight",
    image: methodSieve,
    description:
      "Grains are passed through sieves and weighed to separate broken grains, dust, and foreign matter. This gives us consistent size and purity. We record weight and sieve grades so we know exactly what goes into each pack — no guesswork, only measured quality.",
  },
  {
    id: "ai",
    title: "AI-based grain analysis (Rice)",
    image: methodGrain,
    description:
      "For rice, we use an AI-based model to identify grain type and count grain varieties in a sample. It helps us confirm the variety (e.g. basmati, non-basmati, mixed) and give you clear information on what you are buying. Grain variety counts are reported so you know exactly what’s in your pack.",
  },
];

export default function Quality() {
  const navigate = useNavigate();

  return (
    <main className="quality-page">
      {/* Hero */}
      <section className="quality-hero">
        <div className="container">
          <motion.h1
            className="quality-title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9 }}
          >
            How we ensure <span className="highlight">quality</span>
          </motion.h1>
          <motion.p
            className="quality-intro"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            From village sourcing to your home, we use simple and modern methods
            to test and verify every batch. Here’s how we do it.
          </motion.p>
        </div>
      </section>

      {/* Methods */}
      <section className="quality-methods">
        <div className="container">
          {methods.map((method, i) => (
            <motion.article
              key={method.id}
              className={`quality-method quality-method-${i % 2 === 0 ? "left" : "right"}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="quality-method-image">
                <img src={method.image} alt={method.title} />
              </div>
              <div className="quality-method-content">
                <h2>{method.title}</h2>
                <p>{method.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="quality-cta">
        <div className="container">
          <motion.p
            className="quality-cta-text"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Trust in every grain. Ready to order?
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
