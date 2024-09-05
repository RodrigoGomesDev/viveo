import { Typography } from "@components/atoms/common/Typography";
import ViveoLogo from "assets/common/viveo-logo";

export const CardLeftAuth = () => {
  return (
    <div className="bg-viveo-primary-200 flex h-full justify-center gap-4 w-full flex-col p-12 text-white max-md:p-6 max-md:w-full">
        <div className="flex items-center justify-center">

        <ViveoLogo fill="#6de0db" />
        </div>
      <Typography
        className="text-viveo-primary-100 text-sm text-center max-lg:text-md max-md:hidden"
        variant="body2"
        highlight={[
          { text: "ecossistema especialista em cuidado", color: "#fff" },
        ]}
      >
        O ecossistema especialista em cuidado, que conecta todos os elos da cadeia para simplificar o setor da saúde e cuidar de cada vida!
      </Typography>
    </div>
  );
};
