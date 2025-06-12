import React from "react";
import style from "../PortfolioServices/PortfolioSerVices.module.css";
import { Code, Rocket, Brush, Server } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Code size={40} color="#f14504" />,
    title: "Frontend Development",
    description: "Responsive React-based interfaces designed to showcase your personal work beautifully.",
  },
  {
    icon: <Rocket size={40} color="#f14504" />,
    title: "Performance Optimization",
    description: "Speed up your portfolio and improve SEO with smart optimizations.",
  },
  {
    icon: <Brush size={40} color="#f14504" />,
    title: "UI/UX Design",
    description: "Modern, minimal, and intuitive user experiences that make your work stand out.",
  },
  {
    icon: <Server size={40} color="#f14504" />,
    title: "API Integration",
    description: "Connect forms, fetch projects, and integrate backend features seamlessly.",
  },
];

const PortfolioServices = () => {
  return (
    <section className={style.servicesSection}>
      <motion.h2
        className={style.title}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our <span className={style.highlight}>Services</span>
      </motion.h2>

      <div className={style.cardGrid}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={style.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            {service.icon}
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#">Learn More</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioServices;
