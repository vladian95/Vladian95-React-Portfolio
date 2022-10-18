import './intro.css';

export default function Intro() {
  return (
    <div className="Intro" id="Intro">
      <div className="Left">
        <div className="ImgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="Right">
        <div className="Wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Vladyslav Kvanin</h1>
          <h3>
            Front-end <span>Developer</span>
          </h3>
        </div>
        <a href="#Portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
