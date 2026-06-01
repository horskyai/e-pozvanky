"use client";

import { useState } from "react";
import Link from "next/link";
import ClassicTemplate from "@/components/templates/ClassicTemplate";
import { defaultInvitation, type Invitation, type InvitationFields } from "@/types/invitation";

const FIELD_LABELS: { key: keyof InvitationFields; label: string; type?: string }[] = [
  { key: "zenich", label: "Jméno ženicha" },
  { key: "nevesta", label: "Jméno nevěsty" },
  { key: "datum", label: "Datum svatby", type: "date" },
  { key: "cas", label: "Čas obřadu", type: "time" },
  { key: "misto", label: "Místo konání" },
  { key: "vzkaz", label: "Vzkaz hostům" },
];

type Tab = "nahled" | "formular";

export default function EditorClient() {
  const [data, setData] = useState<Invitation>(defaultInvitation);
  const [activeTab, setActiveTab] = useState<Tab>("formular");

  function handleField(key: keyof InvitationFields, value: string) {
    setData((prev) => ({
      ...prev,
      fields: { ...prev.fields, [key]: value },
    }));
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f8f6]">
      {/* Horní lišta */}
      <header className="bg-white border-b border-[#eaeaea] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-5 py-4">
          <Link
            href="/"
            className="font-serif text-xl font-semibold tracking-wide text-[#4e6351]"
          >
            E-Pozvánky
          </Link>
          <span className="text-sm text-[#666] hidden sm:block">
            Klasická Elegance
          </span>
          <div className="flex gap-3">
            <Link
              href="/"
              className="text-sm text-[#666] hover:text-[#2c2c2c] transition-colors hidden sm:block"
            >
              ← Zpět
            </Link>
            <button className="bg-[#4e6351] text-white px-4 py-2 rounded text-xs font-semibold uppercase tracking-widest hover:bg-[#3d4f40] transition-colors opacity-50 cursor-not-allowed">
              Uložit & sdílet
            </button>
          </div>
        </div>
      </header>

      {/* Mobilní přepínač záložek */}
      <div className="md:hidden flex border-b border-[#eaeaea] bg-white">
        {(["formular", "nahled"] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 text-sm font-semibold uppercase tracking-widest transition-colors ${
              activeTab === tab
                ? "text-[#4e6351] border-b-2 border-[#4e6351]"
                : "text-[#999]"
            }`}
          >
            {tab === "formular" ? "Upravit" : "Náhled"}
          </button>
        ))}
      </div>

      {/* Hlavní obsah */}
      <div className="flex-1 flex flex-col md:flex-row max-w-6xl mx-auto w-full">
        {/* Formulář */}
        <aside
          className={`
            w-full md:w-80 lg:w-96 bg-white border-r border-[#eaeaea] p-6
            ${activeTab === "formular" ? "block" : "hidden"} md:block
          `}
        >
          <h2 className="font-serif text-lg mb-1 text-[#2c2c2c]">Upravte svoji pozvánku</h2>
          <p className="text-xs text-[#999] mb-6 font-sans uppercase tracking-widest">
            Změny se zobrazují okamžitě
          </p>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {FIELD_LABELS.map(({ key, label, type }) =>
              key === "vzkaz" ? (
                <div key={key}>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-[#666] mb-1.5 font-sans">
                    {label}
                  </label>
                  <textarea
                    rows={3}
                    value={data.fields[key]}
                    onChange={(e) => handleField(key, e.target.value)}
                    className="w-full border border-[#e0e0e0] rounded px-3 py-2 text-sm text-[#2c2c2c] font-sans focus:outline-none focus:border-[#4e6351] resize-none transition-colors"
                  />
                </div>
              ) : (
                <div key={key}>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-[#666] mb-1.5 font-sans">
                    {label}
                  </label>
                  <input
                    type={type ?? "text"}
                    value={data.fields[key]}
                    onChange={(e) => handleField(key, e.target.value)}
                    className="w-full border border-[#e0e0e0] rounded px-3 py-2 text-sm text-[#2c2c2c] font-sans focus:outline-none focus:border-[#4e6351] transition-colors"
                  />
                </div>
              )
            )}
          </form>

          <div className="mt-8 pt-6 border-t border-[#eaeaea]">
            <p className="text-xs text-[#bbb] font-sans text-center">
              Ukládání a sdílení bude dostupné v dalším kroku.
            </p>
          </div>
        </aside>

        {/* Náhled */}
        <main
          className={`
            flex-1 flex items-start justify-center py-12 px-4
            ${activeTab === "nahled" ? "block" : "hidden"} md:flex
          `}
        >
          <div className="w-full max-w-sm">
            {/* Stín a rámeček jako fyzická karta */}
            <div
              className="rounded-sm overflow-hidden"
              style={{
                boxShadow:
                  "0 2px 8px rgba(0,0,0,0.06), 0 16px 48px rgba(0,0,0,0.08), 0 0 0 1px rgba(197,168,128,0.15)",
              }}
            >
              <ClassicTemplate data={data} />
            </div>
            <p className="text-center text-xs text-[#bbb] mt-4 font-sans uppercase tracking-widest">
              Náhled pozvánky
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
