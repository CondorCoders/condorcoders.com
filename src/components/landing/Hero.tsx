"use client";

import { Facebook } from "@/icons/Facebook";
import { GitHub } from "@/icons/GitHub";
import { Instagram } from "@/icons/Instagram";
import { Youtube } from "@/icons/Youtube";
import Image from "next/image";
import { LinkTag } from "../LinkTag";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  const container = useRef(null);
  const circle = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(circle.current, {
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=30%",
        scrub: true,
        pin: true,
        pinSpacing: true,
        markers: true,
      },
      scale: 20,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section
      ref={container}
      className="m-auto overflow-hidden bg-primary flex min-h-dvh flex-col items-center justify-center px-7 text-center"
    >
      <div className="flex flex-col items-center relative">
        <div
          ref={circle}
          className="absolute bottom-0 left-0 aspect-square rounded-full bg-purple size-28"
        />
        <Image
          width={100}
          height={100}
          src="/Mascot-Female.webp"
          alt="Imagen de condorita"
          className="absolute bottom-0 left-0 size-40 top-16 animate-bounce"
        />
        <h1 className="text-8xl text-right">
          Programa en <br />
          <span className="font-cabinet text-8xl">comunidad</span>
        </h1>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        {socialMediaLinks.map((social) => (
          <LinkTag
            target="_blank"
            key={social.label}
            icon={<social.icon className="size-5" />}
            href={social.url}
            label={social.label}
          />
        ))}
      </div>
    </section>
  );
};
