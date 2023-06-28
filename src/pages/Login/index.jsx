import { useForm } from "react-hook-form";
import { z } from "zod";
import "../../styles/global.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export const userSchema = z.object({
  username: z.string().nonempty("Cannot be blank!"),
  password: z.string().nonempty("Cannot be blank!"),
});

export default function Login() {
  const [showHide, setShowHide] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(userSchema) });

  const onSubmit = (data) => {};

  return (
    <div className="h-screen bg-zinc-900 flex items-center justify-center">
      <div className="flex flex-col h-[450px] w-[350px] bg-zinc-100 rounded justify-center items-center gap-5 relative">
        <h1 className="text-5xl text-slate-800 absolute top-10">Sing In</h1>
        <form
          className="flex flex-col p-10 gap-2 w-full mt-16"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="text-sm">Username</label>
          <input
            type="text"
            autoComplete="off"
            className={
              errors.password
                ? "border-b-2 border-pink-500 bg-transparent outline-none px-2 focus:border-pink-500"
                : "border-b-2 border-slate-300 bg-transparent outline-none px-2 focus:border-indigo-600"
            }
            {...register("username")}
          ></input>
          {errors.username && (
            <p className="text-pink-500 text-xs">{errors.username.message}</p>
          )}
          <label className="text-sm">Password</label>
          <div className="flex relative">
            <input
              type={showHide ? "text" : "password"}
              autoComplete="off"
              className={
                errors.password
                  ? "border-b-2 border-pink-500 bg-transparent outline-none px-2 focus:border-pink-500"
                  : "border-b-2 border-slate-300 bg-transparent outline-none px-2 focus:border-indigo-600"
              }
              {...register("password")}
            ></input>
            <div
              className="absolute right-0 flex items-center justify-center"
              onClick={() => setShowHide(!showHide)}
            >
              {!showHide ? (
                <Eye className="text-indigo-600 h-5 w-5"></Eye>
              ) : (
                <EyeOff className="text-indigo-600 h-5 w-5"></EyeOff>
              )}
            </div>
          </div>
          {errors.password && (
            <p className="text-pink-500 text-xs">{errors.password.message}</p>
          )}
          <button
            type="submit"
            className="flex bg-indigo-600 p-2 items-center justify-center rounded text-center text-slate-100 mt-8"
          >
            Sign in
          </button>
          <p className="text-center text-sm">
            Don't have an account?{" "}
            <strong className="text-blue-500 cursor-pointer">Sign Up</strong>
          </p>
        </form>
      </div>
    </div>
  );
}
