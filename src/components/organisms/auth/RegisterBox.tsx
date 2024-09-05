import { CardLeftAuth } from "@components/molecules/auth/CardLeft";
import { RegisterForm } from "@components/molecules/auth/RegisterForm";
import StarViveo from "assets/auth/star-viveo";

export const RegisterBox = () => {
  return (
    <div className="flex relative max-md:flex-col min-h-[30rem] md:max-h-[30rem] max-md:min-h-fit h-full max-md:h-fit w-[52rem] rounded-lg shadow-lg overflow-hidden">
      <CardLeftAuth />
      <RegisterForm />
      <div className="absolute right-0 -bottom-36 opacity-40 z-10 max-md:hidden">
        <StarViveo />
      </div>
    </div>
  );
};
