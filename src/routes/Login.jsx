import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { LoginForm } from "../components/LoginForm";


export const Login = () => {
  return (
    <Layout>
      <Header />
      <main className="w-full h-auto flex flex-col gap-3 items-center justify-center relative my-auto">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">Panel de administrador</h2>
          <p className="text-center text-sm text-gray-600">Ingrese sus datos para iniciar sesión</p>
        </div>
        <LoginForm />
      </main>
      <Footer />
    </Layout>
  );
};
