import { Link } from "react-router-dom";

export const Header = ({children}) => {
  return (
    <header className="w-full bg-primaryGreen py-4 px-2 flex justify-between items-center rounded-b-xl shadow-sm sticky top-0">
      <Link to="/" className="w-[130px] bg-contain bg-center bg-no-repeat bg-isologoViolet hover:bg-isologoWhite h-8 flex  transition"></Link>
      {children}
    </header>
  );
};
