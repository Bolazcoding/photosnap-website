import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import NavBar from "./NavBar";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const desktopBreakpoint = window.matchMedia("(min-width: 768px)");
    const closeMenuOnDesktop = () => {
      if (desktopBreakpoint.matches) {
        setIsMenuOpen(false);
      }
    };

    closeMenuOnDesktop();
    desktopBreakpoint.addEventListener("change", closeMenuOnDesktop);

    return () => desktopBreakpoint.removeEventListener("change", closeMenuOnDesktop);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeMenuOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", closeMenuOnEscape);
    return () => document.removeEventListener("keydown", closeMenuOnEscape);
  }, [isMenuOpen]);

  return (
    <header className="relative z-50 bg-white">
      <div className="page-container flex items-center justify-between px-6 py-7 md:px-0">
        <Logo />

        <div className="hidden md:block">
          <NavBar />
        </div>

        <Link
          to="/"
          className="hidden bg-black px-8 py-2.5 text-sm font-semibold tracking-widest text-white transition-colors hover:bg-neutral-700 md:block"
        >
          Get an invite
        </Link>

        <button
          type="button"
          className="grid size-6 place-items-center md:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <img
            src={isMenuOpen ? "/shared/mobile/close.svg" : "/shared/mobile/menu.svg"}
            alt=""
          />
        </button>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full bg-white px-6 pb-8 pt-4 shadow-[0_18px_24px_rgba(0,0,0,0.12)] md:hidden"
        >
          <NavBar mobile onNavigate={() => setIsMenuOpen(false)} />
          <div className="my-5 h-px bg-neutral-200" />
          <Link
            to="/"
            className="block bg-black py-3 text-center text-sm font-semibold tracking-widest text-white transition-colors hover:bg-neutral-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Get an invite
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
