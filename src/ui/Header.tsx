import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
    <motion.header
      className="relative z-50 bg-white"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="page-container flex items-center justify-between px-6 py-7 md:px-0"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1, delayChildren: 0.18 } },
        }}
      >
        <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
          <Logo />
        </motion.div>

        <motion.div
          className="hidden md:block"
          variants={{ hidden: { opacity: 0, y: -8 }, visible: { opacity: 1, y: 0 } }}
        >
          <NavBar />
        </motion.div>

        <motion.div
          className="hidden md:block"
          variants={{ hidden: { opacity: 0, x: 12 }, visible: { opacity: 1, x: 0 } }}
        >
          <Link
            to="/"
            className="bg-black px-8 py-2.5 text-sm font-semibold tracking-widest text-white transition-colors hover:bg-neutral-700"
          >
            Get an invite
          </Link>
        </motion.div>

        <motion.button
          type="button"
          className="grid size-6 place-items-center md:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          whileTap={{ scale: 0.88 }}
        >
          <img
            src={isMenuOpen ? "/shared/mobile/close.svg" : "/shared/mobile/menu.svg"}
            alt=""
          />
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && (
        <motion.div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full bg-white px-6 pb-8 pt-4 shadow-[0_18px_24px_rgba(0,0,0,0.12)] md:hidden"
          initial={{ opacity: 0, height: 0, y: -8 }}
          animate={{ opacity: 1, height: "auto", y: 0 }}
          exit={{ opacity: 0, height: 0, y: -8 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.35 }}
          >
            <NavBar mobile onNavigate={() => setIsMenuOpen(false)} />
          </motion.div>
          <div className="my-5 h-px bg-neutral-200" />
          <Link
            to="/"
            className="block bg-black py-3 text-center text-sm font-semibold tracking-widest text-white transition-colors hover:bg-neutral-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Get an invite
          </Link>
        </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
