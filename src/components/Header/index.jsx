export const Header = ({children}) => {
  return (
    <header className="w-full bg-primaryGreen py-4 px-2 flex justify-between items-center rounded-b-xl shadow-sm sticky top-0">
      <span className="w-[130px] bg-contain bg-center bg-no-repeat bg-isologoViolet hover:bg-isologoWhite h-8 flex  transition"></span>
      {children}
    </header>
  );
};
