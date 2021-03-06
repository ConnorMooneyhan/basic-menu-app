import styles from '../css/Header.module.css';
import HeaderCart from './HeaderCart';

interface HeaderProps {
  className?: string
}

const Header: React.FC<HeaderProps> = (props) => {
  
  return (
    <header className={`${styles.header} ${props.className}`}>
      <h1>Fast Meals Fast</h1>
      <HeaderCart />
    </header>
  );
}

export default Header;