import { TextField, TextFieldProps } from "@mui/material";

interface InputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  size?: TextFieldProps["size"];
  color?: TextFieldProps["color"];
}

export const Input = ({
  label,
  type = "text",
  value,
  onChange,
  className,
  size = "small",
  color,
}: InputProps) => {
  return (
      <TextField
        className={`${className}`}
        label={label}
        color={color}
        type={type}
        size={size}
        value={value}
        onChange={onChange}
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            color: "#000",
            fontSize: "14px",
            fontWeight: "thin",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#9CA3AF",
              borderWidth: "1px",
            },
            "&.Mui-focused": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#124c57",
                borderWidth: "1px",
              },
            },
            "&:hover:not(.Mui-focused)": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ccc",
              },
            },
          },
          "& .MuiInputLabel-outlined": {
            color: "#4B5563",
            fontWeight: "thin",
            fontSize: '14px',
            "&.Mui-focused": {
              color: "#124c57",
              fontWeight: "thin",
            },
          },
        }}
      />
  );
};
