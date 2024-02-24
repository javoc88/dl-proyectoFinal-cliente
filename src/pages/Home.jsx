import React from "react";
import styles from "../styles/Home.module.css";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Bienvenido a NexGen License Store</h1>
        <p className={styles.description}>
          Bienvenido a nuestro marketplace, donde ofrecemos precios
          competitivos y una amplia gama de software con licencias legales para
          satisfacer todas tus necesidades.
        </p>
        <Button variant="light" onClick={() => navigate("/productos")}>
        Ir al catálogo
      </Button>
      </div>
      <div className={styles.background}></div>
    </div>
  );
};

export default Home;
