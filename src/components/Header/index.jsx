import { ShoppingCart } from '../../assets/icons/ShoppingCart';

export const Header = () => {
  return (
    <header className="w-full bg-primaryGreen py-4 px-2 flex justify-between items-center rounded-b-xl shadow-sm">
        <span className="w-[130px] bg-contain bg-center bg-no-repeat bg-isologoViolet hover:bg-isologoWhite h-8 flex  transition"></span>
        <button className="flex items-center justify-center">
          <ShoppingCart className="text-white size-8 hover:text-primaryViolet transition"/>
        </button>
      </header>
  );
};
