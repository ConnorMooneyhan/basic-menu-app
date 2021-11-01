import styles from '../css/HeaderCart.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import OrderContext from '../store/order-context';
import Button from './Button';
import DisplayCartModal from './CartModal';

interface HeaderCartProps {
  className?: string
}

const HeaderCart: React.FC<HeaderCartProps> = (props) => {
  const [isModalDisplayed, setIsModalDisplayed] = useState(false
  );
  const ctx = useContext(OrderContext);
  let numberOfItems = 0;
  Object.keys(ctx.cart).forEach(e => {
    numberOfItems += ctx.cart[e].quantity;
  });
  
  const toggleModal = () => {
    setIsModalDisplayed(prev => !prev);
  };

  return (
    <>
      <Button className={`${styles.headerCart} ${props.className}`} onClick={toggleModal}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <h2 className={styles.cartName}>Cart</h2>
        <h2>{numberOfItems}</h2>
      </Button>
      {isModalDisplayed && <DisplayCartModal onClose={toggleModal}/>}
    </>
  );
}

export default HeaderCart;