import { At } from "../../assets/icons/At";
import { Instagram } from "../../assets/icons/Instagram";
import { WhatsApp } from "../../assets/icons/WhatsApp";

export const Footer = () => {
  return (
    <footer className="bg-primaryGreen w-full py-4 px-2 flex flex-col items-start justify-center gap-4 md:flex-row">
      <a href="mailto:SooftStoreMDZ@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
        <At className="text-white"/>
        SooftStoreMDZ@gmail.com
      </a>
      <a href="https://wa.me/+5492617155545?text=Hola,%20quiero%20más%20información" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
        <WhatsApp className="text-white"/>
        +54 261 715-5545
      </a>
      <a href="https://www.instagram.com/tienda.sooftstore/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
        <Instagram className="text-white"/>
        Tienda.sooftstore
      </a>
    </footer>
  );
};
