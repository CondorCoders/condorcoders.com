"use client";

import { Facebook } from "@/icons/Facebook";
import { GitHub } from "@/icons/GitHub";
import { Instagram } from "@/icons/Instagram";
import { Youtube } from "@/icons/Youtube";
import Image from "next/image";
import { LinkTag } from "../LinkTag";
import { useRef } from "react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

const socialMediaLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    url: "https://www.instagram.com/condorcoders/",
  },
  {
    icon: Youtube,
    label: "Youtube",
    url: "https://www.youtube.com/@condorcoders",
  },
  {
    icon: Facebook,
    label: "Facebook",
    url: "https://www.facebook.com/condorcoders/",
  },
  { icon: GitHub, label: "GitHub", url: "https://github.com/CondorCoders" },
];

export const Hero = () => {
  const containerRef = useRef(null);
  const circleRef = useRef(null);
  const mascotRef = useRef(null);

  return (
    <section
      ref={containerRef}
      className="m-auto overflow-hidden flex min-h-dvh flex-col items-center justify-center px-7 text-center bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#000000] via-[#150050] to-[#3f0071]"
    >
      <div className="flex flex-col items-center max-w-5xl ">
        <div
          ref={circleRef}
          className="aspect-square rounded-full bg-purple size-28 flex flex-col items-center justify-center"
        >
          <Image
            ref={mascotRef}
            width={100}
            height={100}
            src="/Mascot-Female.webp"
            alt="Imagen de condorita"
          />
        </div>
        <h1 className="text-5xl lg:text-7xl text-center font-bold">
          Aprende a programar en comunidad
        </h1>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        {socialMediaLinks.map((social) => (
          <Link
            className={buttonVariants({ variant: "outline" })}
            href={social.url}
            key={social.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <social.icon />
            {social.label}
          </Link>
        ))}
      </div>
    </section>
  );
};
