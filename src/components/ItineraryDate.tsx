"use client";

import { formatTime } from "@/utils/formatTime";

interface ItineraryDateProps {
  startDate: string;
  endDate: string;
}

export const ItineraryDate = ({ startDate, endDate }: ItineraryDateProps) => {
  return (
    <time className="mb-1 font-normal leading-none text-brand-600">
      {formatTime(startDate)} - {formatTime(endDate)}
    </time>
  );
};
