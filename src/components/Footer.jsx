import React from "react";
import styles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const socialLinks = [
    { icon: faFacebook, link: "#" },
    { icon: faInstagram, link: "#" },
    { icon: faTwitter, link: "#" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          &copy; 2023 NexGen License. All Rights Reserved.
        </p>
        <ul className={styles.socialList}>
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a href={link.link}>
                <FontAwesomeIcon icon={link.icon} className={styles.socialIcon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
