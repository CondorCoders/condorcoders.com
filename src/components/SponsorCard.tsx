import Image from "next/image";
import { AnchorHTMLAttributes } from "react";

interface SponsorCardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  name: string;
  logo: string;
}

export const SponsorCard = ({
  name,
  logo,
  className,
  ...props
}: SponsorCardProps) => {
  return (
    <a
      target="_blank"
      className={`p-10 shadow-inner shadow-white/10 hover:shadow-white/40 transition-all rounded-xl flex items-center justify-center ${className}`}
      {...props}
    >
      <Image
        width={200}
        height={200}
        className="w-full"
        src={logo}
        alt={name}
      />
    </a>
  );
};
