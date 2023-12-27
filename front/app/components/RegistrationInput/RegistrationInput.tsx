import Icon from "../Icon/Icon";

interface TRegistrationInput {
  icon_name: string;
  type: string;
  placeholder: string;
  eye_active: boolean;
  error_text: string;
  registr_new_accout: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  validity_status: boolean;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  showPassword?: boolean;
  setShowPassword?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function RegistrationInput({
  icon_name,
  type,
  placeholder,
  eye_active,
  error_text,
  registr_new_accout,
  onChange,
  value,
  validity_status,
  onBlur,
  showPassword,
  setShowPassword
}: TRegistrationInput) {
  console.log(showPassword);

  console.log(setShowPassword);

  return (
    <div className="flex flex-col gap-3 justify-center">
      <div
        className={`px-4 py-3 flex gap-3 bg-gray-700 rounded-lg border-2 ${
          validity_status ? "border-red-500" : "border-gray-800"
        } transition-all duration-200 ease-in`}
      >
        <Icon icon_name={icon_name} />
        <input
          type={type}
          className="flex-1 bg-inherit focus:outline-none"
          placeholder={placeholder}
          onFocus={() => console.log("focus")}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
          autoComplete="true"
        />
        {eye_active && (
          <>
            {showPassword ? (
              <Icon
                icon_name="EyeOff"
                onClick={() => {
                  if (setShowPassword) setShowPassword(!showPassword);
                }}
              />
            ) : (
              <Icon
                icon_name="Eye"
                onClick={() => {
                  if (setShowPassword) setShowPassword(!showPassword);
                }}
              />
            )}
          </>
        )}
      </div>

      <div className="flex">
        {validity_status && (
          <div className="text-xs text-red-500 font-semibold flex-1">
            {error_text}
          </div>
        )}

        {eye_active && !registr_new_accout && (
          <div className="text-end text-xs text-gray-500 select-none hover:text-indigo-500 transition-all duration-200 ease-in">
            Forgot password?
          </div>
        )}
      </div>
    </div>
  );
}
