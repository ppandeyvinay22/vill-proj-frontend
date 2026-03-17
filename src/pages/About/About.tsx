import "./About.css";
import founder1 from "../../assets/images/founders/ashwani.webp";
import { motion } from "framer-motion";
import whyImage from "../../assets/images/photos/20.webp";
import beliefImage from "../../assets/images/photos/19.webp";
import Button from "../../components/Button/Button";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const navigate = useNavigate()

  return (
    <main className="about">
      {/* HERO */}
      <section className="about-hero">
        <motion.h1
          className="about-title"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.9 }}
        >
          <span className="highlight">Honest</span> food.
          <br />
          <span className="highlight">Pure</span> intent.
          <br />
          Better <span className="highlight">health</span>.
        </motion.h1>
      </section>


      {/* WHY */}
      <section className="about-section about-why dark-bg">
        <div className="about-text">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            Why <span className="highlight">GaonKart</span> exists
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            Food today is optimized for shelf life, appearance, and scale — not
            for human health. What reaches our homes often loses its natural
            nutrition long before we consume it.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            GaonKart exists to reverse that journey — bringing food closer to
            how it is grown, prepared, and eaten in villages.
          </motion.p>
        </div>

        <motion.div
          className="about-image"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <img src={whyImage} alt="Village food sourcing" className="about-img" />

        </motion.div>
      </section>


      {/* BELIEF */}
      <section className="about-section about-belief light-bg">

        <motion.div
          className="about-image"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <img src={beliefImage} alt="Village food sourcing" className="about-img" />

        </motion.div>

        <div className="about-text">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            Our <span className="highlight">belief</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            What we eat daily becomes part of our body — shaping energy, immunity, and
            long-term health.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            Honest food, eaten consistently, prevents more problems than it cures.
          </motion.p>
        </div>

      </section>


      {/* FOUNDER */}
      <section className="about-founders">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          Meet the <span className="highlight">Founder</span>
        </motion.h2>

        <div className="founder-row">
          <motion.div
            className="founder"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <img src={founder1} alt="Ashwani Pandey - Founder" />
            <h3 className="heading">Ashwani Pandey</h3>
            <p className="designation">Founder & CEO</p>
            <p className="description">
              Indian Army personality driven by discipline and service. On a mission to bring authentic village food to every Indian household.
            </p>
          </motion.div>
        </div>
      </section>


      {/* FINAL CTA */}
      <section className="about-final-cta">
        <motion.blockquote
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          “Daily food quality strongly influences long-term health and energy, as highlighted by global health research. ”
        </motion.blockquote>

        <motion.p
          className="cta-question"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          Ready to bring honest food to your home?
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <Button
            label="Make an Order"
            bgColor="#7ddc8a"
            textColor="#000"
            icon={<FaArrowRight />}
            onClick={() => navigate("/order")}
          />
        </motion.div>
      </section>

    </main>
  );
}
