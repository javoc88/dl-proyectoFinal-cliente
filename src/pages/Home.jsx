import React from "react";
import styles from "../styles/Home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Bienvenido a NexGen License Store</h1>
        <p className={styles.description}>
          Bienvenido a nuestro marketplace, donde ofrecemos precios
          competitivos, una amplia gama de software y servicios adicionales para
          satisfacer todas tus necesidades.
        </p>
        <button
          className={styles.button}
          onClick={() => navigate("/productos")}
        >
          Start Now
        </button>
      </div>
      <div className={styles.background}></div>
    </div>
  );
};

export default Home;
