import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const onest = Onest({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Condor Coders | Aprendamos a programar en comunidad",
  description:
    "Comunidad dedicada a aprender y compartir conocimientos en programación y tecnología. Estamos aquí para aprender juntos, compartir experiencias, resolver desafíos y ayudar a cada miembro para que alcance sus metas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={onest.className}>
        <div className="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
