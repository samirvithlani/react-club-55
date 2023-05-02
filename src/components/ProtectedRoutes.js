import { Outlet } from "react-router-dom";
import { StoreData } from "./employee/StoreData";

const useAuth = () => {
  if (
    localStorage.getItem("id") != null ||
    localStorage.getItem("id") != undefined
  ) {
    return true;
  } else {
    return false;
  }
};

const ProtectedRoutes = () => {
  const flag = useAuth();
  return flag ? <Outlet /> : <StoreData />;
};
export default ProtectedRoutes;
