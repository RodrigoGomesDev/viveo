import { ReactNode } from "react";

type PageLayoutDashboardProps = {
  children: ReactNode;
};
export const PageLayoutDashboard = ({ children }: PageLayoutDashboardProps) => {
  return (
    <div className="flex mx-8 max-lg:my-10  justify-center items-center h-screen bg-gray-100">
      {children}
    </div>
  );
};
