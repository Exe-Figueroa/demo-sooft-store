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
import { InputWithLabel } from "../InputWithLabel";

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
      <InputWithLabel
        icon={User}
        labelText="Email de usuario"
        type="email"
        required
        name="email"
        placeholder="Email de usuario"
        value={formData.email}
        onChange={handleChange}
      />
      <InputWithLabel
        icon={Lock}
        labelText="Contraseña"
        type="password"
        required
        name="password"
        placeholder="Contraseña"
        value={formData.password}
        onChange={handleChange}
      />
      <Button
        disabled={!enabledSubmit}
        className="bg-primaryGreen hover:shadow transition text-white flex items-center py-1.5 px-3 rounded-lg font-semibold w-full justify-center"
      >
        Iniciar Sesion
      </Button>
    </form>
  );
};
