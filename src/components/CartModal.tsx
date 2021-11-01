import styles from '../css/CartModal.module.css';
import ReactDOM from 'react-dom';
import Card from './Card';
import { useContext } from 'react';
import OrderContext from '../store/order-context';

interface CartModalProps {
  onClose?: () => void
}

const Background: React.FC<CartModalProps> = (props) => {
  return (
    <div className={styles.background} onClick={props.onClose} ></div>
  )
}

const CartModal: React.FC<CartModalProps> = (props) => {
  const ctx = useContext(OrderContext);
  let priceSum = 0;
  Object.keys(ctx.cart).forEach(item => priceSum += ctx.cart[item].totalCost)

  return (
    <Card className={styles.cartModal} >
      <h2>Cart</h2>
      <ul>
        {Object.keys(ctx.cart).map(item => 
        <li key="item">
          <span className={styles.alignLeft}>{item} ({ctx.cart[item].quantity})</span>
          <span className={styles.alignRight}>| ${ctx.cart[item].totalCost}</span>
        </li>)}
      </ul>
      <p>Total | ${priceSum}</p>
    </Card>
  )
}


const DisplayCartModal: React.FC<CartModalProps> = (props) => {

  return ReactDOM.createPortal(
    <>
      <Background onClose={props.onClose} />
      <CartModal />
    </>, 
    document.getElementById('root')!
  )
}


export default DisplayCartModal;