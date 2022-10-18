import './testimonails.css';

export default function Testimonails() {
  const data = [
    {
      id: 1,
      name: 'Tom Durden',
      title: 'Senior Developer',
      img: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      icon: 'assets/twitter.png',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.',
    },
    {
      id: 2,
      name: 'Alex Kalinski',
      title: 'Co-Founder of DELKA',
      img: 'https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      icon: 'assets/youtube.png',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ',
      featured: true,
    },
    {
      id: 3,
      name: 'Martin Harold',
      title: 'CEO of ALBI',
      img: 'https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      icon: 'assets/linkedin.png',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem',
    },
  ];

  return (
    <div className="Testimonails" id="Testimonails">
      <h1>Testimonails</h1>
      <div className="Container">
        {data.map((d) => (
          <div className={d.featured ? 'Card featured' : 'Card'}>
            <div className="Top">
              <img src="assets/right-arrow.png" className="Left" alt="" />
              <img src={d.img} className="User" alt="" />
              <img src={d.icon} className="Right" alt="" />
            </div>
            <div className="Center">{d.desc}</div>
            <div className="Bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
