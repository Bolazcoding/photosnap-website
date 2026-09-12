import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul className="flex justify-center gap-10 uppercase text-[13px] font-bold tracking-widest">
        <NavLink to="/stories">
          <li>Stories</li>
        </NavLink>
        <NavLink to="/features">
          <li>Features</li>
        </NavLink>
        <NavLink to="/pricing">
          <li>Pricing</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;
