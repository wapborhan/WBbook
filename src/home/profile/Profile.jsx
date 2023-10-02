import { useContext } from "react";
import { AuthContex } from "../../provider/AuthProvider";
import "./profile.css";

const Profile = () => {
  const { user } = useContext(AuthContex);

  console.log(user);

  return (
    <div className="profile">
      <div className="card">
        <form>
          <label className="custom-file-upload fas">
            <div className="img-wrap">
              <img src={user?.photoURL} alt="" />
            </div>
          </label>
          <div className="name">{user?.displayName}</div>
          <div className="status">{user?.email}</div>
          <div className="status2">{user?.metadata?.creationTime}</div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
