import EventCard from "@/components/EventCard";
import { Event } from "./event.types";

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
    <>
      <h1 className="text-3xl font-semibold md:text-5xl">
        Entérate de nuestros eventos
      </h1>

      <section className="mt-7 grid auto-rows-[25rem] grid-cols-12 gap-4">
        {events.map((event) => (
          <EventCard
            key={event.title}
            url={event.url}
            thumbnail={event.thumbnail}
            title={event.title}
            time={event.time}
            description={event.description}
            modalidad={event.modalidad}
            calendarLink={event.calendarLink}
          />
        ))}
      </section>
    </>
  );
}
