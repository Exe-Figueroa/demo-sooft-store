import { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { useNotification } from "../../hooks/useNotification";
import { Button } from "../elements/Button";
import { InputWithLabel } from "../InputWithLabel";
import { DataProvider } from "../../context/DataContextProvider";

export const ProductsForm = ({
  productService,
  imageService,
  handleReload,
  initialValues,
}) => {
  const [urlPreview, setUrlPreview] = useState(
    initialValues ? initialValues.image_url : ""
  );
  useEffect(() => {
    setUrlPreview(initialValues ? initialValues.image_url : "");
  }, [initialValues]);
  const [image, setImage] = useState("");
  const fileInputRef = useRef(null);

  const { seeProductForm, handleSeeProductForm } = useContext(DataProvider);
  const handleUrlPreview = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const objectUrl = URL.createObjectURL(file);
      setUrlPreview(objectUrl);
    }
  };

  const { handleNotify } = useNotification({
    start: "Cargando Producto",
    success: "Producto Cargado correctamente",
    error: "Error al cargar el producto",
  });

  const onSubmit = async () => {
    try {
      let newProduct;
      if (initialValues.id) {
        const productToUpdate = {
          ...formData,
        };
        if (image) {
          const { id, url } = await imageService.updateImage(
            initialValues.image_id,
            image
          );
          productToUpdate.image_url = url;
          productToUpdate.image_id = id;
        }
        newProduct = await productService.updateProduct(
          initialValues.id,
          productToUpdate
        );
      } else {
        const { id, url } = await imageService.createImage(image);
        newProduct = await productService.createProduct({
          ...formData,
          image_id: id,
          image_url: url,
        });
      }
      return newProduct;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const onFinish = () => {
    handleSeeProductForm(false);
    handleReload();
    setImage("");
    setUrlPreview("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const { enabledSubmit, formData, handleChange, handleSubmit } = useForm({
    onNotify: handleNotify,
    initialValues,
    onSubmit,
    onFinish,
  });

  return (
    <div
      className={`w-screen h-screen fixed top-0 ${
        seeProductForm ? "backdrop-blur-sm bg-black/30 z-50" : "-z-50"
      } `}
    >
      <form
        onSubmit={handleSubmit}
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white transition flex flex-col gap-2 p-6 rounded-lg w-full max-w-md ${
          seeProductForm ? "scale-100" : "scale-0"
        }`}
      >
        {urlPreview && (
          <img src={urlPreview} width={300} alt="Image of product" />
        )}
        <input
          type="file"
          required={!initialValues.id}
          name="image"
          placeholder="Imagen de producto"
          onChange={handleUrlPreview}
          ref={fileInputRef}
        />
        <InputWithLabel
          type="text"
          required
          name="name"
          value={formData.name}
          placeholder="Nombre del producto"
          className="pl-4"
          onChange={handleChange}
        />
        <InputWithLabel
          type="number"
          required
          name="price"
          value={formData.price}
          placeholder="Precio"
          className="pl-4"
          onChange={handleChange}
        />
        <div className="flex items-center gap-3 w-full">
          <Button
            disabled={!enabledSubmit}
            className="text-center w-full bg-primaryGreen text-white py-1.5 px-3 rounded-lg font-semibold text-lg hover:shadow-lg transition "
          >
            Confirmar
          </Button>
          <Button
            disabled={!enabledSubmit}
            type="button"
            className="text-red-600 hover:text-red-700 border-red-600 transition md:hover:bg-red-600 duration-300 md:hover:text-white p-2 outline outline-1 rounded-md w-full"
            onClick={() => handleSeeProductForm(false)}
          >
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  );
};
