import "./Home.css";
import heroImage from "../../assets/images/photos/5.webp";
import qualityBg from "../../assets/images/backgrounds/quality-bg.webp";

import Button from "../../components/Button/Button";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import {
  FaSeedling,
  FaFlask,
  FaClock,
  FaBan
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

/* Swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

/* Product images */
import wheatImg from "../../assets/images/products/wheat.webp";
import riceImg from "../../assets/images/products/rice.webp";
import dalImg from "../../assets/images/products/dal.webp";

/* Motion variant */
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="home">

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="container hero-inner">

          <motion.div
            className="hero-content"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <h1 className="tag-line">
              <span className="highlight">Fresh</span> from <span className="highlight">Gaon</span><br />
              <span className="highlight">Honest</span> to <span className="highlight">Home</span>
            </h1>

            <p className="hero-text">
              GaonKart brings traditionally sourced Wheat, rice, dal, and more
              directly from villages —
              <span className="good"> tested</span>,
              <span className="good"> trusted</span>, and
              <span className="good"> traceable</span>.
              <br /><br />
              Big industries optimise for
              <span className="bad"> shelf life</span> and
              <span className="bad"> appearance</span>.
              We optimise for
              <span className="good strong"> health</span> and
              <span className="good strong"> honesty</span>.
            </p>

            <Button
              label="Make an Order"
              icon={<FaArrowRight />}
              bgColor="#7ddc8a"
              textColor="#000"
              onClick={() => navigate("/order")}
            />
          </motion.div>

          <motion.div
            className="hero-image"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <img src={heroImage} alt="Village harvest" />
          </motion.div>

        </div>
      </section>


      {/* ================= TRUST ================= */}
      <section className="trust">
        <div className="container">
          <motion.h2
            className="section-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            Why families <span style={{ color: "#1E4D2B" }}>trust GaonKart</span>
          </motion.h2>

          <div className="trust-grid">
            {[
              { icon: <FaSeedling />, title: "Village Sourced", desc: "Directly from trusted village farmers with full traceability." },
              { icon: <FaFlask />, title: "Quality Tested", desc: "Checked for moisture, purity, and adulteration every batch." },
              { icon: <FaClock />, title: "Fresh Batches", desc: "Produced in small batches, not stored for months." },
              { icon: <FaBan />, title: "No Chemical Shortcuts", desc: "No bleaching, polish, or chemical processing." }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="trust-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.2 }}
              >
                <div className="trust-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= PROBLEM SECTION ================= */}
      <section className="problem">
        <div className="problem-overlay" />

        <div className="container problem-inner">

          <motion.h2
            className="section-heading problem-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            What’s wrong with today’s <span style={{ color: "#1E4D2B" }}>food</span>?
          </motion.h2>

          <motion.p
            className="problem-text"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            Modern food processing prioritizes{" "}
            <span className="warn">speed</span> and{" "}
            <span className="warn">appearance</span> over{" "}
            <span className="good">nutrition</span>.
            Chemical polishing, over-refining, and long storage slowly remove
            what food is meant to give the body.
          </motion.p>

          <div className="problem-stats">

            {[
              { value: "70%", label: "Fiber loss in refined grains" },
              { value: "3–6 months", label: "Storage before reaching homes" },
              { value: "Multiple", label: "Chemical treatments used" }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="problem-stat-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2 + i * 0.1 }}
              >
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= QUALITY ================= */}
      <section className="quality-preview">
        <div className="container quality-grid">

          <motion.div
            className="quality-content"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <h2 style={{ fontSize: "32px" }}> How we ensure <span className="highlight">quality</span></h2>
            <ul className="quality-steps">
              <li><FaCheckCircle color="#7ddc8a" /> Village sourcing</li>
              <li><FaCheckCircle color="#7ddc8a" /> Natural cleaning</li>
              <li><FaCheckCircle color="#7ddc8a" /> Quality testing</li>
              <li><FaCheckCircle color="#7ddc8a" /> Fresh grinding</li>
            </ul>

            <div className="quality-actions">
              <Button label="Make an Order" bgColor="#7ddc8a" icon={<FaArrowRight />} textColor="#000" onClick={() => navigate("/order")} />
              <Button label="See More" bgColor="#fff" textColor="#000" onClick={() => navigate("/quality")} />
            </div>
          </motion.div>

          <motion.div
            className="quality-image"
            style={{ backgroundImage: `url(${qualityBg})` }}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
          />
        </div>
      </section>



      {/* ================= PRODUCTS (SWIPER) ================= */}
      <section className="products-preview">
        <div className="container">

          <motion.h2
            className="section-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            Our Products
          </motion.h2>

          <Swiper
            modules={[Autoplay]}
            loop
            freeMode={true}
            slidesPerView={3}
            spaceBetween={24}
            speed={8000}                 // increase = slower constant speed
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            allowTouchMove={true}
            breakpoints={{
              0: { slidesPerView: 1.1 },
              600: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3 },
            }}
            className="products-swiper"
          >
            {[wheatImg, riceImg, dalImg, wheatImg, riceImg].map((img, i) => (
              <SwiperSlide key={i}>
                <div className="product-image-card">
                  <img src={img} alt="GaonKart product" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="section-action">
            <Button
              label="View All Products"
              icon={<FaArrowRight />}
              bgColor="#000"
              textColor="#fff"
              onClick={() => navigate("/products")}
            />
          </div>

        </div>
      </section>


      {/* ================= VIDEO ================= */}
      <section className="video-section">
        <div className="container video-grid">

          <motion.div
            className="video-text"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <h2 style={{ fontSize: "32px", marginBottom: "24px" }}>Why food <span className="highlight">purity</span> matters</h2>
            <p className="food-message">
              Food is not just <span className="warn">calories</span>.
              <br />
              <span className="warn">Processing</span>,{" "}
              <span className="warn">storage</span>, and{" "}
              <span className="warn">chemicals</span> {" "}
              decide what finally reaches your{" "}
              <span className="good strong">body</span>.
            </p>

            <blockquote className="food-quote">
              “What we eat every day decides how we live every day.”
            </blockquote>

            <div className="quality-actions">
              <Button label="Make an Order" bgColor="#7ddc8a" icon={<FaArrowRight />} textColor="#000" onClick={() => navigate("/order")} />
              {/* <Button label="See More" bgColor="#fff" textColor="#000" onClick={() => navigate("/quality")} /> */}
            </div>
          </motion.div>

          <motion.div
            className="video-wrapper"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <iframe
              src="https://www.youtube.com/embed/XMcab1MFaLc"
              title="Food purity"
              allowFullScreen
            />
          </motion.div>

        </div>
      </section>

    </main>
  );
};

export default Home;
