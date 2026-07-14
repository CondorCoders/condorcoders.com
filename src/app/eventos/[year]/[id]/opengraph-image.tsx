import { ImageResponse } from "next/og";
import { getEvent } from "./page";

export const runtime = "edge";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};
export const alt = "Condor Coders Evento";

interface Props {
  params: Promise<{ year: string; id: string }>;
}

const formatOgDate = (date: number) => {
  const timezoneDate = new Date(date);
  timezoneDate.setMinutes(
    timezoneDate.getMinutes() + timezoneDate.getTimezoneOffset(),
  );

  return Intl.DateTimeFormat("es-EC", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(timezoneDate);
};

export default async function Image({ params }: Props) {
  const { year, id } = await params;

  let title = "Evento Condor Coders";
  let description = "Aprendamos a programar en comunidad";
  let date = "";

  if (year && id) {
    try {
      const data = await getEvent(year, id);
      title = data.banner.title;
      description = data.banner.description;
      date = formatOgDate(data.banner.time);
    } catch {
      // Keep default values so OG generation still succeeds.
    }
  }

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #fdf2f8 0%, #f9a8d4 45%, #6ee7b7 100%)",
        color: "#111827",
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -140,
          right: -120,
          width: 420,
          height: 420,
          borderRadius: "9999px",
          background: "rgba(255, 255, 255, 0.35)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -180,
          left: -110,
          width: 380,
          height: 380,
          borderRadius: "9999px",
          background: "rgba(236, 72, 153, 0.2)",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          padding: "56px 64px",
        }}
      >
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: 9999,
              background: "#111827",
            }}
          />
          <p style={{ fontSize: 34, margin: 0, fontWeight: 700 }}>
            Condor Coders
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            maxWidth: "86%",
          }}
        >
          {date ? (
            <p
              style={{
                margin: 0,
                fontSize: 28,
                fontWeight: 600,
                opacity: 0.85,
              }}
            >
              {date} (GMT-5)
            </p>
          ) : null}

          <h1
            style={{
              margin: 0,
              fontSize: 74,
              lineHeight: 1.03,
              fontWeight: 800,
              letterSpacing: -1.2,
            }}
          >
            {title}
          </h1>

          <p
            style={{
              margin: 0,
              fontSize: 32,
              lineHeight: 1.25,
              opacity: 0.9,
            }}
          >
            {description.length > 120
              ? `${description.slice(0, 117)}...`
              : description}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ margin: 0, fontSize: 28, fontWeight: 600 }}>
            condorcoders.com/eventos/{id}
          </p>
          <p style={{ margin: 0, fontSize: 26, opacity: 0.8 }}>@condorcoders</p>
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
