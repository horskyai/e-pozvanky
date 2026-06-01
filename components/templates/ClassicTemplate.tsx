"use client";

import { Invitation } from "@/types/invitation";

interface Props {
  data: Invitation;
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-");
  const months = [
    "ledna", "února", "března", "dubna", "května", "června",
    "července", "srpna", "září", "října", "listopadu", "prosince",
  ];
  const m = parseInt(month, 10) - 1;
  return `${parseInt(day, 10)}. ${months[m] ?? ""} ${year}`;
}

export default function ClassicTemplate({ data }: Props) {
  const { fields } = data;

  return (
    <div
      className="relative w-full max-w-sm mx-auto bg-[#fdfaf7] flex flex-col items-center text-center overflow-hidden"
      style={{ minHeight: "640px", fontFamily: "var(--font-playfair), Georgia, serif" }}
    >
      {/* Rohové dekorativní ornamenty */}
      <Corner className="top-0 left-0" />
      <Corner className="top-0 right-0 rotate-90" />
      <Corner className="bottom-0 left-0 -rotate-90" />
      <Corner className="bottom-0 right-0 rotate-180" />

      {/* Zlatá linka horní */}
      <div className="w-4/5 h-px bg-[#c5a880] mt-10" />
      <div className="w-3/5 h-px bg-[#c5a880] mt-1 mb-8" />

      {/* Svatební symbol */}
      <p
        className="text-[#c5a880] text-xs uppercase tracking-[4px] mb-6"
        style={{ fontFamily: "var(--font-montserrat), Arial, sans-serif" }}
      >
        Slavnostní oznámení
      </p>

      {/* Jméno ženicha */}
      <p className="text-[#2c2c2c] text-3xl font-normal leading-tight">
        {fields.zenich || "Ženich"}
      </p>

      {/* Ampersand */}
      <p
        className="text-[#c5a880] my-3 leading-none"
        style={{ fontSize: "52px", fontFamily: "Georgia, serif", fontStyle: "italic" }}
      >
        &amp;
      </p>

      {/* Jméno nevěsty */}
      <p className="text-[#2c2c2c] text-3xl font-normal leading-tight mb-8">
        {fields.nevesta || "Nevěsta"}
      </p>

      {/* Dekorativní větvička */}
      <Sprig />

      {/* Datum */}
      <p
        className="mt-6 text-xs uppercase tracking-[3px] text-[#666] mb-1"
        style={{ fontFamily: "var(--font-montserrat), Arial, sans-serif" }}
      >
        Zvou vás na svůj svatební den
      </p>
      <p className="text-[#2c2c2c] text-lg font-normal italic mb-1">
        {formatDate(fields.datum)}
      </p>
      <p
        className="text-[#666] text-sm mb-1"
        style={{ fontFamily: "var(--font-montserrat), Arial, sans-serif" }}
      >
        v {fields.cas || "14:00"} hod.
      </p>
      <p className="text-[#4e6351] text-base font-normal mb-8">
        {fields.misto || "Místo konání"}
      </p>

      {/* Zlatá linka střední */}
      <div className="w-3/5 h-px bg-[#c5a880] mb-1" />
      <div className="w-4/5 h-px bg-[#c5a880] mb-6" />

      {/* Vzkaz */}
      <p
        className="text-[#666] text-[13px] italic max-w-[240px] leading-relaxed mb-10 px-4"
        style={{ fontFamily: "var(--font-montserrat), Arial, sans-serif" }}
      >
        &ldquo;{fields.vzkaz || "Vzkaz pro hosty"}&rdquo;
      </p>
    </div>
  );
}

function Corner({ className }: { className: string }) {
  return (
    <svg
      className={`absolute w-14 h-14 text-[#c5a880] ${className}`}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4 L4 20 M4 4 L20 4"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M4 4 L18 18"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      <circle cx="4" cy="4" r="2" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

function Sprig() {
  return (
    <svg
      width="120"
      height="28"
      viewBox="0 0 120 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Střední linie */}
      <line x1="10" y1="14" x2="110" y2="14" stroke="#c5a880" strokeWidth="0.75" />
      {/* Levé lístky */}
      <ellipse cx="30" cy="10" rx="7" ry="3.5" fill="#4e6351" opacity="0.5" transform="rotate(-30 30 10)" />
      <ellipse cx="22" cy="14" rx="6" ry="3" fill="#4e6351" opacity="0.4" transform="rotate(-10 22 14)" />
      <ellipse cx="42" cy="8" rx="7" ry="3" fill="#4e6351" opacity="0.45" transform="rotate(-40 42 8)" />
      {/* Pravé lístky (zrcadlové) */}
      <ellipse cx="90" cy="10" rx="7" ry="3.5" fill="#4e6351" opacity="0.5" transform="rotate(30 90 10)" />
      <ellipse cx="98" cy="14" rx="6" ry="3" fill="#4e6351" opacity="0.4" transform="rotate(10 98 14)" />
      <ellipse cx="78" cy="8" rx="7" ry="3" fill="#4e6351" opacity="0.45" transform="rotate(40 78 8)" />
      {/* Střed – malý květ */}
      <circle cx="60" cy="14" r="3.5" fill="#c5a880" opacity="0.7" />
      <circle cx="60" cy="14" r="1.5" fill="#fdfaf7" />
    </svg>
  );
}
