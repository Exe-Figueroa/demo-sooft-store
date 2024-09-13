import { X } from "../../assets/icons/X";
import { Button } from "../elements/Button";

export const OrderHeader = ({handleSeeOrderModal}) => {
  return (
    <div className="p-4 bg-primaryGreen text-white flex justify-between items-center shadow-sm">
      <h2 className="text-xl font-bold">Orden de Compra</h2>
      <Button
        onClick={() => handleSeeOrderModal(false)}
        className="flex items-center justify-center"
      >
        <X className="size-6 stroke-[2px] hover:rotate-90 transition hover:text-primaryViolet" />
      </Button>
    </div>
  );
};
