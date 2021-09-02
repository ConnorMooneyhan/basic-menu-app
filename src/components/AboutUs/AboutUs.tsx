import styles from './AboutUs.module.css';
import Card from '../UI/Card/Card';

const AboutUs: React.FC = (props) => {
  
  return (
    <Card className={styles.aboutUs}>
      <p>{props.children}</p>
    </Card>
  )
}

export default AboutUs;