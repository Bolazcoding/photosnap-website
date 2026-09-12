import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  className?: string;
  linkTo: string;
  ctaColor: string;
};

// type Props = {
//   children: React.ReactNode;
//   className?: string;
//   type?: "button" | "submit" | "reset";
//   disabled?: boolean;
//   onClick?: () => void;
// };

function Cta({ children, className, linkTo, ctaColor }: Props) {
  return (
    <div className={`${className} flex items-center gap-5`}>
      <Link
        to={linkTo}
        className={`text-[0.8em] font-semibold tracking-widest uppercase cursor-pointer`}
      >
        {children}
      </Link>
      <MoveRight color={ctaColor} size={34} />
    </div>
  );
}

export default Cta;
