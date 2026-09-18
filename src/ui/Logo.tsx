import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img src="/shared/desktop/logo.svg" alt="photosnap logo" />
    </Link>
  );
}

export default Logo;
