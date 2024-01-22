import Image from "next/image";
import { LinkTag } from "./LinkTag";
import { Instagram } from "@/icons/Instagram";
import { LinkedIn } from "@/icons/LinkedIn";
import { TikTok } from "@/icons/TikTok";

interface Social {
  icon: string;
  href: string;
}

interface SpeakerCardProps {
  name: string;
  image: string;
  title: string;
  socials: Social[];
}

export const SpeakerCard = ({
  image,
  name,
  socials,
  title,
}: SpeakerCardProps) => {
  return (
    <div className="group flex flex-col items-center gap-4 justify-center bg-gradient-to-br p-8 from-surface-mixed-100 via-transparent hover:via-white/5  to-transparent transition-all col-span-6 md:col-span-3 lg:col-span-2 shadow-inner shadow-white/10 rounded-xl">
      <figure>
        <Image
          width={200}
          height={200}
          src={image}
          alt={name}
          className="size-36 object-cover rounded-full"
        />
      </figure>
      <h3 className="text-xl font-bold text-center">{name}</h3>
      <p className="text-center">{title}</p>
      <div className="flex items-center justify-center gap-4">
        {socials.map((social) => {
          const Icon = {
            instagram: Instagram,
            linkedin: LinkedIn,
            tiktok: TikTok,
          }[social.icon];

          if (!Icon) return null;
          return (
            <LinkTag
              key={social.icon}
              className=" min-w-fit"
              icon={<Icon className="size-4" />}
              href={social.href}
            />
          );
        })}
      </div>
    </div>
  );
};
