import { Typography as MUITypography } from "@mui/material";

interface Highlight {
  text: string;
  color: string;
}

interface TypographyProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2";
  children: string;
  className?: string;
  highlight?: Highlight[];
}

export const Typography = ({
  variant,
  children,
  className,
  highlight,
}: TypographyProps) => {
  const highlightText = (text: string) => {
    if (!highlight) return text;

    let result = text;
    highlight.forEach(({ text: highlightText, color }) => {
      const regex = new RegExp(`(${highlightText})`, "gi");
      result = result.replace(
        regex,
        `<span style="color: ${color};">$1</span>`
      );
    });

    return result;
  };
  return (
    <MUITypography
      className={className}
      variant={variant}
      dangerouslySetInnerHTML={{ __html: highlightText(children as string) }}
    />
  );
};
