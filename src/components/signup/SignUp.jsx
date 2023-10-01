import { NavLink } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import auth from "../../firebase/firebaseInt";

const SignUp = () => {
  const [massage, setMassege] = useState([]);

  // const auth = getAuth(app);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepter = e.target.terms.checked;

    console.log(accepter);

    if (password.length < 6) {
      setMassege([
        {
          message: "Password should be at least 6 characters",
          color: "red",
        },
      ]);
      return;
    } else if (!accepter) {
      setMassege([
        {
          message: "Please Accept our Terms and Conditions",
          color: "red",
        },
      ]);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);

        updateProfile(user, {
          displayName: "Jane Q. User",
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            // Profile updated!
            console.log("Updated profile");
            // ...
          })
          .catch((error) => {
            console.log(error);
            // An error occurred
            // ...
          });

        sendEmailVerification(user).then(() => {
          // Email verification sent!
          alert("Verification sent");
          // ...
        });
        setMassege([
          {
            message: "Sign up Complete",
            color: "green",
          },
        ]);
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;

        setMassege([
          {
            message: errorMessage,
            color: "red",
          },
        ]);
        // ..
      });
  };

  return (
    <div>
      <div className="signup-1 flex items-center relative h-screen outline-0">
        <div className="overlay absolute inset-0 z-0 bg-black opacity-75"></div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 mx-auto">
            <div className="box bg-white p-6 md:px-12 md:pt-6 border-t-10 border-solid border-indigo-600 rounded-[2rem] border-t-[10px]">
              <h2 className="text-3xl text-gray-800 text-center">
                Create Your Account
              </h2>
              {massage && (
                <>
                  <div className="message mt-4 text-1xl flex justify-center font-bold">
                    {massage.map((msg, idx) => {
                      return (
                        <div
                          className={`text-${msg.color}-600`}
                          key={idx}
                          style={{
                            color: msg.color,
                          }}
                        >
                          {msg.message}
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
              <form onSubmit={handleRegister}>
                <div className="signup-form mt-6 md:mt-7">
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
                        name="email"
                        className="h-10 py-1 pr-3 w-full"
                        required
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
                        className="h-10 py-1 pr-3 w-full"
                        required
                      />
                    </div>
                  </div>

                  <p className="text-sm text-center mt-6">
                    <input type="checkbox" name="terms" id="terms" /> By signing
                    up, you agree to our{" "}
                    <a href="#" className="text-indigo-600 hover:underline">
                      Terms
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-indigo-600 hover:underline">
                      Privacy Policy
                    </a>
                  </p>

                  <div className="text-center mt-4 md:mt-7">
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xl py-2 px-4 md:px-6 rounded transition-colors duration-300">
                      Sign Up <span className="far fa-paper-plane ml-2"></span>
                    </button>
                  </div>
                </div>
              </form>

              <div className="border-t border-solid mt-6 md:mt-7 pt-4">
                <p className="text-gray-500 text-center">
                  Already have an account,{" "}
                  <NavLink
                    to="/login"
                    className="text-indigo-600 hover:underline"
                  >
                    Sign In
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
