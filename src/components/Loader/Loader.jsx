import { useContext } from "react";
import { AuthContex } from "../../provider/AuthProvider";

const Loader = () => {
  const loading = useContext(AuthContex);
  return (
    <>
      {loading && (
        <div className="flex justify-center items-center h-[30vh]">
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      )}
    </>
  );
};

export default Loader;
