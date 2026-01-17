"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { title: "Eventos", path: "/eventos" },
  { title: "Proyectos", path: "/proyectos" },
];

export default function Header() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`transition-colors backdrop-filter backdrop-blur-sm duration-500 m-auto fixed top-0 z-10 w-full
    ${isScrolling ? "bg-surface-mixed-100/75" : "bg-transparent"}`}
    >
      <div className="flex h-16 items-center justify-between px-6 py-3 max-w-6xl m-auto">
        <div className="flex gap-2 items-center">
          <Image
            width={50}
            height={50}
            src="/logos/icon-colour.svg"
            alt="Logo de Condor Coders"
          />
          <span className="text-lg font-family-cabinet font-bold leading-none">
            Condor <br /> Coders
          </span>
        </div>

        <nav className="flex items-center justify-center gap-2">
          {links.map((link) => (
            <Link
              key={link.title}
              className="opacity-80 transition-opacity ease-in-out hover:opacity-100"
              href={link.path}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
