"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Signup({ data }) {
  const history = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 

  return (
    <div className="bg-[url('/auth/bg.svg')] py-20 font-roboto">
      <div className="w-11/12 md:w-3/5 lg:w-2/5 rounded-3xl px-6 py-10 md:p-16  bg-white mx-auto flex flex-col gap-3">
        <img src="/home/logo.svg" className="h-28" />
        <p className="font-bold text-2xl text-center">Create Your Account</p>
        <p className="font-normal text-sm text-center">
          Create a new account to get information about the AFL and your
          favorite teams.
        </p>
        <div className="gap-2 flex flex-col">
          <label className="text-xs font-bold">Email</label>
          <input
            setValue={setEmail}
            value={email}
            placeholder={"jamesturner@gmail.com"}
            label={"Email"}
            className="h-8 p-6 bg-formbg text-formtext rounded-md"
          />
        </div>
        <div className="gap-2 flex flex-col">
          <label className="text-xs font-bold">Password</label>

          <input
            setValue={setPassword}
            value={password}
            placeholder={"*********"}
            className="h-8 p-6 bg-formbg text-formtext rounded-md"
          />
        </div>
        <div className=" w-full font-medium text-xs flex flex-col items-center justify-center">
          <p>By signing up, you agree to our</p>
          <p>
            <span className="text-bgblue">Terms & Conditions</span> and
            <span className="text-bgblue"> Privacy Policy.</span>
          </p>
        </div>

        <button className="bg-bgblue text-white uppercase p-4 rounded-md">
          Register
        </button>
      </div>
    </div>
  );
}
