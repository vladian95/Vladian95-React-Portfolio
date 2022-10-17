import './intro.css';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      strings: ['Developer', 'Designer', 'Content Creator'],
    });
  }, []);

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
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#Portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
