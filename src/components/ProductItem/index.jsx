import { Pencil } from "../../assets/icons/Pencil";
import { Trash } from "../../assets/icons/Trash";
import { Button } from "../elements/Button";

export const ProductItem = ({product}) => {
  return (
    <div
      key={product.id}
      className="flex items-center justify-between p-4 border rounded-lg shadow-sm"
    >
      <div className="flex items-center justify-center gap-4">
        <img src={product.imageUrl} alt="" className="w-24 hidden md:block" />
        <div>
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-700 font-bold">${product.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="space-x-2 flex">
        <Button className="text-blue-600 hover:text-blue-700 border-blue-600 md:text-white md:bg-blue-600 md:hover:bg-blue-700 p-2 outline outline-1 rounded-md flex items-center justify-center gap-1">
          <Pencil className="h-4 w-4 stroke-[2px]" />
          <span className="hidden md:block">Editar</span>
        </Button>
        <Button className="text-red-600 hover:text-red-700 border-red-600 p-2 outline outline-1 rounded-md flex items-center justify-center gap-1">
          <Trash className="h-4 w-4 stroke-[2px]" />
          <span className="hidden md:block">Eliminar</span>
        </Button>
      </div>
    </div>
  );
};
