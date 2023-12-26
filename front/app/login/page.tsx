"use client";

import Link from "next/link";

import { MessageCircle } from "lucide-react";
import RegistrationWrapper from "../components/RegistrationWrapper/RegistrationWrapper";
import RegistrationInput from "../components/RegistrationInput/RegistrationInput";

export default function LogIn() {
  return (
    <RegistrationWrapper>
      <div className="flex-1">
        <div className="mb-10 flex justify-center">
          <div className="inline-flex bg-indigo-500 rounded-full p-4  ">
            <MessageCircle />
          </div>
        </div>
        <div className="text-center tracking-wide">
          <h1 className="text-5xl uppercase">Welcome back!</h1>
          <div className="mt-5">Please enter your details</div>
        </div>
        <div className="mt-14">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-8"
          >
            <RegistrationInput
              icon_name="Mail"
              type="email"
              placeholder="Enter email..."
              eye_active={false}
              error_text=""
              registr_new_accout={true}
            />

            <RegistrationInput
              icon_name="KeyRound"
              type="email"
              placeholder="Enter password..."
              eye_active={true}
              error_text=""
              registr_new_accout={false}
            />

            <button className="py-5 rounded-full bg-gray-700 hover:bg-indigo-500 transition-all duration-200 ease-in tracking-widest">
              Log In
            </button>
          </form>
        </div>
      </div>
      <div className="text-center text-sm">
        <span className="text-gray-500">Don&apos;t have an account? </span>
        <span className="underline underline-offset-4 hover:text-indigo-500 transition-all duration-200 ease-in">
          <Link href={"/registration"}>Sign Up</Link>
        </span>
      </div>
    </RegistrationWrapper>
  );
}
