import { Link } from "react-router-dom";
import Logo from "./Logo";
import NavBar from "./NavBar";

function Header() {
  return (
    <header className="page-container flex items-center justify-between py-7">
      <Logo />
      <NavBar />
      <Link to="/" className="bg-black py-2.5 px-8">
        <button className="text-white text-sm font-semibold tracking-widest cursor-pointer">
          Get an invite
        </button>
      </Link>
    </header>
  );
}

export default Header;
