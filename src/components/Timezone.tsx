"use client";
import { Clock } from "@/icons/Clock";

export const Timezone = () => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <span className="flex gap-2 items-center">
      <Clock className="size-5" />
      Zona horaria:{" "}
      <span className="font-semibold text-brand-600">{timezone}</span>
    </span>
  );
};
