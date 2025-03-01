import { Card } from "@/components/Card";
import { GitHub } from "@/icons/GitHub";
import { Metadata } from "next";
import { proyectosConfig } from "./proyectosConfig";

export const metadata: Metadata = {
  title: "Proyectos Condor Coders",
  description: "Encuentra todos los proyectos de la comunidad.",
};

export default function ProyectosPage() {
  return (
    <>
      <h1 className="text-3xl font-semibold md:text-5xl">
        Proyectos de la comunidad
      </h1>
      <section className="mt-7 grid auto-rows-[25rem] grid-cols-12 gap-4">
        {proyectosConfig.map((proyecto) => (
          <Card
            {...proyecto}
            linkText="Ver proyecto"
            actionText="Github"
            actionIcon={<GitHub className="size-5" />}
          />
        ))}
      </section>
    </>
  );
}
