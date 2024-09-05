import * as React from "react";
import { Alert as MUIAlert, AlertProps } from "@mui/material";

interface AlertMuiProps {
  severity?: AlertProps["severity"];
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Alert = ({
  icon,
  children,
  className,
  severity,
}: AlertMuiProps) => {
  return (
    <MUIAlert
      icon={icon}
      className={`flex items-center ${className}`}
      severity={severity}
      sx={{
        "& .MuiAlert-icon": {
          fontSize: 32,
          color: '#124c57',
        }
      }}
    >
      {" "}
      {children}
    </MUIAlert>
  );
};
