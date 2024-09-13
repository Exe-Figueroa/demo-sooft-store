import { X } from "../../assets/icons/X";
import { Button } from "../elements/Button";

export const OrderHeader = () => {
  return (
    <div className="p-4 bg-[#9ACA3C] text-white flex justify-between items-center">
      <h2 className="text-xl font-bold">Orden de Compra</h2>
      <Button
        // onClick={() => setIsOpen(false)}
        className="flex items-center justify-center"
      >
        <X className="size-6 stroke-[2px] hover:rotate-90 transition hover:text-primaryViolet" />
      </Button>
    </div>
  );
};
