"use client";

import { v4 as uuidv4 } from "uuid";

import { useReducer, useState } from "react";
import Link from "next/link";

// components
import RegistrationWrapper from "../components/RegistrationWrapper/RegistrationWrapper";
import RegistrationInput from "../components/RegistrationInput/RegistrationInput";
//

// utils
import {
  RegistrationUserForm,
  RegistrationUserFormReducer
} from "../utils/RegistrationReducer";
import { FormValidityReducer } from "../utils/FormValidityReducer";
import { CheckEmptyFields } from "../utils/CheckEmptyFields";
import { SetValidity } from "../utils/SetValidity";
//

export default function Registration() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [registrationFromState, setRegistrationFrom] = useReducer(
    RegistrationUserFormReducer,
    {
      name: "",
      lastname: "",
      email: "",
      password: ""
    }
  );
  const [formValidityData, setFormValidityData] = useReducer(
    FormValidityReducer,
    {
      nameError: false,
      lastnameError: false,
      emailError: false,
      passwordError: false
    }
  );

  function Submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (CheckEmptyFields(Object.values(registrationFromState))) {
      const unique_key = uuidv4();

      console.log("yep");
    } else {
      SetValidity(Object.values(registrationFromState), setFormValidityData);
    }
  }

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

      <form className="flex flex-col gap-5 mt-12" onSubmit={Submit}>
        <RegistrationInput
          icon_name="UserRound"
          type="text"
          placeholder="Enter first name..."
          eye_active={false}
          error_text="Empty field is not suitable"
          registr_new_accout={true}
          value={registrationFromState.name}
          validity_status={formValidityData.nameError}
          onChange={(e) =>
            setRegistrationFrom({
              type: RegistrationUserForm.NAME,
              payload: e.target.value
            })
          }
          onBlur={(e) => {
            setFormValidityData({
              payload: {
                key: "VALIDATE_NAME",
                text: e.target.value
              }
            });
          }}
        />

        <RegistrationInput
          icon_name="UserRound"
          type="text"
          placeholder="Enter last name..."
          eye_active={false}
          error_text="Empty field is not suitable"
          registr_new_accout={true}
          value={registrationFromState.lastname}
          validity_status={formValidityData.lastnameError}
          onChange={(e) =>
            setRegistrationFrom({
              type: RegistrationUserForm.LASTNAME,
              payload: e.target.value
            })
          }
          onBlur={(e) => {
            setFormValidityData({
              payload: {
                key: "VALIDATE_LASTNAME",
                text: e.target.value
              }
            });
          }}
        />

        <RegistrationInput
          icon_name="Mail"
          type="email"
          placeholder="Enter email..."
          eye_active={false}
          error_text="Email is not correct"
          registr_new_accout={true}
          value={registrationFromState.email}
          validity_status={formValidityData.emailError}
          onChange={(e) =>
            setRegistrationFrom({
              type: RegistrationUserForm.EMAIL,
              payload: e.target.value
            })
          }
          onBlur={(e) => {
            setFormValidityData({
              payload: {
                key: "VALIDATE_EMAIL",
                text: e.target.value
              }
            });
          }}
        />

        <RegistrationInput
          icon_name="KeyRound"
          type={showPassword ? "text" : "password"}
          placeholder="Enter password..."
          eye_active={true}
          error_text="Password should have at least 9 symbols"
          registr_new_accout={true}
          value={registrationFromState.password}
          validity_status={formValidityData.passwordError}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          onChange={(e) =>
            setRegistrationFrom({
              type: RegistrationUserForm.PASSWORD,
              payload: e.target.value
            })
          }
          onBlur={(e) => {
            setFormValidityData({
              payload: {
                key: "VALIDATE_PASSWORD",
                text: e.target.value
              }
            });
          }}
        />

        <button className="py-5 rounded-full bg-gray-700 hover:bg-indigo-500 transition-all duration-200 ease-in tracking-widest mt-5">
          Create account
        </button>
      </form>
    </RegistrationWrapper>
  );
}
