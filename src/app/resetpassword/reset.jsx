"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next-nprogress-bar";
import Image from "next/image";
import { Auth, Amplify } from "aws-amplify";
import awsconfig from "../../aws-exports";
import Loader from "@/components/Loader";
import { gql, useMutation } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useSearchParams } from "next/navigation";
import { updateCustomer } from "@/api/shopifyapis";
Amplify.configure(awsconfig);
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
export default function Reset({ length = 6, customers }) {
  const query = useSearchParams().get("email");
  const history = useRouter();
  const [hide, sethide] = useState(false);
  const [hide1, sethide1] = useState(false);

  const [msg, setmsg] = useState("");
  const [passmsg, setPassmsg] = useState("");
  const [validmsg, setValidmsg] = useState("");

  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [login, { data1, loading1, error1 }] = useMutation(getlogin);
  const [token, setToken] = useState("");
  useEffect(() => {
    localStorage.setItem("customeraccesstoken", token);
  }, [token]);

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

  const resetPassword = async () => {
    setLoading(true);
    try {
      setmsg("");
      console.log("otp", otp.join(""));
      await Amplify.Auth.forgotPasswordSubmit(query, otp.join(""), password);
      const customer = customers?.customers.find((item) => item.email == query);
      const res = updateCustomer(customer.id, {
        customer: {
          id: customer.id,
          password: password,
          password_confirmation: password,
        },
      });
      if (res) {
        setmsg("Password Reset Successfully!");
        setLoading(false);
        history.push("/login");
      } else setmsg("Reset Password Failed");
    } catch (error) {
      console.log(error);
      setmsg("Error Reseting Password", error);
      setLoading(false);
    }
  };
  const isValidPassword = (password) => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z]).{8,}$/;

    return passwordRegex.test(password);
  };

  const resendPassword = async () => {
    setLoading(true);
    try {
      setmsg("");
      await Amplify.Auth.forgotPassword(query);
      setmsg("Password reset instructions sent successfully");
      setLoading(false);
    } catch (error) {
      setmsg("Error sending password reset instructions", error);
      setLoading(false);
    }
  };
  return (
    <div className="bg-[url('/auth/bg.svg')] py-20 font-roboto">
      <div className=" w-11/12 md:w-3/5 lg:w-2/5 rounded-3xl px-6 py-10 md:p-16 bg-white mx-auto flex flex-col gap-5 text-black">
        <img src="/Home/logo.svg" className="h-28 w-28 mx-auto" />
        <p className="font-bold text-[28px] text-center">OTP Verification</p>
        <p className="text-sm text-center w-80">
          Enter the 6-digit code sent to your registered email address to verify
          your identity. If you didn't receive the code, click 'Resend Code'.
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
        <p
          onClick={() => {
            resendPassword();
          }}
          className="text-bgblue hover:text-black cursor-pointer text-sm font-medium text-center">
          Resend Code
        </p>
        <div className="gap-2 flex flex-col">
          <label className="text-xs font-bold">Password</label>
          <div className="h-8 p-6 bg-formbg text-formtext rounded-md flex justify-between items-center">
            <input
              onChange={(e) => {
                setPassword(e.target.value);
                const a = isValidPassword(e.target.value);
                console.log(a);
                if (!a)
                  setValidmsg(
                    "Password must have at least 8 characters,numbers,special characters,upper case letters"
                  );
                else setValidmsg("");
              }}
              value={password}
              placeholder={"*******"}
              label={"Password"}
              type={hide ? "password" : "text"}
              className="bg-formbg outline-none "
            />

            <img
              onClick={() => sethide(!hide)}
              className="cursor-pointer"
              src="/auth/eye-off.svg"
            />
          </div>
        </div>
        {validmsg && password != "" && (
          <p className={`text-xxs font-bold text-red-600`}>{validmsg}</p>
        )}
        <div className="gap-2 flex flex-col">
          <label className="text-xs font-bold">Confirm Password</label>
          <div className="h-8 p-6 bg-formbg text-formtext rounded-md flex justify-between items-center">
            <input
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                if (e.target.value != password) {
                  setPassmsg("Passwords donot Match!");
                } else {
                  setPassmsg("Passwords Match!");
                }
              }}
              value={confirmpassword}
              placeholder={"******"}
              label={"Confirm Password"}
              type={hide ? "password" : "text"}
              className="bg-formbg outline-none "
            />
            <img
              onClick={() => sethide(!hide)}
              className="cursor-pointer"
              src="/auth/eye-off.svg"
            />
          </div>
        </div>
        {passmsg && (
          <p
            className={`text-sm font-bold ${
              passmsg.includes("donot") ? "text-red-600" : "text-green-700"
            }`}>
            {passmsg}
          </p>
        )}
        {msg && (
          <p
            className={`text-sm font-bold ${
              msg.includes("Successfully") ? "text-green-700" : "text-red-500"
            }`}>
            {msg}
          </p>
        )}
        <button
          onClick={() => {
            if (!passmsg.includes("donot")) {
              console.log("hello");
              resetPassword();
              setPassmsg("");
            }
          }}
          className={`${
            loading ||
            passmsg.includes("donot") ||
            password == "" ||
            confirmpassword == ""
              ? "bg-slate-600"
              : "bg-bgblue"
          } text-white uppercase p-4 rounded-md flex justify-center items-center`}
          disabled={loading || passmsg.includes("donot")}>
          {loading ? (
            <>
              <Loader />
              Sending Confirmation Code...
            </>
          ) : (
            <>Reset Password</>
          )}
        </button>
      </div>
    </div>
  );
}
