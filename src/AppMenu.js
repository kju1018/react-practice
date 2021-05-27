import { Link } from "react-router-dom";

function AppMenu() {
    return (
    <ul className="nav flex-column">
      <li className="nav-item">
        <h6 className="text-white">React Home</h6>
        <Link to="/" className="nav-link text-warning">Home</Link>
      </li>

      <li className="nav-item">
        <h6 className="text-white">JSX 복습</h6>
        <Link to="/parctice1/exam01" className="nav-link text-warning">Expressions</Link>
        <Link to="/parctice1/exam02" className="nav-link text-warning">Condition(조건식)</Link>
      </li>

      <li className="nav-item">
        <h6 className="text-white">Props, State 복습</h6>
        <Link to="/parctice2/exam01" className="nav-link text-warning">props 복습</Link>
      </li>

      <li className="nav-item">
        <h6 className="text-white">Global State 복습</h6>
        <Link to="/parctice8/exam01" className="nav-link text-warning">ColorContext 복습</Link>
        <Link to="/parctice8/exam03" className="nav-link text-warning">ColorRedux 복습</Link>
      </li>

    </ul>
    );
}

export default AppMenu;