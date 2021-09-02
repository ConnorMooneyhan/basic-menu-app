import './App.css';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import Menu from './components/Menu/Menu';

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