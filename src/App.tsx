import './css/App.css';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Menu from './components/Menu';

const App: React.FC = (props) => {
  return (
    <>
      <Header />
      <AboutUs>
        We make fast food... <em>fast</em>
      </AboutUs>
      <Menu />
    </>
  );
}

export default App;