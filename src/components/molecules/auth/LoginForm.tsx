"use client";
import { Button } from "@atoms/common/Button";
import { Input } from "@atoms/common/Input";
import { Alert } from "@components/atoms/Alert";
import { Link } from "@components/atoms/common/Link";
import { Typography } from "@components/atoms/common/Typography";
import { Snackbar } from "@components/atoms/Snackbar";
import { UseLogin } from "app/login/login.hook";

export const LoginForm = () => {
  const {
    email,
    password,
    error,
    open,
    handleLogin,
    router,
    setEmail,
    setPassword,
  } = UseLogin();

  return (
    <form className="flex p-6 w-full justify-center z-20 h-full gap-10 flex-col">
      <div className="w-full">
        <Alert
          severity="info"
          className="bg-opacity-30 bg-viveo-primary-100 text-viveo-primary-200"
        >
          <div className="flex flex-col gap-1">
            <p>
              <strong>Email: </strong>admin.example@viveo.com
            </p>
            <p>
              <strong>Senha: </strong> senha-adm
            </p>
          </div>
        </Alert>
      </div>
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
        </div>
        <Link className="text-xs" text="Esqueceu a senha?" />
        <Button
          text="Login"
          className="bg-viveo-primary-200  w-full"
          onClick={handleLogin}
        />
        <div className="flex gap-1 items-center">
          <Typography className="text-xs" variant="body2">
            Não tem uma conta?
          </Typography>
          <Link
            className="text-xs"
            onClick={() => router.push(`/cadastro`)}
            text="Cadastre-se"
          />
        </div>
      </div>
    </form>
  );
};
