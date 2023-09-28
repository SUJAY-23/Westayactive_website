import './App.css';
// import Navigation from './components/1Navigation/Navigation';
import Main from './components/2Main/Main';
import Offers from './components/3Services/Offers';
import Benefits from './components/4Benefits/Benefits';
import Youtubers from './components/5Youtubers/Youtubers';
import AboutUs from './components/6AboutUs/AboutUs';
import ContactUs from './components/7ContactUs/ContactUs';
import Clan from './components/8Clans/Clan';
import Footer from './components/9Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* <Navigation/> */}
      <Main/>
      <Offers/>
      <Benefits/>
      <Youtubers/>
      <AboutUs/>
      <ContactUs/>
      <Clan/>
      <Footer/>
    </div>
  );
}

export default App;
