import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services'
import Team from './components/Team';
import Contact from './components/Contact'
import Footer from './components/Footer';



function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Hero/>
      <Services/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
