import { Calendar } from "@/icons/Calendar";
import Link from "next/link";
import { LinkTag } from "./LinkTag";
import { ArrowRight } from "@/icons/ArrowRight";
import { Gmail } from "@/icons/Gmail";
import { formatDate } from "@/utils/formatDate";

interface EventCardProps {
  url: string;
  thumbnail: string;
  title: string;
  time: number;
  description: string;
  modalidad: "online" | "presencial";
  calendarLink: string;
}

export default function EventCard({
  url,
  thumbnail,
  title,
  time,
  description,
  modalidad,
  calendarLink,
}: EventCardProps) {
  return (
    <article className="group overflow-hidden col-span-12 relative rounded-xl md:col-span-6 lg:col-span-4">
      {/* Fondo oscuro para resaltar el texto */}
      <div
        className="z-10 absolute top-0 bottom-0 w-full h-full
      bg-linear-to-b from-transparent from-30% via-black/80 to-black/90"
      />
      {/* Tag */}
      <div className="uppercase py-2 px-4 bg-brand-100 rounded-bl-lg font-semibold absolute top-0 right-0 z-20">
        {modalidad}
      </div>

      {/* Imagen de fondo */}
      <div
        className="group-hover:scale-110 bg-blend-luminosity bg-brand-600 transition-scale duration-500 ease-in-out w-full h-full absolute top-0 left-0 bottom-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${thumbnail})` }}
      />
      <div className="relative z-20 flex h-full flex-col justify-end p-4 gap-1">
        {/* Link envuelve todo el componente para hacerlo clicleable */}
        <Link
          className="before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:bottom-0"
          href={url}
        >
          <h2 className="font-semibold text-balance text-xl">{title}</h2>
        </Link>

        {/* Horario */}
        <div className="flex gap-2">
          <Calendar className="size-5" />
          <time>{formatDate(time)}</time>
        </div>

        <p className="text-sm">{description}</p>
        {/* Acciones */}
        <div className="mt-2 flex flex-wrap gap-4 justify-between items-center">
          <LinkTag
            target="_blank"
            icon={<Gmail className="size-5" />}
            href={calendarLink}
            label="Añadir a calendario"
            className="z-10 w-fit hidden md:flex"
          />
          <LinkTag
            target="_blank"
            icon={<Gmail className="size-5" />}
            href={calendarLink}
            label="Guardar"
            className="z-10 w-fit md:hidden"
          />
          <div className="ml-auto">
            <p className="flex gap-2 items-center">
              Ver evento <ArrowRight className="size-4" />
            </p>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 ease-in-out h-[2px] bg-brand-100"></span>
          </div>
        </div>
      </div>
    </article>
  );
}
