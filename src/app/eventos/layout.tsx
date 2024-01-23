import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eventos Condor Coders",
  description: "Entérate de los eventos de la comunidad.",
};

export default function EventLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="m-auto max-w-6xl px-6 py-7 md:py-14">{children}</div>;
}
