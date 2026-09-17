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
      <div className="page-container flex items-center justify-between py-15">
        <div className="flex gap-28">
          <div className="flex flex-col justify-between">
            <img src="/shared/desktop/footer-logo.svg" alt="footer logo" />

            <div className="flex items-center gap-2.5">
              <div className="flex h-[1.5rem] w-[1.5rem] cursor-pointer items-center justify-center rounded-full bg-white hover:bg-gradient-facebook">
                <FaFacebookF color="black" size={20} />
              </div>
              <div className="flex h-[1.5rem] w-[1.5rem] cursor-pointer items-center justify-center rounded-full bg-white hover:bg-fb">
                <FaYoutube color="black" size={20} />
              </div>
              <div className="flex h-[1.5rem] w-[1.5rem] cursor-pointer items-center justify-center rounded-full bg-white hover:bg-fb">
                <FaTwitter color="black" size={20} />
              </div>
              <div className="flex h-[1.5rem] w-[1.5rem] cursor-pointer items-center justify-center rounded-full bg-white hover:bg-fb">
                <FaPinterest color="black" size={20} />
              </div>
              <div className="flex h-[1.5rem] w-[1.5rem] cursor-pointer items-center justify-center rounded-full bg-white hover:bg-fb">
                <FaInstagram color="black" size={20} />
              </div>
            </div>
          </div>
          <nav>
            <ul className="flex flex-col justify-center gap-5 uppercase text-[13px] text-white font-bold tracking-widest">
              <Link to="/home">
                <li>Home</li>
              </Link>
              <Link to="/stories">
                <li>Stories</li>
              </Link>
              <Link to="/features">
                <li>Features</li>
              </Link>
              <Link to="/pricing">
                <li>Pricing</li>
              </Link>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col gap-20">
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
