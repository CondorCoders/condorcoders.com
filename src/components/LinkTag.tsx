import { AnchorHTMLAttributes, ReactNode } from "react";

interface LinkTagProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label?: string;
  icon?: ReactNode;
}

export const LinkTag = ({ label, icon, className, ...props }: LinkTagProps) => {
  return (
    <a
      className={`flex min-w-36 items-center justify-center gap-2 rounded-md bg-surface-mixed-200 px-4 py-2 transition-colors ease-in-out hover:bg-surface-mixed-400 ${className}`}
      {...props}
    >
      {icon} {label}
    </a>
  );
};
