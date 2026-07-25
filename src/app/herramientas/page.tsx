import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Herramientas | Condor Coders",
  description: "Herramientas para developers recomendadas por Condor Coders.",
};

export default function HerramientasPage() {
  return (
    <section className="mx-auto flex min-h-[calc(100dvh-5rem)] w-full max-w-4xl items-center justify-center px-6 py-16">
      <div className="flex w-full flex-col items-center gap-6 rounded-3xl border border-light/15 bg-light/5 p-10 text-center backdrop-blur-sm">
        <Image
          src="/Mascot-Male.webp"
          alt="Mascot de Condor Coders"
          width={180}
          height={180}
          className="h-auto w-28 md:w-36"
        />
        <span className="rounded-full bg-yellow/15 px-4 py-1 text-sm text-yellow">
          Próximamente
        </span>
        <h1 className="font-cabinet text-4xl font-bold md:text-5xl">
          Herramientas
        </h1>
        <p className="max-w-2xl text-base text-light/70 md:text-lg">
          Estamos armando un catálogo de herramientas para devs con opciones
          gratuitas y open source para que puedas construir más rápido.
        </p>
      </div>
    </section>
  );
}
