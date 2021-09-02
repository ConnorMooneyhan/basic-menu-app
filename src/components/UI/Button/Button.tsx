import styles from './Button.module.css';

interface ButtonProps {
  className?: string,
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = (props) => {

  return (
    <button className={`${styles.button} ${props.className}`} onClick={props.onClick}>{props.children}</button>
  );
}

export default Button;