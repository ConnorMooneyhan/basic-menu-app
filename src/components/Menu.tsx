import styles from '../css/Menu.module.css';
import Card from './Card';
import MenuItem from './MenuItem';

const Menu: React.FC = (props) => {

  return (
    <Card className={styles.menu}>
      <MenuItem name="Steak" price="17.29" className="orderContext" >Rich, savory sirloin cooked to medium-rare perfection</MenuItem>
      <MenuItem name="California Roll" price="13.89" className="orderContext" >Delicious sushi with fish</MenuItem>
      <MenuItem name="Chicken Fajitas" price="14.99" className="orderContext" >Roasty toasty chicken, mostly</MenuItem>
    </Card>
  );
}

export default Menu;