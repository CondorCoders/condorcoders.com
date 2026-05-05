import { Twitch } from "@/icons/Twitch";
import { GitHub } from "@/icons/GitHub";
import { Youtube } from "@/icons/Youtube";
import { Discord } from "@/icons/Discord";

export const AboutUs = () => {
  return (
    <section className="relative bg-purple w-full flex flex-col items-center justify-center px-4 py-24">
      <div className="max-w-5xl w-full mx-auto">
        <h2 className="font-cabinet font-extrabold text-4xl md:text-5xl mb-4">
          ¿Qué encontrarás en Condor Coders?
        </h2>
        <p className="text-light/70 text-lg mb-12 max-w-2xl">
          Una comunidad donde aprendemos a programar juntos a través de
          distintas plataformas y formatos.
        </p>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
          {/* Twitch — wide card */}
          <a
            href="https://twitch.tv/condorcoders"
            target="_blank"
            rel="noopener noreferrer"
            className="group md:col-span-2 relative overflow-hidden rounded-3xl bg-light/5 border border-light/10 p-8 flex flex-col gap-6 hover:bg-light/10 transition-colors duration-300"
          >
            <div className="flex items-center justify-between">
              <Twitch className="w-10 h-10 text-white" />
              <span className="text-light/50 text-sm font-medium bg-light/10 px-3 py-1 rounded-full">
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

          {/* GitHub — tall card */}
          <a
            href="https://github.com/condorcoders"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-3xl bg-light/5 border border-light/10 p-8 flex flex-col gap-6 hover:bg-light/10 transition-colors duration-300"
          >
            <div className="flex items-center justify-between">
              <GitHub className="w-9 h-9 text-light" />
              <span className="text-light/50 text-sm font-medium bg-light/10 px-3 py-1 rounded-full">
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

          {/* YouTube — tall card */}
          <a
            href="https://youtube.com/@condorcoders"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-3xl bg-red-300/10 border border-red-300/20 p-8 flex flex-col gap-6 hover:bg-red-300/15 transition-colors duration-300"
          >
            <div className="flex items-center justify-between">
              <Youtube
                className="w-10 h-7 text-red-300"
                secondaryColor="#ffe2e2"
              />
              <span className="text-red-200 text-sm font-medium bg-red-100/15 px-3 py-1 rounded-full">
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

          {/* Community stat card */}
          <div className="rounded-3xl bg-purple/20 border border-purple/30 p-8 flex flex-col justify-end">
            <div className="flex flex-col gap-4">
              <span className="text-yellow text-sm font-medium bg-yellow/15 px-3 py-1 rounded-full self-start">
                100% gratis
              </span>
              <p className="font-cabinet font-bold text-2xl text-light">
                Sin barreras de acceso
              </p>
              <p className="text-light/60 text-sm leading-relaxed">
                Todo el contenido es gratuito y abierto para cualquier persona
                que quiera aprender a programar.
              </p>
            </div>
          </div>

          {/* Free & open card */}
          <a
            href="https://discord.com/invite/condorcoders"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl bg-yellow/10 border border-yellow/20 p-8 flex flex-col gap-6 justify-between hover:bg-yellow-300/15 transition-colors duration-300"
          >
            <div className="flex items-center justify-between">
              <Discord className="w-10 h-7 text-white" />
              <span className="text-purple-200 text-sm font-medium bg-purple-100/15 px-3 py-1 rounded-full">
                Comunidad
              </span>
            </div>
            <div>
              <h3 className="font-cabinet font-bold text-2xl text-light mb-2">
                Comunidad en Discord
              </h3>
              <p className="text-light/60 text-base leading-relaxed">
                Únete a nuestra comunidad en Discord para interactuar con otros
                programadores, compartir conocimientos y recibir ayuda en tus
                proyectos.
              </p>
            </div>
            <div className="mt-auto flex items-center gap-2 text-light/40 text-sm group-hover:text-light/70 transition-colors">
              <span>Unirme a Discord</span>
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
