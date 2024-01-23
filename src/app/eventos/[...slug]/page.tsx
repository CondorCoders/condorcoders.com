import { LinkTag } from "@/components/LinkTag";
import { SpeakerCard } from "@/components/SpeakerCard";
import { SponsorCard } from "@/components/SponsorCard";
import { ArrowRight } from "@/icons/ArrowRight";
import { Calendar } from "@/icons/Calendar";
import { Gmail } from "@/icons/Gmail";
import Image from "next/image";
import { EventPage } from "../event.types";
import { Metadata } from "next";
import { formatDate } from "@/utils/formatDate";
import { formatTime } from "@/utils/formatTime";

interface Props {
  params: { slug: string[] };
  searchParams: { [key: string]: string | string[] | undefined };
}

const baseUrl =
  "https://raw.githubusercontent.com/CondorCoders/condorcoders-config/main/pages";

export const getEvent = async (
  year: string,
  id: string
): Promise<EventPage> => {
  const res = await fetch(`${baseUrl}/events/${year}/${id}.json`);
  const data = await res.json();
  return data;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const data = await getEvent(slug[0], slug[1]);

  return {
    title: data.banner.title,
    description: data.banner.description,
    openGraph: {
      images: [`${baseUrl}/images/opengraph/${slug[1]}.jpg`],
    },
  };
}

export default async function EventPage({ params }: Props) {
  const { slug } = params;
  const page: EventPage = await getEvent(slug[0], slug[1]);

  return (
    <>
      {/* Banner */}
      <section
        id="banner"
        className="flex flex-col justify-between gap-4 shadow-xl shadow-white/30 backdrop-blur-md p-8 w-full min-h-96 relative rounded-3xl overflow-hidden bg-gradient-to-br from-pink-50 from-30% via-pink-300 via-60% to-emerald-300 to-90%"
      >
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="text-surface-mixed-100 flex gap-2 items-end">
            <Calendar className="size-7 stroke-2" />
            <time>{formatDate(page.banner.time)}</time>
          </div>
          <h1 className="text-surface-mixed-100 font-bold text-4xl md:text-5xl">
            {page.banner.title}
          </h1>
        </div>

        <div className="w-full md:w-1/2 gap-4 flex flex-col">
          <p className="text-surface-mixed-100 md:text-lg">
            {page.banner.description}
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
            <LinkTag
              target="_blank"
              icon={<Gmail className="size-5" />}
              href={page.banner.calendarLink}
              label="Añadir a calendario"
              className="z-10 w-fit"
            />
            <a target="_blank" className="group" href={page.banner.eventLink}>
              <p className="flex gap-2 items-center text-surface-mixed-100">
                Ir al evento <ArrowRight className="size-4" />
              </p>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 ease-in-out h-[2px] bg-brand-100"></span>
            </a>
          </div>
        </div>
        <Image
          width={600}
          height={600}
          className="w-7/12 -scale-x-100 md:absolute md:-right-28 lg:-top-10 mx-auto mt-5"
          src={`/${page.banner.image}.webp`}
          alt="Female Mascota Condor Coders"
        />
      </section>
      {/* Invitados */}
      <section id="invitados" className="pt-20 flex flex-col gap-4">
        <h2 className="font-semibold text-5xl">
          {page.speakers.title || "Invitados"}
        </h2>
        <p className="text-xl md:w-8/12">{page.speakers.description}</p>
        <div className="grid pt-8 auto-rows-[25rem] grid-cols-6 gap-8">
          {page.speakers.profiles.map((speaker) => (
            <SpeakerCard key={speaker.name} {...speaker} />
          ))}
        </div>
      </section>
      {/* Sponsors */}
      <section id="sponsors" className="pt-40 flex flex-col gap-4">
        <h2 className="font-semibold text-5xl">
          {page.sponsors.title || "Sponsors"}
        </h2>
        <p className="text-xl md:w-8/12">{page.sponsors.description}</p>

        <div className="pt-8 grid grid-cols-6 gap-8 auto-rows-[10rem]">
          {page.sponsors.brands?.senior &&
            page.sponsors.brands.senior.map((brand) => (
              <SponsorCard
                key={brand.name}
                className="col-span-6 md:col-span-3 lg:col-span-2"
                {...brand}
              />
            ))}
          {page.sponsors.brands?.mid &&
            page.sponsors.brands?.mid.map((brand) => (
              <SponsorCard
                key={brand.name}
                className="col-span-3 md:col-span-2 lg:col-span-2"
                {...brand}
              />
            ))}
          {page.sponsors.brands?.juniors &&
            page.sponsors.brands.juniors.map((brand) => (
              <SponsorCard
                key={brand.name}
                className="col-span-3 md:col-span-2 lg:col-span-2"
                {...brand}
              />
            ))}
        </div>
      </section>
      {/* Agenda */}
      <section
        id="agenda"
        className="pt-40 mx-auto flex flex-wrap md:flex-nowrap gap-4"
      >
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-5xl">
            {page.agenda.title || "Agenda"}
          </h2>
          <p className="text-xl">{page.agenda.description}</p>
        </div>

        <ol className="mt-8 relative border-s max-w-xl border-gray-200 dark:border-gray-700">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
          {page.agenda.itinerary.map((item) => (
            <li key={item.heading} className="mb-20 ms-4">
              <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border  border-gray-900 bg-gray-700"></div>
              <time className="mb-1 font-normal leading-none text-brand-600">
                {formatTime(new Date(item.start))} -{" "}
                {formatTime(new Date(item.end))}
              </time>
              <h3 className="text-2xl font-semibold text-brand-600 ">
                {item.heading}
              </h3>
              <p className="font-normal ">{item.description}</p>
              {item.speaker && (
                <div className="mt-4 flex gap-4 items-center">
                  <Image
                    width={200}
                    height={200}
                    src={item.speaker.image}
                    alt={item.speaker.name}
                    className="size-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-bold">{item.speaker.name}</p>
                    {item.speaker.title && (
                      <p className="text-gray-400">{item.speaker.title}</p>
                    )}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
