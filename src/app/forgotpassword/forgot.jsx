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
export default function Forgot({ data }) {
  const query = useSearchParams().get("auth");
  console.log(query);
  const history = useRouter();
  const [email, setEmail] = useState("");
  const [msg, setmsg] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [login, { data1, loading1, error1 }] = useMutation(getlogin);
  const [token, setToken] = useState("");
  useEffect(() => {
    localStorage.setItem("customeraccesstoken", token);
  }, [token]);

  const forgotPassword = async () => {
    
    setLoading(true);
    try {
      setmsg("");
      await Amplify.Auth.forgotPassword(email);
      setmsg("Password reset instructions sent successfully");
      setLoading(false);
      history.push(`/resetpassword?email=${email}`)
    } catch (error) {
      setmsg("Error sending password reset instructions", error);
      setLoading(false);
    }
  };
  return (
    <div className="bg-[url('/auth/bg.svg')] py-20 font-roboto">
      <div className=" w-11/12 md:w-3/5 lg:w-2/5 rounded-3xl px-6 py-10 md:p-16 bg-white mx-auto flex flex-col gap-7 text-black">
        <img src="/Home/logo.svg" className="h-28 w-28 mx-auto" />
        <p className="font-bold text-[28px] text-center">Forgot Password?</p>
        <p className="text-sm text-center w-80">
          Please provide the email address you used during your registration,
          and we will send you guidance on how to reset your password.
        </p>
        <div className="gap-2 flex flex-col">
          <label className="text-xs font-bold">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder={"jamesturner@gmail.com"}
            label={"Email"}
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
          className={`${
            email == "" ? " bg-slate-500" : "bg-bgblue"
          } text-white uppercase p-4 rounded-md flex justify-center items-center`}
          disabled={loading || email == ""}>
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
