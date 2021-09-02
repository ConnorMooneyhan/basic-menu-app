import styles from './Card.module.css';

interface CardPropsInterface {
  className?: string,
  onClick?: () => void
}

const Card: React.FC<CardPropsInterface> = (props) => {
  return (
    <div className={`${styles.card} ${props.className}`} onClick={props.onClick}>
      {props.children}
    </div>
  );
}

export default Card;