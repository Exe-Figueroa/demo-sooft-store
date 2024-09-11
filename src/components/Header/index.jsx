import { useContext } from 'react';
import { ShoppingCart } from '../../assets/icons/ShoppingCart';
import { DataProvider } from '../../context/DataContextProvider';

export const Header = () => {
  const {order} = useContext(DataProvider);
  console.log(order.length);
  
  return (
    <header className="w-full bg-primaryGreen py-4 px-2 flex justify-between items-center rounded-b-xl shadow-sm">
        <span className="w-[130px] bg-contain bg-center bg-no-repeat bg-isologoViolet hover:bg-isologoWhite h-8 flex  transition"></span>
        <button className="flex items-center justify-center relative">
          <span className='absolute top-0 right-0 -translate-y-1/2'>{order.length}</span>
          <ShoppingCart className="text-white size-8 hover:text-primaryViolet transition"/>
        </button>
      </header>
  );
};
