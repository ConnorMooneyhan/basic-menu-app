import styles from '../css/MenuItem.module.css';
import Card from './Card';
import Button from './Button';
import OrderContext from '../store/order-context';
import React, { useContext, useState } from 'react';

interface MenuItemProps {
  name: string,
  price: string,
  className?: string
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const ctx = useContext(OrderContext);
  const [enteredQuantity, setEnteredQuantity] = useState(0);

  const updateQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredQuantity(Number(e.target.value));
  }

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (enteredQuantity === 0) return;
    const isInitial = ctx.cart[props.name] === undefined;
    ctx.addItem(props.name, {
      quantity: enteredQuantity + (isInitial ? 0 : ctx.cart[props.name].quantity),
      totalCost: enteredQuantity * Number(props.price) + (isInitial ? 0 : ctx.cart[props.name].totalCost)
    });
    setEnteredQuantity(0);
  }

  return (
    <Card className={styles.menuItem}>
      <div className={styles.itemInfo}>
        <p>{props.name}</p>
        <p>{props.children}</p>
        <p>${props.price}</p>
      </div>
      <form className={styles.addToCart} onSubmit={submitForm}>
        <div>
          <label htmlFor="quantity">Quantity</label>
          <input 
          type="number" 
          name="quantity" 
          id="quantity" 
          min="0" 
          max="99" 
          placeholder="0" 
          value={enteredQuantity} 
          onChange={updateQuantity} 
          />
        </div>
        <Button>Add To Cart</Button>
      </form>
    </Card>
  );
}

export default MenuItem;