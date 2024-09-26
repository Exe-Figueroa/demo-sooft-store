import { useContext } from "react";
import { LogOut } from "../assets/icons/LogOut";
import { Plus } from "../assets/icons/Plus";
import { Button } from "../components/elements/Button";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { ProductItem } from "../components/ProductItem";
import { DataProvider } from "../context/DataContextProvider";
import { ProductsForm } from "../components/ProductsForm";

export const Admin = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Mouse",
      price: 25.99,
      imageUrl:
        "https://i.pinimg.com/736x/25/b5/30/25b530135b0c1327f8155f184420ad11.jpg",
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      price: 89.99,
      imageUrl:
        "https://i.pinimg.com/564x/59/f5/aa/59f5aa12bdbb8b49b7cf2e84c583b3e6.jpg",
    },
    {
      id: 3,
      name: "USB-C Hub",
      price: 35.5,
      imageUrl:
        "https://i.pinimg.com/564x/a7/4c/b4/a74cb49658ae0d4a076e5eac88a9e887.jpg",
    },
    {
      id: 4,
      name: "Gaming Headset",
      price: 79.95,
      imageUrl:
        "https://i.pinimg.com/564x/32/de/82/32de827d0fb2cecd793e6200302961d5.jpg",
    },
    {
      id: 5,
      name: "External SSD 1TB",
      price: 129.99,
      imageUrl:
        "https://i.pinimg.com/564x/df/0c/05/df0c052e658bc90fe6d2e25f6e69c0b9.jpg",
    },
    {
      id: 6,
      name: "Portable Charger",
      price: 45.0,
      imageUrl:
        "https://i.pinimg.com/564x/2f/b7/1f/2fb71f132748773724e1ca5d1c20497d.jpg",
    },
    {
      id: 7,
      name: "Smartwatch",
      price: 199.99,
      imageUrl:
        "https://i.pinimg.com/564x/ee/8f/fa/ee8ffa1b14212ff6676bbd414fffa468.jpg",
    },
  ];
  const { logOut, handleSeeProductForm } = useContext(DataProvider);
  return (
    <Layout>
      <Header>
        <Button
          onClick={logOut}
          className="font-bold text-white text-xl text-center hover:text-primaryViolet transition"
        >
          <LogOut />
        </Button>
      </Header>
      <ProductsForm />
      <main className="container mx-auto p-4">
        <Button
          className="mb-6 bg-black hover:bg-gray-800 text-white flex items-center py-1.5 px-3 rounded-lg font-semibold"
          onClick={() => handleSeeProductForm(true)}
        >
          <Plus className="mr-2 h-4 w-4" /> Añadir Producto
        </Button>
        <div className="space-y-4">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </main>
    </Layout>
  );
};
