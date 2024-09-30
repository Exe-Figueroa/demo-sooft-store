import { Pencil } from "../../assets/icons/Pencil";
import { Trash } from "../../assets/icons/Trash";
import { useNotification } from "../../hooks/useNotification";
import { Button } from "../elements/Button";

export const ProductItem = ({
  product,
  productService,
  imageService,
  handleReload,
  editProduct,
}) => {
  const { handleNotify } = useNotification({
    start: "Eliminando producto",
    success: "Producto eliminado correctamente!",
    error:
      "Error al eliminar el producto, por favor vuelva a intentarlo más tarde.",
  });
  const handleDelete = () => {
    handleNotify("start");
    imageService
      .deleteImage(product.image_id)
      .then(() => {
        productService
          .deleteProduct(product.id)
          .then(() => {
            handleNotify("success");
            handleReload();
          })
          .catch((e) => {
            handleNotify("error");
            console.error("error al eliminar el producto: ", e);
          });
      })
      .catch((e) => {
        handleNotify("error");
        console.error("error al eliminar la imagen: ", e);
      })
      .finally(() => handleNotify("finish"));
  };
  return (
    <div
      key={product.id}
      className="flex items-center justify-between p-4 border rounded-lg shadow-sm"
    >
      <div className="flex items-center justify-center gap-4">
        <img
          src={product.image_url}
          alt={`image ${product.name}`}
          className="w-24 hidden md:block"
        />
        <div>
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-700 font-bold">${product.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="space-x-2 flex">
        <Button
          className="text-blue-600 hover:text-blue-700 border-blue-600 transition md:hover:bg-blue-600 duration-300 md:hover:text-white p-2 outline outline-1 rounded-md flex items-center justify-center gap-1"
          onClick={editProduct}
        >
          <Pencil className="h-4 w-4 stroke-[2px]" />
          <span className="hidden md:block">Editar</span>
        </Button>
        <Button
          onClick={handleDelete}
          className="text-red-600 hover:text-red-700 border-red-600 transition md:hover:bg-red-600 duration-300 md:hover:text-white p-2 outline outline-1 rounded-md flex items-center justify-center gap-1"
        >
          <Trash className="h-4 w-4 stroke-[2px]" />
          <span className="hidden md:block">Eliminar</span>
        </Button>
      </div>
    </div>
  );
};
