import Icon from "../Icon/Icon";

interface TRegistrationInput {
  icon_name: string;
  type: string;
  placeholder: string;
  eye_active: boolean;
  error_text: string;
  registr_new_accout: boolean;
}

export default function RegistrationInput({
  icon_name,
  type,
  placeholder,
  eye_active,
  error_text,
  registr_new_accout
}: TRegistrationInput) {
  return (
    <div className="flex flex-col gap-3 justify-center">
      <div className="px-4 py-3 flex gap-3 bg-gray-700 rounded-lg border-1 border-gray-800">
        <Icon icon_name={icon_name} />
        <input
          type={type}
          className="flex-1 bg-inherit focus:outline-none"
          placeholder={placeholder}
          onFocus={() => console.log("focus")}
        />
        {eye_active && <Icon icon_name="Eye"></Icon>}
      </div>

      <div className="flex">
        <div className="text-xs text-indigo-500 font-semibold flex-1">
          {error_text}
        </div>

        {eye_active && !registr_new_accout && (
          <div className="text-end text-xs text-gray-500 select-none hover:text-indigo-500 transition-all duration-200 ease-in">
            Forgot password?
          </div>
        )}
      </div>
    </div>
  );
}
