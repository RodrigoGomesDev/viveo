"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const UseLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [error, setError] = useState("");
  // toast pode ser melhorado!!
  const [open, setOpen] = useState(false);

  const handleLogin = () => {
    // credenciais para login
    const expectedEmail = "admin.example@viveo.com";
    const expectedPassword = "senha-adm";

    if (email === expectedEmail && password === expectedPassword) {
      router.push("/dashboard");
    } else if (email === "" || password === "") {
      setOpen(true);
      setError("Por favor, preencha todos os campos necessários.");
    } else {
      setOpen(true);
      setError("Email ou senha incorretos. Por favor, tente novamente.");
    }

    setTimeout(() => {
      setOpen(false);
    }, 4000);
  };

  return {
    email,
    password,
    error,
    open,
    router,
    setPassword,
    setEmail,
    handleLogin
  };
};
