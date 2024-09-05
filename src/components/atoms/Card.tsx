import * as React from "react";
import { Card as MUICard, CardProps } from "@mui/material";

interface CardMuiProps {
  variant?: CardProps["variant"];
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ variant, children, className }: CardMuiProps) => {
  return (
    <MUICard className={className} variant={variant}>
      {children}
    </MUICard>
  );
};
