import { Link as MUILink } from "@mui/material";

interface LinkProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export const Link = ({
  text,
  onClick,
  className,
}: LinkProps) => {
  return (
    <MUILink
      onClick={onClick}
      className={`text-viveo-primary-200 underline-offset-2 cursor-pointer ${className}`}
    >
      {text}
    </MUILink>
  );
};
