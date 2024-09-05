import * as React from "react";
import { Snackbar as MUISnackbar } from "@mui/material";

interface SnackbarMuiProps {
  message: string;
  className?: string;
  open: boolean;
}

export const Snackbar = ({ message, className, open }: SnackbarMuiProps) => {
  return (
    <MUISnackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      className={className}
      message={message}
    />
  );
};
