import AlertRegular from "../../components/alerts/alert-regular";
import BtnRegular from "../../components/buttons/button-regular";
import TextField from "../../components/inputs/text-field-regular";
import { useForm } from "react-hook-form";

interface IFormInputs {
  email: string;
  password: string;
}

const Login = (props: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit = (data: object) => {};

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <h1 className="text-6xl font-normal leading-normal mt-0 mb-2 text-blue-600">
        BS-23
      </h1>

      <form className="w-1/4" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          required
          label="Email"
          placeholder="Ex: abc@gmail.com"
          register={register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {errors.email?.type === "required" && (
          <p className="text-red-500">Email is required</p>
        )}
        {errors.email?.type === "pattern" && (
          <p className="text-red-500">Email address is not valid</p>
        )}
        <TextField
          required
          label="Password"
          placeholder="Your password"
          type="password"
          register={register("password", {
            required: true,
            pattern:
              /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{5,20}$/,
          })}
        />
        {errors.password?.type === "required" && (
          <p className="text-red-500">Password is required</p>
        )}
        {errors.password?.type === "pattern" && (
          <p className="text-red-500">
            Password has to be at least 5 characters including lower character,
            upper character, number and a special character
          </p>
        )}
        <BtnRegular text="Login" type="submit" />
      </form>
    </div>
  );
};
export default Login;
