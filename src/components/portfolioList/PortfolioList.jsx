import './portfolioList.css';

export default function PortfolioList({ id, title, Active, setSelected }) {
  return (
    <li
      className={Active ? 'portfolioList Active' : 'portfolioList'}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
