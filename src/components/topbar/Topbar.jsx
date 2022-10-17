import './topbar.css';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'Topbar ' + (menuOpen && 'Active')}>
      <div className="Wrapper">
        <div className="Left">
          <a href="#Intro" className="Logo">
            Vladian95
          </a>
          <span className="Gmail">kvankvan1995@gmail.com</span>
        </div>
        <div className="Right">
          <div className="Hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="Line1"></span>
            <span className="Line2"></span>
            <span className="Line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
