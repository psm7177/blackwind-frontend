"use client";
import Link from "next/link";
import HighlightButton from "../../atoms/buttons/HighlightButton";

const Login = () => {
  return (
    <div className="flex flex-col">
      <div className="text-lg pb-2">BlackWind Service</div>
      <div className="text-sm">Email</div>
      <input className="rounded-md w-72 border px-2 py-1"></input>
      <div className="text-sm">Password</div>
      <input
        className="rounded-md w-72 border px-2 py-1"
        type="password"
      ></input>
      <HighlightButton
        className="block w-full"
        onClick={() => {
          alert("hello world");
        }}
      >
        Login
      </HighlightButton>
      <Link className="text-blue-600 text-end self-end mt-2" href="/register">
        register
      </Link>
    </div>
  );
};

export default Login;
