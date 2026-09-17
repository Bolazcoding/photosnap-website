import { Link } from "react-router-dom";
import Cta from "./Cta";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black">
      <div className="page-container flex items-center justify-between py-15">
        <div className="flex gap-28">
          <div className="flex flex-col justify-between">
            <img src="/shared/desktop/footer-logo.svg" alt="footer logo" />

            <div className="">
              {/* <MoveRight color={ctaColor} size={34} /> */}
              <img src="/shared/desktop/facebook.svg" alt="facebook" />
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
