import './menu.css';

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={'Menu ' + (menuOpen && 'Active')}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#Intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#Portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#Works">Works</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#Testimonails">Testimonails</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
