//icons
import { IoLogoGoogle, IoIosLogIn } from "react-icons/io";

import { Form, Link, useActionData } from "react-router-dom";

import { useRegister } from "../hooks/useRegister";
import { useEffect, useState } from "react";
import { FormInput } from "../components";

import { toast } from "sonner";

import { useGoogle } from "../hooks/useGoogle";

function themeFromLocalStorage() {
  return localStorage.getItem("theme") || "winter";
}

export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");
  let displayName = formData.get("displayName");
  let photoURL = formData.get("photoURL");

  return { email, password, displayName, photoURL };
};

function Register() {
  const [theme, setTheme] = useState(themeFromLocalStorage());
  const handleTheme = () => {
    const newTheme = theme == "winter" ? "dracula" : "winter";
    setTheme(newTheme);
  };

  const [errorStatus, setErrorStatus] = useState({
    name: "",
    photoURL: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const userData = useActionData();
  const { registerWithEmail, isPending } = useRegister();

  useEffect(() => {
    if (userData) {
      if (
        userData.displayName &&
        userData.email &&
        userData.password &&
        userData.photoURL
      ) {
        registerWithEmail(
          userData.email,
          userData.password,
          userData.displayName,
          userData.photoURL
        );
      } else {
        toast.error("Please, enter all of them!");
      }

      if (userData.displayName == "") {
        setErrorStatus((prev) => {
          return { ...prev, name: "input-error" };
        });
      } else {
        setErrorStatus((prev) => {
          return { ...prev, name: "" };
        });
      }

      if (userData.password == "") {
        setErrorStatus((prev) => {
          return { ...prev, password: "input-error" };
        });
      } else {
        setErrorStatus((prev) => {
          return { ...prev, password: "" };
        });
      }

      if (userData.photoURL == "") {
        setErrorStatus((prev) => {
          return { ...prev, photoURL: "input-error" };
        });
      } else {
        setErrorStatus((prev) => {
          return { ...prev, photoURL: "" };
        });
      }

      if (userData.email == "") {
        setErrorStatus((prev) => {
          return { ...prev, email: "input-error" };
        });
      } else {
        setErrorStatus((prev) => {
          return { ...prev, email: "" };
        });
      }
    }
  }, [userData]);
  let { handleGoogle } = useGoogle();
  return (
    <>
      <video
        loop
        autoPlay
        muted
        className=" bg-cover h-screen absolute -z-10 opacity-70 object-cover w-full "
        src="/bg-login.mp4"
      ></video>
      <div className="grid place-items-center min-h-screen">
        <Form
          method="post"
          className="flex flex-col items-center gap-4 card bg-base-100 w-96 shadow-xl p-5"
        >
          <h1 className="text-4xl font-semibold">Register</h1>
          <FormInput
            type="text"
            name="displayName"
            labelText="displayName"
            status={errorStatus.name}
          />
          <FormInput
            type="url"
            name="photoURL"
            labelText="PhotoUrl"
            status={errorStatus.photoURL}
          />
          <FormInput
            type="email"
            name="email"
            labelText="email"
            status={errorStatus.email}
          />
          <FormInput
            type="password"
            name="password"
            labelText="password"
            status={errorStatus.password}
          />

          <div className="w-full">
            {!isPending && (
              <button className="btn btn-secondary btn-block">
                <IoIosLogIn />
                Submit
              </button>
            )}
            {isPending && (
              <button disabled className="btn btn-secondary btn-block">
                <IoIosLogIn />
                Loading...
              </button>
            )}
            <div class="my-1 border-b text-center">
              <div class="leading-none px-2 inline-block text-sm tracking-wide font-medium bg-base-100 transform translate-y-1/2">
                Or sign in with e-mail
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                handleGoogle();
              }}
              className="btn btn-secondary btn-block mt-2"
            >
              <IoLogoGoogle /> Sign in
            </button>
          </div>

          <div className="text-center">
            Already registered?{" "}
            <Link className="link link-secondary" to="/login">
              Login
            </Link>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Register;
