import { FolderCard } from "@/components/FolderCard";
import { GitHub } from "@/icons/GitHub";
import { Metadata } from "next";
import { proyectosConfig } from "./proyectosConfig";

export const metadata: Metadata = {
  title: "Proyectos Condor Coders",
  description: "Encuentra todos los proyectos de la comunidad.",
};

export default function ProyectosPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-3 pb-16 pt-24">
      <h1 className="text-3xl font-semibold md:text-5xl">
        Proyectos CondorCoders
      </h1>
      <p className="mt-3 text-light/70">
        Iniciativas creadas por CondorCoders y desarrolladas en colaboración con
        la comunidad.
      </p>

      <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {proyectosConfig.map((proyecto) => (
          <FolderCard
            key={proyecto.title}
            foldText="Open Source"
            heading={proyecto.title}
            description={proyecto.description}
            descriptionClassName="text-sm leading-5"
            image={{
              src: proyecto.thumbnail,
              alt: `Imagen de ${proyecto.title}`,
            }}
            href={proyecto.link}
            external
            actions={[
              { label: "Ver web", href: proyecto.link, external: true },
              {
                label: "Ver código",
                href: proyecto.actionLink,
                icon: <GitHub className="size-3.5" />,
                external: true,
              },
            ]}
            theme={{
              baseColor: "color-mix(in srgb, var(--color-purple) 70%, black)",
              hoverColor: "color-mix(in srgb, var(--color-purple) 60%, black)",
            }}
          />
        ))}
      </section>
    </section>
  );
}
