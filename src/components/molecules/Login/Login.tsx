"use client";
import Link from "next/link";
import HighlightButton from "../../atoms/buttons/HighlightButton";
import { useState } from "react";
import { login } from "@/api/Auth/login";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    const { success } = await login(email, password);
    if (success) {
      alert("success");
    } else {
      alert("failed");
    }
  };

  return (
    <div className="flex flex-col">
      <div className="text-lg pb-2">BlackWind Service</div>
      <div className="text-sm">Email</div>
      <input
        className="rounded-md w-72 border px-2 py-1"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      ></input>
      <div className="text-sm">Password</div>
      <input
        className="rounded-md w-72 border px-2 py-1"
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      ></input>
      <HighlightButton
        className="block w-full"
        onClick={() => {
          handleLogin();
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
