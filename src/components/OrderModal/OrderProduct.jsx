import { Minus } from "../../assets/icons/Minus";
import { Plus } from "../../assets/icons/Plus";
import { Trash } from "../../assets/icons/Trash";
import { Button } from "../elements/Button";

export const OrderProduct = () => {
  return (
    <div
      // key={product.id}
      className="flex items-center justify-between py-2 border-b"
    >
      <div className="flex-grow">
        <h3 className="font-semibold">product asda sdasa</h3>
        <p className="text-sm text-gray-600">$30</p>
      </div>
      <div className="flex items-center space-x-2">
        <Button
          // onClick={() => alert("holaaa")}
          className="text-gray-500 hover:text-gray-700"
        >
          <Minus className="" />
        </Button>
        <span className="w-8 text-center">1</span>
        <Button
          // onClick={() => updateQuantity(product.id, 1)}
          className="text-gray-500 hover:text-gray-700"
        >
          <Plus  />
        </Button>
        <Button
          // onClick={() => removeProduct(product.id)}
          className="text-red-500 hover:text-red-700 ml-2"
        >
          <Trash className="stroke-[2px]" />
        </Button>
      </div>
    </div>
  );
};
