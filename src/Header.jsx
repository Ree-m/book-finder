import { Link } from "react-router-dom";
import styles from "./styles/header.module.css"
const Header = () => {
  return (
    <div className={styles.header}>
      <Link to={`/`}><h1 className={styles.logo}>Book Finder</h1></Link>
      <nav className={styles.navLinks}>
        <Link to={`/`}>About</Link>
        <Link to={`/`}>Contact</Link>
      </nav>
    </div> 
  );
};

export default Header;
