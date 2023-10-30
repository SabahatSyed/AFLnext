"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next-nprogress-bar";
import { Auth, Amplify } from "aws-amplify";
import awsconfig from "../../aws-exports";
import Loader from "@/components/Loader";

import { gql, useMutation } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useSearchParams } from "next/navigation";
import { AiOutlineClose } from "react-icons/ai";
import { deleteCustomer } from "@/api/shopifyapis";
Amplify.configure(awsconfig);
const query = gql`
  mutation RegisterAccount(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $acceptsMarketing: Boolean = false
  ) {
    customerCreate(
      input: {
        email: $email
        password: $password
        firstName: $firstName
        lastName: $lastName
        acceptsMarketing: $acceptsMarketing
      }
    ) {
      customer {
        id
      }
      customerUserErrors {
        code
        message
      }
    }
  }
`;
const getlogin = gql`
  mutation SignInWithEmailAndPassword($email: String!, $password: String!) {
    customerAccessTokenCreate(input: { email: $email, password: $password }) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        message
      }
    }
  }
`;
export default function Signup({ data }) {
  const params = useSearchParams().get("auth");
  const history = useRouter();
  const [email, setEmail] = useState("");
  const [hide,sethide]=useState(true)
  const [password, setPassword] = useState("");
  const [emailmsg, setemailmsg] = useState("");
  const [passwordmsg, setpasswordmsg] = useState("");
  const [msg, setmsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [customerid, setCustomerId] = useState("");
  const [pass, setPass] = useState("");
  const [registerCustomer, { data1, loading1, error }] = useMutation(query);
  const [login, { data2, loading2, error2 }] = useMutation(getlogin);
  const [token, setToken] = useState("");
  useEffect(() => {
    localStorage.setItem("customeraccesstoken", token);
  }, [token]);

  useEffect(() => {
    localStorage.setItem("customerId", customerid);
  }, [customerid]);
  useEffect(() => {
    localStorage.setItem("userpass", pass);
  }, [pass]);
  const handleRegistration = async (data) => {
    try {
      const response = await registerCustomer({
        variables: {
          email: data?.email,
          firstName: data?.first_name,
          lastName: data?.last_name,
          acceptsMarketing: true,
          password: data?.password,
        },
      });
      setPass(data?.password);
      setCustomerId(response.data.customerCreate.customer?.id);
      return true;
    } catch (error) {
      // Handle registration error
      console.error("Registration error:", error.message);
      return false;
    }
  };
  const handleSignup = async () => {
    setLoading(true);
    try {
      setmsg("");

      // Validate that all fields are filled
      if (!email || !password) {
        alert("Please fill in all fields");
        setLoading(false);
        return;
      }

      // Validate the email format
      if (!isValidEmail(email)) {
        setemailmsg("Invalid email format");
        setLoading(false);
        return;
      }

      // Validate password requirements
      if (!isValidPassword(password)) {
        setpasswordmsg(
          "Password must have at least 8 characters\n" +
            ", numbers \n" +
            ", special characters    \n" +
            ", upper case letters    "
        );
        setLoading(false);
        return;
      }

      // Check if password and confirm password match
      // Add a confirm password state and input in your component
      // For simplicity, assuming you have a state `confirmPassword`

      // Use Auth.signUp to create a new user
      if (passwordmsg == "" && emailmsg == "") {
        const obj = {
          email: email,
          phone: "",
          first_name: "",
          last_name: "",
          password: password,
        };

        if (handleRegistration(obj)) {
          await Auth.signUp({
            username: email,
            password: password,
            attributes: {
              email: email,
              phone_number: "",
              name: "",

              // You can add additional attributes here if needed
            },
          })
            .then((res) => {
              setmsg("Successfully Registered!!");
              setLoading(false)
            })
            .catch((err) => {
              setmsg("Registeration Failed");
              deleteCustomer(customerid)
            });
        } else {
          setmsg("Registeration Failed");
        }
      }

      // Optionally, you can redirect the user to a confirmation page
      // or show a confirmation message.
    } catch (error) {
      setmsg(error.message);
      console.error("Error signing up:", error);
      setLoading(false);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z]).{8,}$/;

    return passwordRegex.test(password);
  };

  return (
    <div className="bg-[url('/auth/bg.svg')] py-20 font-roboto">
      <div className="w-11/12 md:w-3/5 lg:w-2/5 rounded-3xl px-6 py-10 md:p-16 bg-white mx-auto flex flex-col gap-3 text-black relative">
        <Link href="/" className="absolute top-8 right-8">
          <img src="/auth/cross.svg" />
        </Link>
        <img src="/Home/logo.svg" className="h-28" />
        <p className="font-bold text-2xl text-center">Create Your Account</p>
        <p className="font-normal text-sm text-center">
          Create a new account to get information about the AFL and your
          favorite teams.
        </p>
        <div className="gap-2 flex flex-col">
          <label className="text-xs font-bold">Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
              setemailmsg("");
            }}
            value={email}
            placeholder={"jamesturner@gmail.com"}
            label={"Email"}
            className="h-8 p-6 bg-formbg text-formtext rounded-md"
          />
          <p className="text-xxs font-bold text-red-500">{emailmsg}</p>
        </div>
        <div className="gap-2 flex flex-col">
          <label className="text-xs font-bold">Password</label>
          <div className="h-8 p-6 bg-formbg text-formtext rounded-md flex justify-between items-center">
            <input
              type={hide ? "password" : "text"}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder={"*********"}
              className="bg-formbg outline-none "
            />
            <img
              onClick={() => sethide(!hide)}
              className="cursor-pointer"
              src="/auth/eye-off.svg"
            />
          </div>
          <p className="text-xxs font-bold text-red-500">{passwordmsg}</p>
        </div>
        <p
          className={`text-sm font-bold ${
            msg.includes("Successfully") ? "text-green-700" : "text-red-500"
          }`}>
          {msg}
        </p>
        <div className=" w-full font-medium text-xs flex flex-col items-center justify-center">
          <p>By signing up, you agree to our</p>
          <p>
            <span className="text-bgblue">Terms & Conditions</span> and
            <span className="text-bgblue"> Privacy Policy.</span>
          </p>
        </div>

        <button
          onClick={() => handleSignup()}
          className="bg-bgblue text-white uppercase p-4 rounded-md flex justify-center items-center"
          disabled={loading}>
          {loading ? (
            <>
              <Loader />
              Registering...
            </>
          ) : (
            <>Register</>
          )}
        </button>
        <p className="text-base flex justify-center">
          Already have an account?
          <span
            onClick={() => history.push("/login")}
            className=" text-bgblue font-semibold cursor-pointer mx-1">
            {" "}
            Login Now
          </span>
        </p>
      </div>
    </div>
  );
}
