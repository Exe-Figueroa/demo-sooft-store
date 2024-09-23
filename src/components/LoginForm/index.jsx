import { Lock } from "../../assets/icons/Lock";
import { User } from "../../assets/icons/User";
import { Button } from "../elements/Button";
import { useForm } from "../../hooks/useForm";
import { useNotification } from "../../hooks/useNotification";
import { AuthService } from "../../auth-management/application/auth.service";
import { AuthSupabaseRepository } from "../../auth-management/infraestructure/auth.repository";
import { supabaseClient } from "../../libs/supabaseConnection";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataProvider } from "../../context/DataContextProvider";

const authService = new AuthService(new AuthSupabaseRepository(supabaseClient));

export const LoginForm = () => {
  const navigate = useNavigate();
  const { newUserSession } = useContext(DataProvider);
  const initialValues = { email: "", password: "" };
  const { handleNotify } = useNotification({
    start: "Iniciando sesión",
    success: "Inicio de sesión correctamente",
    error: "Error al iniciar sesión. Por favor vuelva a intentarlo más tarde",
  });
  const onSubmit = async () => {
    const session = await authService.signIn(formData.email, formData.password);
    newUserSession(session);
  };
  const onFinish = () => {
    return navigate("/admin");
  };
  const { enabledSubmit, formData, handleChange, handleSubmit } = useForm({
    initialValues,
    onNotify: handleNotify,
    onSubmit,
    onFinish,
  });
  return (
    <form
      className="flex flex-col gap-4 items-center shadow-lg p-5 rounded-lg"
      onSubmit={handleSubmit}
    >
      <label className="flex flex-col gap-2">
        <p>Email de usuario</p>
        <div className="flex  gap-2 items-center relative">
          <User className="absolute left-0 pl-3 flex items-center pointer-events-none size-7" />
          <input
            type="email"
            name="email"
            placeholder="Email de usuario"
            autoComplete="off"
            required
            value={formData.email ?? ""}
            className="pl-10 py-2 pr-4 w-full border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out outline-none border border-solid"
            onChange={({ target: { value } }) =>
              handleChange({ name: "email", value })
            }
          />
        </div>
      </label>
      <label className="flex flex-col gap-2">
        <p>Contraseña</p>
        <div className="flex  gap-2 items-center relative">
          <Lock className="absolute left-0 pl-3 flex items-center pointer-events-none size-7" />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            autoComplete="off"
            required
            value={formData.password ?? ""}
            className="pl-10 py-2 pr-4 w-full border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out outline-none border border-solid"
            onChange={({ target: { value } }) =>
              handleChange({ name: "password", value })
            }
          />
        </div>
      </label>
      <Button
        disabled={!enabledSubmit}
        className="bg-primaryGreen hover:shadow transition text-white flex items-center py-1.5 px-3 rounded-lg font-semibold w-full justify-center"
      >
        Iniciar Sesion
      </Button>
    </form>
  );
};
