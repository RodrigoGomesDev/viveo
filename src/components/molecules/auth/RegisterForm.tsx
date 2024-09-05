"use client";
import { Button } from "@atoms/common/Button";
import { Input } from "@atoms/common/Input";
import { Link } from "@components/atoms/common/Link";
import { Typography } from "@components/atoms/common/Typography";
import { Snackbar } from "@components/atoms/Snackbar";
import { UseRegister } from "app/cadastro/cadastro.hook";
export const RegisterForm = () => {
  const {
    handleRegister,
    router,
    email,
    password,
    setEmail,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    open,
  } = UseRegister();

  return (
    <form className="flex p-6 w-full justify-center z-20 h-full gap-10 flex-col">
      {error && <Snackbar open={open} message={error} />}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 w-full">
          <Input
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            label="Confirmar senha"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <Button
          text="Criar conta"
          className="bg-viveo-primary-200  w-full"
          onClick={handleRegister}
        />
        <div className="flex gap-1 items-center">
          <Typography className="text-xs" variant="body2">
            Já possui uma conta?
          </Typography>
          <Link
            className="text-xs"
            onClick={() => router.push(`/login`)}
            text="Entrar"
          />
        </div>
      </div>
    </form>
  );
};
