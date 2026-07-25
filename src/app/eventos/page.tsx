import { FolderCard } from "@/components/FolderCard";
import { Calendar } from "@/icons/Calendar";
import { Event } from "./event.types";
import { Metadata } from "next";
import { formatDate } from "@/utils/formatDate";

export const metadata: Metadata = {
  title: "Eventos de CondorCoders",
  description: "Entérate de los eventos de la comunidad.",
};

const getEvents = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/CondorCoders/condorcoders-config/main/pages/events/index.json"
  );
  const data = await res.json();
  return data;
};

export async function generateStaticParams() {
  const data: Event[] = await getEvents();
  return data.map((event) => ({ slug: event.url }));
}

export default async function EventosPage() {
  const events: Event[] = await getEvents();
  return (
    <section className="mx-auto w-full max-w-6xl px-3 pb-16 pt-24">
      <h1 className="text-3xl font-semibold md:text-5xl">
        Eventos de CondorCoders
      </h1>
      <p className="mt-3 text-light/70">
        Sesiones y actividades creadas por CondorCoders para aprender y
        practicar en comunidad.
      </p>

      <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <FolderCard
            key={event.title}
            foldText={event.modalidad.toUpperCase()}
            heading={event.title}
            headingMeta={formatDate(event.time)}
            headingMetaPosition="before"
            description={event.description}
            descriptionClassName="text-sm leading-5"
            image={{
              src: event.thumbnail,
              alt: `Banner de ${event.title}`,
            }}
            href={event.url}
            actions={[
              {
                label: "Ver evento",
                href: event.url,
              },
              {
                label: "Guardar fecha",
                href: event.calendarLink,
                icon: <Calendar className="size-3.5" />,
                external: true,
              },
            ]}
            theme={{
              baseColor: "color-mix(in srgb, var(--color-pink) 70%, black)",
              hoverColor: "color-mix(in srgb, var(--color-pink) 60%, black)",
            }}
          />
        ))}
      </section>
    </section>
  );
}
