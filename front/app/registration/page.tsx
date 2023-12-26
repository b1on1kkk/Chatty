"use client";

import Link from "next/link";

import RegistrationWrapper from "../components/RegistrationWrapper/RegistrationWrapper";
import RegistrationInput from "../components/RegistrationInput/RegistrationInput";

export default function Registration() {
  return (
    <RegistrationWrapper>
      <div>
        <div className="uppercase text-gray-500 font-bold mb-5">
          Start for free
        </div>
        <div>
          <h2 className="text-5xl">
            Create <br /> your account
          </h2>
        </div>
        <div className="mt-5">
          <span className="text-gray-500">Already a member?</span>{" "}
          <span className="underline underline-offset-4 hover:text-indigo-500 transition-all duration-200 ease-in">
            <Link href={"/login"}>Log In</Link>
          </span>
        </div>
      </div>

      <form
        className="flex flex-col gap-5 mt-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <RegistrationInput
          icon_name="UserRound"
          type="text"
          placeholder="Enter first name..."
          eye_active={false}
          error_text=""
          registr_new_accout={true}
        />

        <RegistrationInput
          icon_name="UserRound"
          type="text"
          placeholder="Enter last name..."
          eye_active={false}
          error_text=""
          registr_new_accout={true}
        />

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
          registr_new_accout={true}
        />

        <button className="py-5 rounded-full bg-gray-700 hover:bg-indigo-500 transition-all duration-200 ease-in tracking-widest mt-5">
          Create account
        </button>
      </form>
    </RegistrationWrapper>
  );
}
