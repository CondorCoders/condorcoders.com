import { ArrowRight } from "@/icons/ArrowRight";
import { cn } from "@/lib/utils";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { CSSProperties, ReactNode } from "react";

interface FolderCardImage {
  src: string | StaticImageData;
  alt?: string;
  className?: string;
  sizes?: string;
}

interface FolderCardAction {
  label: string;
  href: string;
  icon?: ReactNode;
  external?: boolean;
  className?: string;
}

interface FolderCardTheme {
  baseColor?: string;
  hoverColor?: string;
}

interface FolderCardProps {
  className?: string;
  foldText: string;
  heading: string;
  headingMeta?: ReactNode;
  headingMetaPosition?: "before" | "after";
  description: string;
  descriptionClassName?: string;
  image?: FolderCardImage;
  href: string;
  external?: boolean;
  theme?: FolderCardTheme;
  actions?: FolderCardAction[];
  footerSlot?: ReactNode;
}

export const FolderCard = ({
  className,
  foldText,
  heading,
  headingMeta,
  headingMetaPosition = "before",
  description,
  descriptionClassName,
  image,
  href,
  external,
  theme,
  actions,
  footerSlot,
}: FolderCardProps) => {
  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  const colorVars = {
    "--folder-card-bg": theme?.baseColor ?? "rgb(var(--secondary) / 0.8)",
    "--folder-card-bg-hover": theme?.hoverColor ?? "rgb(var(--secondary) / 1)",
  } as CSSProperties;

  return (
    <article
      className={cn(
        "group relative flex w-full max-w-[500px] self-stretch flex-col",
        className,
      )}
      style={colorVars}
    >
      <Link
        href={href}
        className="absolute inset-0 z-10"
        aria-label={heading}
        {...linkProps}
      />

      <div className="relative z-20 pointer-events-none min-w-fit w-[40%] rounded-t-2xl bg-[var(--folder-card-bg)] px-4 pt-2 pb-0 text-white backdrop-blur-[3px] transition-colors duration-200 ease-in-out [clip-path:polygon(0_0,80%_0,100%_100%,0_100%)] group-hover:bg-[var(--folder-card-bg-hover)]">
        <span className="relative z-20 block text-sm">{foldText}</span>
      </div>

      <div className="-mt-px relative z-20 pointer-events-none gap-4 flex min-h-0 flex-1 flex-col rounded-tr-2xl rounded-br-2xl rounded-bl-2xl bg-[var(--folder-card-bg)] p-4 text-white backdrop-blur-[3px] transition-colors duration-200 ease-in-out group-hover:bg-[var(--folder-card-bg-hover)]">
        {image && (
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={image.src}
              alt={image.alt || heading}
              width={1280}
              height={720}
              sizes={
                image.sizes ??
                "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              }
              className={cn(
                "max-h-[200px] w-full object-cover object-top",
                image.className,
              )}
            />
          </div>
        )}
        <div className="flex flex-1 flex-col gap-2">
          {headingMeta && headingMetaPosition === "before" ? (
            <div className="text-xs text-white/70">{headingMeta}</div>
          ) : null}
          <Link
            href={href}
            className="pointer-events-auto relative z-30 inline-flex w-fit items-center gap-2"
            aria-label={heading}
            {...linkProps}
          >
            <h3 className="inline-flex items-center gap-2 text-2xl font-bold">
              {heading}
            </h3>
          </Link>
          {headingMeta && headingMetaPosition === "after" ? (
            <div className="text-xs text-white/70">{headingMeta}</div>
          ) : null}
          <p
            className={cn(
              "m-0 leading-6 text-white/80",
              descriptionClassName,
            )}
          >
            {description}
          </p>
          {(actions?.length || footerSlot) && (
            <div className="pointer-events-auto relative z-30 mt-auto border-t border-white/15 pt-3 text-sm text-white/75">
              {actions?.length ? (
                <div className="flex flex-wrap gap-2">
                  {actions.map((action) => {
                    const actionLinkProps = action.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {};

                    return (
                      <Link
                        key={`${action.label}-${action.href}`}
                        href={action.href}
                        className={cn(
                          "pointer-events-auto inline-flex items-center gap-1 rounded-md border border-white/20 px-3 py-1.5 text-xs text-white/90 transition-colors hover:bg-white/10",
                          action.className,
                        )}
                        {...actionLinkProps}
                      >
                        {action.icon}
                        {action.label}
                        <ArrowRight className="size-3.5" />
                      </Link>
                    );
                  })}
                </div>
              ) : null}
              {footerSlot ? <div className={cn(actions?.length ? "mt-2" : "")}>{footerSlot}</div> : null}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
