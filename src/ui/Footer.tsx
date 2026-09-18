import { Link } from "react-router-dom";
import Cta from "./Cta";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black">
      <div className="page-container flex flex-col items-center gap-10 px-6 py-14 text-center sm:px-10 md:flex-row md:items-stretch md:justify-between md:gap-12 md:py-16 md:text-left lg:px-0">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-stretch md:gap-12 lg:gap-28">
          <div className="flex flex-col items-center gap-8 md:min-h-[122px] md:items-start md:justify-between">
            <Link to="/" aria-label="Photosnap home">
              <img src="/shared/desktop/footer-logo.svg" alt="Photosnap" />
            </Link>

            <div className="flex items-center gap-2.5" aria-label="Social media links">
              <button
                type="button"
                aria-label="Facebook"
                className="grid size-7 place-items-center rounded-full bg-white transition-transform hover:scale-110"
              >
                <FaFacebookF color="black" size={18} />
              </button>
              <button
                type="button"
                aria-label="YouTube"
                className="grid size-7 place-items-center rounded-full bg-white transition-transform hover:scale-110"
              >
                <FaYoutube color="black" size={18} />
              </button>
              <button
                type="button"
                aria-label="Twitter"
                className="grid size-7 place-items-center rounded-full bg-white transition-transform hover:scale-110"
              >
                <FaTwitter color="black" size={18} />
              </button>
              <button
                type="button"
                aria-label="Pinterest"
                className="grid size-7 place-items-center rounded-full bg-white transition-transform hover:scale-110"
              >
                <FaPinterest color="black" size={18} />
              </button>
              <button
                type="button"
                aria-label="Instagram"
                className="grid size-7 place-items-center rounded-full bg-white transition-transform hover:scale-110"
              >
                <FaInstagram color="black" size={18} />
              </button>
            </div>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-col items-center gap-5 text-[13px] font-bold uppercase tracking-widest text-white md:h-full md:items-start md:justify-center">
              <li>
                <Link to="/" className="transition-colors hover:text-white/50">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/stories" className="transition-colors hover:text-white/50">
                  Stories
                </Link>
              </li>
              <li>
                <Link to="/features" className="transition-colors hover:text-white/50">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="transition-colors hover:text-white/50">
                  Pricing
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex min-h-[122px] flex-col items-center justify-between gap-8 md:items-end">
          <Cta className="text-white" linkTo="/" ctaColor="white">
            Get an invite
          </Cta>
          <p className="text-white/50 text-[15px] font-medium">
            Copyright {year}. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
