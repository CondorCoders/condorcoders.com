"use client";

import { gsap, ScrollTrigger } from "@/utils/gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import { useRef } from "react";

export const AboutUs = () => {
  const mascotRef = useRef(null);
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const splitText = new SplitText(textRef.current, {
      type: "words,chars",
    });

    const chars = splitText.chars;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+50%",
      scrub: true,
      pin: true,
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        end: "center top",
        scrub: true,
      },
    });

    timeline
      .from(chars, {
        opacity: 0,
        stagger: 0.05,
        ease: "power2.out",
      })
      .from(
        mascotRef.current,
        {
          y: 4,
          opacity: 0,
          scale: 0.8,
          ease: "power2.out",
        },
        0,
      );
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-purple min-h-dvh w-full flex flex-col items-center justify-center px-4"
    >
      <Image
        ref={mascotRef}
        width={100}
        height={100}
        src="/Mascot-Male.webp"
        alt="Imagen de condorit0"
        className="absolute -top-44 size-80 mx-auto"
      />
      <div className="max-w-6xl m-auto px-4">
        <div className="relative">
          <span
            aria-hidden="true"
            ref={textRef}
            className="absolute top-0 left-0 text-4xl lg:text-7xl font-bold"
          >
            CondorCoders es una comunidad de desarrolladores apasionados por la
            tecnología y la programación.
          </span>
          <h2 className="text-4xl lg:text-7xl opacity-25 font-bold">
            CondorCoders es una comunidad de desarrolladores apasionados por la
            tecnología y la programación.
          </h2>
        </div>
      </div>
    </section>
  );
};
