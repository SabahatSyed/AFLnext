"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Auth, Amplify } from "aws-amplify";
import awsconfig from "../../aws-exports";
Amplify.configure(awsconfig);
export default function Signup({ data }) {
  const history = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailmsg, setemailmsg] = useState("");
  const [passwordmsg, setpasswordmsg] = useState("");
  const [msg, setmsg] = useState("");
  const handleSignup = async () => {
    try {
            setmsg("");

      // Validate that all fields are filled
      if (!email || !password) {
        alert("Please fill in all fields");
        return;
      }

      // Validate the email format
      if (!isValidEmail(email)) {
        setemailmsg("Invalid email format");
      }

      // Validate password requirements
      if (!isValidPassword(password)) {
        setpasswordmsg(
          "Password must have at least 8 characters\n" +
            ", numbers \n" +
            ", special characters    \n" +
            ", upper case letters    "
        );
      }

      // Check if password and confirm password match
      // Add a confirm password state and input in your component
      // For simplicity, assuming you have a state `confirmPassword`

      // Use Auth.signUp to create a new user
      if (passwordmsg == "" && emailmsg == "") {
        const signUpResponse = await Auth.signUp({
          username: email,
          password: password,
          attributes: {
            email: email,
            phone_number: "",
            name: "",

            // You can add additional attributes here if needed
          },
        });
      }
      setmsg("Successfully Registered!!");
      console.log("Signup successful", signUpResponse);
      // Optionally, you can redirect the user to a confirmation page
      // or show a confirmation message.
    } catch (error) {
      setmsg(error.message);
      console.error("Error signing up:", error);
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
            onChange={(e) => {
              setEmail(e.target.value);
              setemailmsg("");
            }}
            value={email}
            placeholder={"jamesturner@gmail.com"}
            label={"Email"}
            className="h-8 p-6 bg-formbg text-formtext rounded-md"
          />
          <p className="text-xxs font-bold text-red-700">{emailmsg}</p>
        </div>
        <div className="gap-2 flex flex-col">
          <label className="text-xs font-bold">Password</label>

          <input
            onChange={(e) => {
              setPassword(e.target.value);
              setpasswordmsg("");
            }}
            value={password}
            placeholder={"*********"}
            className="h-8 p-6 bg-formbg text-formtext rounded-md"
          />
          <p className="text-xxs font-bold text-red-700 w-1/3">{passwordmsg}</p>
        </div>
        <p className="text-sm font-bold text-green-900 w-1/3">{msg}</p>
        <div className=" w-full font-medium text-xs flex flex-col items-center justify-center">
          <p>By signing up, you agree to our</p>
          <p>
            <span className="text-bgblue">Terms & Conditions</span> and
            <span className="text-bgblue"> Privacy Policy.</span>
          </p>
        </div>

        <button
          onClick={() => handleSignup()}
          className="bg-bgblue text-white uppercase p-4 rounded-md">
          Register
        </button>
      </div>
    </div>
  );
}
