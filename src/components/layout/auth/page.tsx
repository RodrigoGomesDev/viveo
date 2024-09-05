import { ReactNode } from "react";

type PageLayoutAuthProps = {
  children: ReactNode;
};
export const PageLayoutAuth = ({ children }: PageLayoutAuthProps) => {
  return (
    <div className="flex mx-8 justify-center items-center h-screen bg-gray-100">
      {children}
    </div>
  );
};
