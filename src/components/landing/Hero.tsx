"use client";

import { useEffect, useRef, useState } from "react";
import { FolderCard } from "../FolderCard";

const folderCards = [
  {
    foldText: "Recursos",
    heading: "Contenido de aprendizaje",
    description: "Tutoriales, ebooks y guías creadas por nosotros.",
    image: {
      src: "/Mascot-Male.webp",
      alt: "Contenido creado por CondorCoders",
      className: "size-20",
    },
    href: "/recursos",
    theme: {
      baseColor: "color-mix(in srgb, var(--color-purple) 80%, transparent)",
      hoverColor: "color-mix(in srgb, var(--color-purple) 80%, black)",
    },
  },
  {
    foldText: "Open Source",
    heading: "Nuestros proyectos",
    description: "Mira lo que hemos construido, accede al código y contribuye.",
    image: {
      src: "/disk.png",
      alt: "Proyectos de la comunidad",
      className: "size-15",
    },
    href: "/proyectos",
    theme: {
      baseColor: "color-mix(in srgb, var(--color-pink) 85%, transparent)",
      hoverColor: "color-mix(in srgb, var(--color-pink) 75%, black)",
    },
  },
  {
    foldText: "Herramientas",
    heading: "Catálogo para devs",
    description: "Herramientas, repos y recursos del internet.",
    image: {
      src: "/puzzle.png",
      alt: "Herramientas y recursos open source",
      className: "size-17",
    },
    href: "/herramientas",
    theme: {
      baseColor: "color-mix(in srgb, var(--color-blue) 90%, black)",
      hoverColor: "color-mix(in srgb, var(--color-blue) 65%, black)",
    },
  },
];

export const Hero = () => {
  const SPRITE_COLUMNS = 5;
  const SPRITE_ROWS = 5;
  const SPRITE_TOTAL_FRAMES = SPRITE_COLUMNS * SPRITE_ROWS - 1;
  const SPRITE_FRAME_DURATION_MS = 90;

  const containerRef = useRef(null);
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setFrame((prevFrame) => (prevFrame + 1) % SPRITE_TOTAL_FRAMES);
    }, SPRITE_FRAME_DURATION_MS);

    return () => clearInterval(intervalId);
  }, [SPRITE_FRAME_DURATION_MS, SPRITE_TOTAL_FRAMES]);

  const currentColumn = frame % SPRITE_COLUMNS;
  const currentRow = Math.floor(frame / SPRITE_COLUMNS);
  const backgroundPositionX =
    SPRITE_COLUMNS > 1 ? (currentColumn / (SPRITE_COLUMNS - 1)) * 100 : 0;
  const backgroundPositionY =
    SPRITE_ROWS > 1 ? (currentRow / (SPRITE_ROWS - 1)) * 100 : 0;

  return (
    <section
      ref={containerRef}
      className="relative isolate m-auto overflow-hidden flex min-h-dvh py-12 flex-col items-center justify-center px-7"
    >
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[62%_center] md:object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/video-still.png"
      >
        <source src="/videos/clouds-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 -z-10 bg-black/45 md:bg-transparent md:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.0)_5%,rgba(255,255,255,0.85)_100%)]" />

      <div className="flex w-full md:max-w-6xl gap-4 flex-col items-center justify-center">
        <div
          role="img"
          aria-label="Condorita volando"
          className="size-32 md:size-52 shrink-0 bg-no-repeat"
          style={{
            backgroundImage: "url('/condorita-bird_flying_forward.png')",
            backgroundSize: `${SPRITE_COLUMNS * 100}% ${SPRITE_ROWS * 100}%`,
            backgroundPosition: `${backgroundPositionX}% ${backgroundPositionY}%`,
          }}
        />
        <h1 className="md:max-w-3xl text-5xl lg:text-7xl font-cabinet font-semibold text-center text-shadow-lg mb-4 text-violet-100">
          Aprende a programar en comunidad
        </h1>
        <div className="mt-2 flex flex-col md:flex-row w-full items-stretch gap-8 md:gap-4">
          {folderCards.map((card) => (
            <FolderCard
              key={card.heading}
              {...card}
              className="flex-1 self-stretch"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
