import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <h3>Escreva sobre o que você tem interesse!</h3>
      <p>Mini Blog &copy; {currentYear}</p>
      <p>Desenvolvido por: Lucas Heideric</p>
    </footer>
  );
};

export default Footer;
