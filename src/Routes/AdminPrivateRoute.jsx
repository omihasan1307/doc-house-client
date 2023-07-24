import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import useAdmin from "../hooks/useAdmin";
import { Navigate } from "react-router-dom";

const AdminPrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [data, isLoading] = useAdmin();

  if (loading && isLoading) {
    return <p>loading................</p>;
  }
  if (user && data?.role === "admin") {
    return children;
  } else {
    return <Navigate to="/"></Navigate>;
  }
};

export default AdminPrivateRoute;
