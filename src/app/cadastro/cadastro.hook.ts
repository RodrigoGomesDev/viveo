"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const UseRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleRegister = () => {
    if (email === "" || password === "" || confirmPassword === "") {
      setOpen(true);
      setError("Por favor, preencha todos os campos necessários.");
    } else {
      router.push("/dashboard");
    }
  };

  return {
    email,
    password,
    error,
    open,
    router,
    setPassword,
    setEmail,
    confirmPassword,
    setConfirmPassword,
    handleRegister,
  };
};
