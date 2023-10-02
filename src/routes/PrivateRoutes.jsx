import { useContext } from "react";
import { AuthContex } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContex);

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  if (user) {
    return children;
  }

  console.log(user);
  return <Navigate to="/login" />;
};

export default PrivateRoutes;
