export interface Event {
  url: string;
  thumbnail: string;
  title: string;
  time: number;
  description: string;
  modalidad: "online" | "presencial";
  calendarLink: string;
}

export interface EventPage {
  banner: Banner;
  speakers: Speakers;
  sponsors: Sponsors;
  agenda: Agenda;
}

interface ItineraryItem {
  start: number;
  end: number;
  heading: string;
  description: string;
  speaker: Speaker;
}

interface Agenda {
  title: string;
  description: string;
  itinerary: ItineraryItem[];
}

interface Sponsors {
  title: string;
  description: string;
  brands: Brands;
}

interface Brands {
  juniors?: Brand[];
  mid?: Brand[];
  senior?: Brand[];
}

interface Brand {
  logo: string;
  name: string;
  href: string;
}

interface Speakers {
  title: string;
  description: string;
  profiles: Speaker[];
}

interface Speaker {
  name: string;
  title: string;
  image: string;
  socials: Social[];
}

interface Social {
  icon: string;
  href: string;
}

interface Banner {
  image: string;
  title: string;
  time: number;
  description: string;
  calendarLink: string;
  eventLink: string;
}
