import { Twitch } from "@/icons/Twitch";
import { GitHub } from "@/icons/GitHub";
import { Youtube } from "@/icons/Youtube";
import { Discord } from "@/icons/Discord";
import { Instagram } from "@/icons/Instagram";
import { TikTok } from "@/icons/TikTok";
import Image from "next/image";

export const AboutUs = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center px-4 py-24">
      <div className="max-w-6xl w-full mx-auto">
        <h2 className="font-cabinet font-extrabold text-4xl md:text-5xl mb-4">
          ¿Qué encontrarás en Condor Coders?
        </h2>
        <p className="text-light/70 text-lg mb-12 max-w-2xl">
          Una comunidad donde aprendemos a programar juntos a través de
          distintas plataformas y formatos.
        </p>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
          {/* Twitch */}
          <a
            href="https://twitch.tv/condorcoders"
            target="_blank"
            rel="noopener noreferrer"
            className="group md:col-span-2 relative overflow-hidden rounded-3xl bg-[#9146ff]/12 border border-[#9146ff]/35 p-8 flex flex-col gap-6 hover:bg-[#9146ff]/20 transition-colors duration-300"
          >
            <div className="flex items-center justify-between">
              <Twitch className="w-10 h-10 text-[#bf94ff]" />
              <span className="text-[#d3b6ff] text-sm font-medium bg-[#9146ff]/22 px-3 py-1 rounded-full">
                En vivo
              </span>
            </div>
            <div>
              <h3 className="font-cabinet font-bold text-2xl text-white mb-2">
                Livestreams en Twitch
              </h3>
              <p className="text-light/60 text-base leading-relaxed">
                Sesiones en vivo donde programamos en tiempo real, resolvemos
                problemas y aprendemos tecnologías modernas juntos. Interactúa,
                pregunta y participa de la comunidad.
              </p>
            </div>
            <div className="mt-auto flex items-center gap-2 text-light/40 text-sm group-hover:text-light/70 transition-colors">
              <span>Ver canal</span>
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/condorcoders"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-3xl bg-[#24292f]/35 border border-[#6e7681]/35 p-8 flex flex-col gap-6 hover:bg-[#30363d]/45 transition-colors duration-300"
          >
            <div className="flex items-center justify-between">
              <GitHub className="w-9 h-9 text-[#f0f6fc]" />
              <span className="text-[#c9d1d9] text-sm font-medium bg-[#30363d]/70 px-3 py-1 rounded-full">
                Open Source
              </span>
            </div>
            <div>
              <h3 className="font-cabinet font-bold text-2xl text-light mb-2">
                Proyectos en GitHub
              </h3>
              <p className="text-light/60 text-base leading-relaxed">
                Código abierto de todos los proyectos que construimos. Explora,
                contribuye y aprende con ejemplos reales.
              </p>
            </div>
            <div className="mt-auto flex items-center gap-2 text-light/40 text-sm group-hover:text-light/70 transition-colors">
              <span>Ver repositorios</span>
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </a>

          {/* Instagram card */}
          <a
            href="https://www.instagram.com/condorcoders/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl bg-[#e1306c]/10 border border-[#e1306c]/35 p-8 flex flex-col gap-6 justify-between hover:bg-[#e1306c]/18 transition-colors duration-300"
          >
            <div className="flex items-center justify-between">
              <Instagram className="w-8 h-8 text-[#ff8ab3]" />
              <span className="text-[#ffc5d9] text-sm font-medium bg-[#e1306c]/22 px-3 py-1 rounded-full">
                Reels
              </span>
            </div>
            <div>
              <h3 className="font-cabinet font-bold text-2xl text-light mb-2">
                Comunidad en Instagram
              </h3>
              <p className="text-light/60 text-base leading-relaxed">
                Tips rápidos, anuncios y contenido corto para mantenerte al día
                con la comunidad.
              </p>
            </div>
            <div className="mt-auto flex items-center gap-2 text-light/40 text-sm group-hover:text-light/70 transition-colors">
              <span>Ver Instagram</span>
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com/@condorcoders"
            target="_blank"
            rel="noopener noreferrer"
            className="group md:col-span-2 relative overflow-hidden rounded-3xl bg-[#ff0000]/10 border border-[#ff0000]/35 p-8 flex flex-col gap-6 hover:bg-[#ff0000]/16 transition-colors duration-300"
          >
            <div className="flex items-center justify-between">
              <Youtube
                className="w-10 h-7 text-[#ff4d4d]"
                secondaryColor="#fff1f1"
              />
              <span className="text-[#ffb3b3] text-sm font-medium bg-[#ff0000]/20 px-3 py-1 rounded-full">
                Tutoriales
              </span>
            </div>
            <div>
              <h3 className="font-cabinet font-bold text-2xl text-light mb-2">
                Tutoriales en YouTube
              </h3>
              <p className="text-light/60 text-base leading-relaxed">
                Videos explicativos, tutoriales paso a paso y grabaciones de los
                livestreams. Aprende a tu ritmo cuando quieras.
              </p>
            </div>
            <div className="mt-auto flex items-center gap-2 text-light/40 text-sm group-hover:text-light/70 transition-colors">
              <span>Ver canal</span>
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </a>

          {/* TikTok card */}
          <a
            href="https://www.tiktok.com/@condorcoders"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl bg-[#25f4ee]/8 border border-[#25f4ee]/35 p-8 flex flex-col gap-6 justify-between hover:bg-[#fe2c55]/16 transition-colors duration-300"
          >
            <div className="flex items-center justify-between">
              <TikTok className="w-8 h-8 text-[#f4f4f4]" />
              <span className="text-[#bffaf7] text-sm font-medium bg-[#25f4ee]/20 px-3 py-1 rounded-full">
                Clips
              </span>
            </div>
            <div>
              <h3 className="font-cabinet font-bold text-2xl text-light mb-2">
                Contenido en TikTok
              </h3>
              <p className="text-light/60 text-base leading-relaxed">
                Microtutoriales y momentos destacados para aprender algo útil en
                pocos minutos.
              </p>
            </div>
            <div className="mt-auto flex items-center gap-2 text-light/40 text-sm group-hover:text-light/70 transition-colors">
              <span>Ver TikTok</span>
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </a>
          {/* Discord */}
          <a
            href="https://discord.com/invite/condorcoders"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl bg-[#5865f2]/12 border border-[#5865f2]/35 p-8 flex flex-col gap-6 justify-between hover:bg-[#5865f2]/20 transition-colors duration-300"
          >
            <div className="flex items-center justify-between">
              <Discord className="w-10 h-7 text-[#b9c0ff]" />
              <span className="text-[#d3d7ff] text-sm font-medium bg-[#5865f2]/20 px-3 py-1 rounded-full">
                Comunidad
              </span>
            </div>
            <div>
              <h3 className="font-cabinet font-bold text-2xl text-light mb-2">
                Comunidad en Discord
              </h3>
              <p className="text-light/60 text-base leading-relaxed">
                Interactua con otros programadores, comparte conocimientos y
                recibir ayuda en tus proyectos.
              </p>
            </div>
            <div className="mt-auto flex items-center gap-2 text-light/40 text-sm group-hover:text-light/70 transition-colors">
              <span>Unirme a Discord</span>
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </a>
          {/* Sofia intro card */}
          <div className="rounded-3xl bg-purple/20 border border-purple/30 p-8 flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-4">
              <div className="size-25 overflow-hidden rounded-full">
                <Image
                  src="/foto-de-perfil.png"
                  alt="Foto de perfil de Sofía"
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-yellow text-sm font-medium bg-yellow/15 px-3 py-1 rounded-full self-start">
                Fundadora
              </span>
              <p className="font-cabinet font-bold text-2xl text-light">
                Hola, soy Sofía
              </p>
              <p className="text-light/60 text-sm leading-relaxed">
                Programadora frontend de Ecuador, actualmente residente en
                Australia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
