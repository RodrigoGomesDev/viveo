import { Button as MUIButton } from "@mui/material";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: "text" | "outlined" | "contained";
  className?: string;
}

export const Button = ({
  text,
  onClick,
  variant = "contained",
  className,
}: ButtonProps) => {
  return (
    <MUIButton
      style={{ textTransform: "none" }}
      variant={variant}
      onClick={onClick}
      className={`${className}`}
    >
      {text}
    </MUIButton>
  );
};
