import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="menu">
      <Link to="/">Dashboard</Link>
      <Link to="/trello">Trello Clone</Link>
    </nav>
  );
};

export default Menu;