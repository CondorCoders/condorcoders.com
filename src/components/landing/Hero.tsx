"use client";

import { Facebook } from "@/icons/Facebook";
import { GitHub } from "@/icons/GitHub";
import { Instagram } from "@/icons/Instagram";
import { Youtube } from "@/icons/Youtube";
import Image from "next/image";
import { LinkTag } from "../LinkTag";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "@/utils/gsap";

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

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=30%",
        scrub: true,
        pin: true,
      },
    });

    timeline
      .to(
        circleRef.current,
        {
          scale: 20,
          ease: "power1.inOut",
        },
        0,
      )
      .to(
        mascotRef.current,
        {
          x: "20vw",
          y: "20vh",
          xPercent: -20,
          yPercent: 20,
          scale: 3,
          ease: "power1.inOut",
        },
        0,
      )
      .to(mascotRef.current, {
        x: "70vh",
        y: "-80vh",
        scale: 5,
        ease: "power1.inOut",
      });
  }, []);

  return (
    <section
      ref={containerRef}
      className="m-auto overflow-hidden bg-primary flex min-h-dvh flex-col items-center justify-center px-7 text-center"
    >
      <div className="flex flex-col items-center relative">
        <div
          ref={circleRef}
          className="lg:absolute lg:bottom-0 lg:left-0 aspect-square rounded-full bg-purple size-28"
        />
        <Image
          ref={mascotRef}
          width={100}
          height={100}
          src="/Mascot-Female.webp"
          alt="Imagen de condorita"
          className="absolute -top-16 lg:bottom-0 lg:left-0 size-40 lg:top-16"
        />
        <h1 className="text-5xl lg:text-8xl text-center lg:text-right">
          Programa en <br className="hidden lg:block" />
          <span className="font-cabinet">comunidad</span>
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
