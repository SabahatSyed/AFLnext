"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next-nprogress-bar";
import Image from "next/image";
import { Auth, Amplify } from "aws-amplify";
import awsconfig from "../../aws-exports";
import Loader from "@/components/Loader";
import { gql, useMutation } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useSearchParams } from "next/navigation";
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
export default function Reset({ data }) {
  const query = useSearchParams().get("email");
  console.log(query);
  const history = useRouter();
  const [OTP, setOTP] = useState("");
  const [msg, setmsg] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [login, { data1, loading1, error1 }] = useMutation(getlogin);
  const [token, setToken] = useState("");
  useEffect(() => {
    localStorage.setItem("customeraccesstoken", token);
  }, [token]);

 
   const [otp, setOtp] = useState(Array(length).fill(''));
  const inputRefs = Array(length).fill(0).map((_, index) => useRef(null));

  const handleChange = (e, index) => {
    const value = e.target.value;
    setOtp(prevOtp => {
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
    if (e.key === 'Backspace' && index > 0 && !otp[index]) {
      inputRefs[index - 1].current.focus();
    }
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
      <div className=" w-11/12 md:w-3/5 lg:w-2/5 rounded-3xl px-6 py-10 md:p-16 bg-white mx-auto flex flex-col gap-7 text-black">
        <img src="/Home/logo.svg" className="h-28 w-28 mx-auto" />
        <p className="font-bold text-[28px] text-center">OTP Verification</p>
        <p className="text-sm text-center w-80">
          Enter the 6-digit code sent to your registered email address to verify
          your identity. If you didn't receive the code, click 'Resend Code'.
        </p>
        <div className="gap-2 flex flex-col">
          <div className="otp-input-container">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                maxLength="1"
                ref={inputRefs[index]}
                className="otp-input"
              />
            ))}
          </div>
        </div>
        <div className="gap-2 flex flex-col">
          <label className="text-xs font-bold">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder={"*******"}
            label={"Password"}
            className="h-8 p-6 bg-formbg text-formtext rounded-md"
          />
        </div>{" "}
        <div className="gap-2 flex flex-col">
          <label className="text-xs font-bold">Confirm Password</label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmpassword}
            placeholder={"******"}
            label={"Confirm Password"}
            className="h-8 p-6 bg-formbg text-formtext rounded-md"
          />
        </div>
        {msg && (
          <p
            className={`text-sm font-bold ${
              msg.includes("successfully") ? "text-green-700" : "text-red-500"
            }`}>
            {msg}
          </p>
        )}
        <button
          onClick={() => forgotPassword()}
          className="bg-bgblue text-white uppercase p-4 rounded-md flex justify-center items-center"
          disabled={loading}>
          {loading ? (
            <>
              <Loader />
              Sending Confirmation Code...
            </>
          ) : (
            <>Send Confirmation Code</>
          )}
        </button>
      </div>
    </div>
  );
}
