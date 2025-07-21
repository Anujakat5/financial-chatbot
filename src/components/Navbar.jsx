import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">MyBank</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {['/', '/transactions', '/creditscore', '/learning', '/customercare'].map((path, i) => (
            <li className="nav-item" key={path}>
              <Link className="nav-link" to={path}>
                {['Home', 'Transaction', 'CreditScore', 'Learning', 'Customer Care'][i]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
