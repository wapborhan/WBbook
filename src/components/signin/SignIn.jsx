import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebaseInt";
import { useContext, useState } from "react";
import { AuthContex } from "../../provider/AuthProvider";

const SignIn = () => {
  const [user, setUser] = useState(null);

  const { signinUser, signinWithGoogle } = useContext(AuthContex);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signinUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handeGoogleSignIn = () => {
    signinWithGoogle()
      .then((result) => {
        // console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="signup-1 flex items-center relative h-screen">
      <div className="overlay absolute inset-0 z-0 bg-black opacity-75"></div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 mx-auto">
          <div className="box bg-white p-6 md:px-12 md:pt-12 border-t-10 border-solid border-indigo-600 rounded-[2rem] border-t-[10px]">
            <h2 className="text-3xl text-gray-800 text-center">Login</h2>
            {user && (
              <div className="mt-3">
                Logged in User Email: <h1 className="inline">{user.email}</h1>
              </div>
            )}

            <form onSubmit={handleRegister}>
              <div className="signup-form mt-6 md:mt-12">
                <div className="border-2 border-solid rounded flex items-center mb-4">
                  <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
                    <span className="far fa-envelope text-gray-500">
                      <svg
                        viewBox="0 0 8 6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#888"
                        width="20px"
                      >
                        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
                      </svg>
                    </span>
                  </div>
                  <div className="flex-1">
                    <input
                      type="email"
                      placeholder="E-mail"
                      defaultValue="borhanuddin979@gmail.com"
                      name="email"
                      className="h-10 py-1 pr-3 w-full"
                    />
                  </div>
                </div>

                <div className="border-2 border-solid rounded flex items-center mb-4">
                  <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
                    <span className="fas fa-asterisk text-gray-500">
                      <svg
                        width="20"
                        height="40"
                        viewBox="0 0 36 40"
                        fill="#888"
                      >
                        <path
                          className="lockb"
                          d="M27 27C27 34.1797 21.1797 40 14 40C6.8203 40 1 34.1797 1 27C1 19.8203 6.8203 14 14 14C21.1797 14 27 19.8203 27 27ZM15.6298 26.5191C16.4544 25.9845 17 25.056 17 24C17 22.3431 15.6569 21 14 21C12.3431 21 11 22.3431 11 24C11 25.056 11.5456 25.9845 12.3702 26.5191L11 32H17L15.6298 26.5191Z"
                        ></path>
                        <path
                          className="lock"
                          d="M6 21V10C6 5.58172 9.58172 2 14 2V2C18.4183 2 22 5.58172 22 10V21"
                        ></path>
                        <path className="bling" d="M29 20L31 22"></path>
                        <path className="bling" d="M31.5 15H34.5"></path>
                        <path className="bling" d="M29 10L31 8"></path>
                      </svg>
                    </span>
                  </div>
                  <div className="flex-1">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      defaultValue="123456"
                      className="h-10 py-1 pr-3 w-full"
                    />
                  </div>
                </div>

                <div className="text-center mt-6 md:mt-12">
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xl py-2 px-4 md:px-6 rounded transition-colors duration-300">
                    Sign In <span className="far fa-paper-plane ml-2"></span>
                  </button>
                </div>
              </div>
            </form>
            <div className="text-center mt-2 md:mt-3">
              <button
                onClick={handeGoogleSignIn}
                className="bg-blue-600 hover:bg-green-700 text-white text-xl py-2 px-4 md:px-6 rounded transition-colors duration-300"
              >
                Sign In on Google
              </button>
            </div>
            <div className="border-t border-solid mt-6 md:mt-12 pt-4">
              <p className="text-gray-500 text-center">
                Have not an account,{" "}
                <NavLink
                  to="/register"
                  className="text-indigo-600 hover:underline"
                >
                  Sign UP
                </NavLink>
              </p>{" "}
              <p className="text-gray-500 text-center">
                Have not an account,{" "}
                <NavLink
                  to="/forgotpassword"
                  className="text-indigo-600 hover:underline"
                >
                  Forgot Pass
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
