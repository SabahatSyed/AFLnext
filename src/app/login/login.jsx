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
import { AiOutlineClose } from "react-icons/ai";
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
export default function Login({ data }) {
  const query = useSearchParams().get("auth");
  console.log(query);
  const history = useRouter();
  const [hide,sethide]=useState(true)
  const [email, setEmail] = useState("");
  const [msg, setmsg] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [login, { data1, loading1, error1 }] = useMutation(getlogin);
  const [token, setToken] = useState("");
  const [checkoutUrl,setCheckoutUrl]=useState('')
  useEffect( () => {
    Auth.currentAuthenticatedUser()
      .then((res) => {history.push("/");})
  });
  useEffect(() => {
    setCheckoutUrl(localStorage.getItem("checkouturl"))
  }, []);
  useEffect(() => {
    localStorage.setItem("customeraccesstoken", token);
  }, [token]);
  const handleLogin = async () => {
    setLoading(true);
    try {
      setmsg("");
      if (email != "" && password != "") {
        await Auth.signIn({ username: email, password });

        const response = await login({
          variables: {
            email: email,
            password: password,
          },
        });

        if (
          response.data.customerAccessTokenCreate.customerAccessToken != null
        ) {
          setToken(
            response.data.customerAccessTokenCreate.customerAccessToken
              .accessToken
          );
          if (query == "auth") history.push({checkoutUrl});
          else history.push("/");
        } else {
          setmsg("Login Failed");
          setLoading(false);

          Auth.signOut();
        }
      } else {
        alert("Please fill all Fields");
        setLoading(false);
      }
    } catch (error) {
      setmsg(error.message);
      console.error("Error signing in:", error);
      setLoading(false);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="bg-[url('/auth/bg.svg')] py-20 font-roboto">
      <div className=" w-11/12 md:w-3/5 lg:w-2/5 rounded-3xl px-6 py-10 md:p-16 bg-white mx-auto flex flex-col gap-7 text-black relative">
        <Link href="/" className="absolute top-8 right-8">
          <img src="/auth/cross.svg" />
        </Link>
        <img src="/Home/logo.svg" className="h-28 w-28 mx-auto" />
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
        <div className="gap-2 flex flex-col">
          <label className="text-xs font-bold ">Password</label>

          <div className="h-8 p-6 bg-formbg text-formtext rounded-md flex justify-between items-center">
            <input
              type={hide ? "password" : "text"}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder={"*********"}
              className="bg-formbg outline-none"
            />
            <img
              onClick={() => sethide(!hide)}
              className="cursor-pointer"
              src="/auth/eye-off.svg"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <input type="checkbox" className="h-5 w-5 text-blue-500" />
            <label>Remember Me</label>
          </div>
          <div
            onClick={() => history.push("/forgotpassword")}
            className=" cursor-pointer hover:text-bgblue">
            <label className=" cursor-pointer hover:text-bgblue">
              Forget Password?
            </label>
          </div>
        </div>
        <p className="text-sm font-bold text-red-500">{msg}</p>

        <button
          onClick={() => handleLogin()}
          className="bg-bgblue text-white uppercase p-4 rounded-md flex justify-center items-center"
          disabled={loading}>
          {loading ? (
            <>
              <Loader />
              Logging in...
            </>
          ) : (
            <>Log in</>
          )}
        </button>

        <p className="text-center w-full">Or Login With</p>
        <div className="w-full flex items-center justify-between gap-7 ">
          {/* <button className='bg-bgblue text-white   rounded-md w-1/2 flex items-center justify-center gap-5 p-3'>
            <img src='/auth/facebook.svg' />
            <span classname='text-white font-bold'>Facebook</span>
          </button> */}
          <button className="bg-googlebg text-white rounded-md w-full flex items-center justify-center gap-2 p-1">
            <img src="/auth/google.svg" className="mt-2" />
            <span classname="text-white font-bold">Google</span>
          </button>
        </div>
        <p className="text-base flex justify-center">
          Don't have an account?
          <span
            onClick={() => {
              if (query == "auth") history.push("/Signup?auth=auth");
              else history.push("/Signup");
            }}
            className=" text-bgblue font-semibold cursor-pointer mx-1">
            Register Now
          </span>
        </p>
      </div>
    </div>
  );
}
