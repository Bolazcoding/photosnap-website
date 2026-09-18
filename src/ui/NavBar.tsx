import { NavLink } from "react-router-dom";

type NavBarProps = {
  mobile?: boolean;
  onNavigate?: () => void;
};

const navigationLinks = [
  { label: "Stories", to: "/stories" },
  { label: "Features", to: "/features" },
  { label: "Pricing", to: "/pricing" },
];

function NavBar({ mobile = false, onNavigate }: NavBarProps) {
  return (
    <nav aria-label="Primary navigation">
      <ul
        className={
          mobile
            ? "flex flex-col items-center gap-5 uppercase text-[15px] font-bold tracking-widest"
            : "flex justify-center gap-10 uppercase text-[13px] font-bold tracking-widest"
        }
      >
        {navigationLinks.map(({ label, to }) => (
          <li key={to}>
            <NavLink
              to={to}
              onClick={onNavigate}
              className="transition-colors hover:text-neutral-500"
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
