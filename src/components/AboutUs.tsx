import styles from '../css/AboutUs.module.css';
import Card from './Card';

const AboutUs: React.FC = (props) => {
  
  return (
    <Card className={styles.aboutUs}>
      <p>{props.children}</p>
    </Card>
  )
}

export default AboutUs;