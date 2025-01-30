import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSignupMutation } from "../features/users/userApi";

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

export default function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
  const [signup] = useSignupMutation();

  const onSubmit = async (data) => {
    await signup(data);
    alert("Signup Successful! Please Login.");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Name" />
      <p>{errors.name?.message}</p>

      <input {...register("email")} placeholder="Email" />
      <p>{errors.email?.message}</p>

      <input {...register("password")} type="password" placeholder="Password" />
      <p>{errors.password?.message}</p>

      <button type="submit">Sign Up</button>
    </form>
  );
}
