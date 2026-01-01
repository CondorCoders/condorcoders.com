import Link from "next/link";
import { LinkTag } from "./LinkTag";
import { ArrowRight } from "@/icons/ArrowRight";
import { ReactNode } from "react";

interface CardProps {
  title: string;
  description?: string;
  thumbnail?: string;
  link: string;
  linkText?: string;
  actionIcon?: ReactNode;
  actionText?: string;
  actionLink?: string;
}

export const Card = ({
  title,
  description,
  thumbnail,
  link,
  linkText,
  actionIcon,
  actionLink,
  actionText,
}: CardProps) => {
  return (
    <article className="group overflow-hidden col-span-12 relative rounded-xl md:col-span-6 lg:col-span-4">
      {/* Fondo oscuro para resaltar el texto */}
      <div
        className="z-10 absolute top-0 bottom-0 w-full h-full
    bg-linear-to-b from-transparent from-30% via-black/80 to-black/90"
      />

      {/* Imagen de fondo */}
      {thumbnail && (
        <div
          className="group-hover:scale-110  transition-scale duration-500 ease-in-out w-full h-full absolute top-0 left-0 bottom-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${thumbnail})` }}
        />
      )}
      <div className="flex flex-col p-4 gap-2 relative z-10 h-full justify-end">
        <Link href={link} className="before:absolute before:inset-0">
          <h2 className="font-semibold text-balance text-xl">{title}</h2>
        </Link>
        <p>{description}</p>
        <div className="mt-2 flex flex-wrap gap-4 justify-between items-center">
          {actionLink && (
            <LinkTag
              target="_blank"
              icon={actionIcon}
              href={actionLink}
              label={actionText}
              className="z-10 w-fit"
            />
          )}
          <div className="ml-auto">
            <p className="flex gap-2 items-center">
              {linkText || "Ver más"} <ArrowRight className="size-4" />
            </p>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 ease-in-out h-[2px] bg-brand-100"></span>
          </div>
        </div>
      </div>
    </article>
  );
};
