import { LinkTag } from "@/components/LinkTag";
import { Facebook } from "@/icons/Facebook";
import { GitHub } from "@/icons/GitHub";
import { Instagram } from "@/icons/Instagram";
import { Youtube } from "@/icons/Youtube";
import Image from "next/image";

const socialMediaLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    url: "https://www.instagram.com/condorcoders/",
  },
  {
    icon: Youtube,
    label: "Youtube",
    url: "https://www.youtube.com/@condorcoders",
  },
  {
    icon: Facebook,
    label: "Youtube",
    url: "https://www.facebook.com/condorcoders/",
  },
  {
    icon: GitHub,
    label: "GitHub",
    url: "https://github.com/CondorCoders",
  },
];

export default function Home() {
  return (
    <section className="m-auto flex h-[calc((100vh-4rem))] max-w-4xl flex-col items-center justify-center px-7 text-center">
      <h1 className="text-2xl font-semibold md:text-6xl">
        <span className="opacity-30">🚧</span> En construcción{" "}
        <span className="opacity-30">🚧</span>
      </h1>
      <div className="flex">
        <Image
          width={600}
          height={600}
          className="w-6/12"
          src="/Mascot-Female.webp"
          alt="Female Mascota Condor Coders"
        />

        <Image
          width={600}
          height={600}
          className="w-6/12"
          src="/Mascot-Male.webp"
          alt="Mascota Condor Coders"
        />
      </div>

      <h2 className="text-md md:text-2xl">
        Pronto encontrarás toda la{" "}
        <span className="text-brand-500">información sobre programación</span> y
        nuestra comunidad. Mientras tanto, te invitamos a
        <span className="text-brand-500">
          {" "}
          seguirnos en nuestras redes sociales
        </span>{" "}
        para mantenerte al día
      </h2>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        {socialMediaLinks.map((social) => (
          <LinkTag
            target="_blank"
            key={social.label}
            icon={<social.icon className="size-5" />}
            href={social.url}
            label={social.label}
          />
        ))}
      </div>
    </section>
  );
}
