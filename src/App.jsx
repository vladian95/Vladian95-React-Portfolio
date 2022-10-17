import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import Testimonails from './components/testimonails/Testimonails';
import Contact from './components/contact/Contact';
import Menu from './components/menu/Menu';
import './app.css';
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="Sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonails />
        <Contact />
      </div>
    </div>
  );
}

export default App;
