"use client";
import React, { useState, useEffect, useRef } from "react";
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

export default function Signup({ data, length = 6 }) {
  const params = useSearchParams().get("auth");
  const history = useRouter();
  const [email, setEmail] = useState("");
  const [hide, sethide] = useState(true);
  const [password, setPassword] = useState("");
  const [emailmsg, setemailmsg] = useState("");
  const [passwordmsg, setpasswordmsg] = useState("");
  const [msg, setmsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [customerid, setCustomerId] = useState("");
  const [pass, setPass] = useState("");

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
  const [registered, setRegistered] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationError, setVerificationError] = useState(null);
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputRefs = Array(length)
    .fill(0)
    .map((_, index) => useRef(null));

  const handleChange = (e, index) => {
    const value = e.target.value;
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;

      // Move to the next input field if the current one is filled
      if (value && index < length - 1) {
        inputRefs[index + 1].current.focus();
      }

      return newOtp;
    });
  };

  const handleKeyDown = (e, index) => {
    // Move to the previous input field on backspace
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      inputRefs[index - 1].current.focus();
    }
  };
  const handleVerifyEmail = async () => {
    try {
      setLoading(true);

      const Username = email;

      const res = await Auth.confirmSignUp(Username, otp.join(""));
      console.log(res);
      setVerificationError(null);
      setVerificationSuccess(true);
      setmsg("Email verified Successfully!");
      setLoading(false);
      // Optionally, you can redirect the user to another page or perform other actions.
    } catch (error) {
      setVerificationError(error.message);
      setVerificationSuccess(false);
      setLoading(false);
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
            setLoading(false);
            if (params == "auth") history.push("/login?auth=auth");
            else history.push("/login");
            setRegistered(true);
          })
          .catch((err) => {
            setmsg("Registeration Failed");
            deleteCustomer(customerid);
          });
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
        {!registered && (
          <>
            {" "}
            <p className="font-bold text-2xl text-center">
              Create Your Account
            </p>
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
          </>
        )}

        {!registered && (
          <div className=" w-full font-medium text-xs flex flex-col items-center justify-center">
            <p>By signing up, you agree to our</p>
            <p>
              <span className="text-bgblue">Terms & Conditions</span> and
              <span className="text-bgblue"> Privacy Policy.</span>
            </p>
          </div>
        )}
        {registered && (
          <>
            <p className="font-bold text-[28px] text-center">
              OTP Verification
            </p>
            <p className="text-sm text-center w-80">
              Enter the 6-digit code sent to your registered email address to
              verify your identity. If you didn't receive the code, click
              'Resend Code'.
            </p>
            <div className="gap-2 grid grid-cols-8 bg-formbg rounded-md py-2">
              <div className="col-start-2 col-span-6 grid grid-cols-6 gap-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    maxLength="1"
                    ref={inputRefs[index]}
                    className="font-bold text-3xl text-center text-black border-b-2 border-b-underlinegray bg-transparent focus:border-b-2 outline-none"
                  />
                ))}
              </div>
            </div>
          </>
        )}

        <button
          onClick={() => {
            if (!registered) handleSignup();
            else handleVerifyEmail();
          }}
          className="bg-bgblue text-white uppercase p-4 rounded-md flex justify-center items-center"
          disabled={loading}>
          {registered ? (
            loading ? (
              <>
                <Loader />
                Verifying...
              </>
            ) : (
              <>Verify</>
            )
          ) : loading ? (
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
            onClick={() => {
              if (params == "auth") history.push("/login?auth=auth");
              else history.push("/login");
            }}
            className=" text-bgblue font-semibold cursor-pointer mx-1">
            {" "}
            Login Now
          </span>
        </p>
      </div>
    </div>
  );
}
