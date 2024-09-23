import { useContext, useEffect } from "react";
import { DataProvider } from "../../context/DataContextProvider";
import { useNavigate } from "react-router-dom";
import faceLogoViolet from "../../assets/faceLogoViolet.png"
export const AuthGuard = ({ children }) => {
  const { userSession, loadingSession } = useContext(DataProvider);

  const navigate = useNavigate();
  useEffect(() => {
    if (!userSession && !loadingSession) {
      navigate("/admin/login");
    }
  }, [loadingSession, userSession, navigate]);
  if (loadingSession) {
    return <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-4">
      <h1 className="font-extrabold text-3xl md:text-6xl">Sooft Store</h1>
      <img src={faceLogoViolet} alt="" className="animate-spin w-32 my-6 md:w-72 md:my-24" />
      <h3 className="text-xl">Cargando....</h3>
    </div>
  }
  return children;
};
