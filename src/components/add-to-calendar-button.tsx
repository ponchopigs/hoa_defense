"use client";

import { CalendarPlus } from "lucide-react";

const EVENT_TITLE = "Deck Assessment Vote – Independence Avenue HOA";
const EVENT_LOCATION = "Independence Avenue HOA clubhouse";
const EVENT_DESCRIPTION =
  "Board-scheduled special assessment vote on the deck replacement project. Show up, object on the record, and demand the HOA honor existing CC&Rs.";
const DTSTART_UTC = "20251017T010000Z"; // Oct 16, 2025 at 7:00 PM MDT
const DTEND_UTC = "20251017T020000Z"; // One hour meeting window

function formatDateStamp(): string {
  const now = new Date();
  const pad = (value: number) => `${value}`.padStart(2, "0");
  return `${now.getUTCFullYear()}${pad(now.getUTCMonth() + 1)}${pad(now.getUTCDate())}T${pad(
    now.getUTCHours()
  )}${pad(now.getUTCMinutes())}${pad(now.getUTCSeconds())}Z`;
}

export function AddToCalendarButton() {
  function handleClick() {
    const uid = `${Date.now()}@deck-defense`; // simple unique id
    const dtStamp = formatDateStamp();
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Deck Defense Alliance//Calendar//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      `UID:${uid}`,
      `DTSTAMP:${dtStamp}`,
      `SUMMARY:${EVENT_TITLE}`,
      `DTSTART:${DTSTART_UTC}`,
      `DTEND:${DTEND_UTC}`,
      `LOCATION:${EVENT_LOCATION}`,
      `DESCRIPTION:${EVENT_DESCRIPTION.replace(/\n/g, " ")}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "deck-defense-oct16-event.ics";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex w-full items-center justify-center gap-2 rounded-2xl border border-sky-300 bg-white px-6 py-3 text-sm font-semibold text-sky-700 shadow-sm transition hover:border-sky-400 hover:bg-sky-50 sm:w-auto"
    >
      <CalendarPlus className="h-4 w-4" />
      Add Oct 16 vote to calendar
    </button>
  );
}
