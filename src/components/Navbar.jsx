import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../app/userSlice";
import { IoMdSunny, IoMdMoon } from "react-icons/io";

function themeFromLocalStorage() {
  return localStorage.getItem("theme") || "winter";
}

function Navbar() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { totalCars, totalPrice } = useSelector((state) => state.cart);
  console.log(totalCars, totalPrice);
  const [theme, setTheme] = useState(themeFromLocalStorage());
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await signOut(auth);
      toast.success(`See you soon, ${user.displayName}`);
      dispatch(logout());
      navigate("/register");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleTheme = () => {
    const newTheme = theme === "winter" ? "dracula" : "winter";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <div className="bg-base-300">
        <div className="navbar site-container">
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost text-xl">
              CarStore
            </Link>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">
                    {totalCars}
                  </span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold"></span>
                  <span className="text-info">Subtotal: ${totalPrice}</span>
                  <div className="card-actions">
                    <Link className="btn btn-secondary btn-block" to="/cart">
                      View cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <label className="btn btn-ghost btn-circle swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input
                  onClick={handleTheme}
                  type="checkbox"
                  checked={theme === "dracula"}
                  readOnly
                />
                {/* sun icon */}
                <IoMdSunny className="swap-on fill-current w-7 h-7" />
                {/* moon icon */}
                <IoMdMoon className="swap-off fill-current w-7 h-7" />
              </label>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    src={
                      user.photoURL
                        ? user.photoURL
                        : `https://api.dicebear.com/9.x/initials/svg?seed=${user.displayName}`
                    }
                    alt=""
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/createmodal" className="justify-between">
                    Create Modal
                    <span className="badge">New</span>
                  </Link>
                </li>
                {/* <li>
                  <Link to="/rating" className="justify-between">
                    Car's rating
                  </Link>
                </li> */}
                <li>
                  <Link to="/cart" className="justify-between">
                    Shopping cart
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="justify-between">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setShowLogoutModal(true)}>Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {showLogoutModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-base-100 p-6 rounded-lg shadow-md max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold mb-4">Confirm Logout</h2>
            <p>Are you sure you want to log out?</p>
            <div className="flex justify-between mt-4">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
                onClick={() => setShowLogoutModal(false)}
              >
                Cancel
              </button>
              <button className="px-4 py-2 btn btn-secondary" onClick={logOut}>
                Yes, Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
