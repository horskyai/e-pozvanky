import Link from "next/link";
import Image from "next/image";

const templates = [
  {
    id: 1,
    title: "Zlatá Elegance",
    author: "Studio Minimalist",
    img: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    title: "Květinový Sen",
    author: "Flora Design",
    img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    title: "Rustikální Eukalyptus",
    author: "Greenery Art",
    img: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 4,
    title: "Moderní Monogram",
    author: "Urban Type",
    img: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=600",
  },
];

const filterLabels = [
  "Všechny styly",
  "Klasický & Elegantní",
  "Moderní & Minimalistický",
  "Rustikální & Boho",
  "Květinové motivy",
];

export default function Home() {
  return (
    <>
      {/* Navigace */}
      <header className="bg-white border-b border-[#eaeaea] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-5 py-5">
          <span className="font-serif text-2xl font-semibold tracking-wide text-[#4e6351]">
            E-Pozvánky
          </span>
          <ul className="hidden md:flex gap-8 list-none">
            {["Svatební oznámení", "Jak to funguje", "Ceník", "Inspirace"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm font-normal uppercase tracking-widest text-[#2c2c2c] hover:text-[#4e6351] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
          <div className="flex items-center gap-5">
            <a href="#" className="text-sm font-semibold hidden sm:block">
              Přihlásit se
            </a>
            <Link
              href="/editor"
              className="bg-[#4e6351] text-white px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-widest hover:bg-[#3d4f40] transition-colors"
            >
              Vytvořit návrh
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#f9f8f6] py-20 px-5 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[3px] text-[#c5a880] font-semibold mb-4">
            Ekologické & Elegantní
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-normal leading-tight mb-5 text-[#2c2c2c]">
            Online svatební oznámení s osobitým stylem
          </h1>
          <p className="text-base text-[#666666] mb-8 max-w-lg mx-auto">
            Vytvořte hostům designovou pozvánku a rozešlete ji digitálně.
            Přizpůsobte si vzhled podle svých představ a sdílejte ji jediným
            odkazem.
          </p>
          <Link
            href="/editor"
            className="inline-block bg-[#4e6351] text-white px-8 py-4 rounded text-sm font-semibold uppercase tracking-widest hover:bg-[#3d4f40] transition-colors"
          >
            Prohlédnout kolekce
          </Link>
        </div>
      </section>

      {/* Filtry (dekorativní – bez funkce) */}
      <div className="max-w-6xl mx-auto px-5 mt-10 mb-5 flex justify-center gap-3 flex-wrap">
        {filterLabels.map((label, i) => (
          <button
            key={label}
            className={`px-4 py-2 rounded-full text-[13px] border transition-colors font-sans ${
              i === 0
                ? "bg-[#4e6351] text-white border-[#4e6351]"
                : "border-[#e0e0e0] hover:bg-[#4e6351] hover:text-white hover:border-[#4e6351]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Galerie */}
      <section className="max-w-6xl mx-auto px-5 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {templates.map((t) => (
            <Link
              href="/editor"
              key={t.id}
              className="group bg-white rounded-lg overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-full h-96 bg-[#f0f0f0] overflow-hidden relative">
                <Image
                  src={t.img}
                  alt={t.title}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  unoptimized
                />
              </div>
              <div className="py-4 px-1 text-center">
                <h3 className="font-serif text-lg font-normal mb-1">{t.title}</h3>
                <p className="text-xs text-[#666666] uppercase tracking-widest">
                  {t.author}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Jak to funguje */}
      <section className="bg-[#f9f8f6] py-20 px-5 text-center">
        <h2 className="font-serif text-3xl mb-12 text-[#2c2c2c]">Jak to funguje?</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: "✏️",
              title: "1. Výběr a úprava",
              text: "Zvolte si šablonu od profesionálních designérů a upravte si texty, barvy a písma podle sebe.",
            },
            {
              icon: "🔗",
              title: "2. Sdílení odkazu",
              text: "Pozvánku dostanete jako sdílitelný odkaz i PDF k tisku. Rozešlete ji hostům, jak jste zvyklí – přes WhatsApp, e-mail nebo sociální sítě.",
            },
            {
              icon: "✉️",
              title: "3. Potvrzení účasti (RSVP)",
              text: "Hosté potvrdí účast jedním klikem přímo v pozvánce a vy máte hned přehled, kdo dorazí.",
            },
          ].map((item) => (
            <div key={item.title} className="p-5">
              <div className="text-4xl mb-5">{item.icon}</div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-[#2c2c2c]">
                {item.title}
              </h3>
              <p className="text-sm text-[#666666]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Patička */}
      <footer className="bg-[#2c352e] text-white pt-16 pb-8 px-5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
          {[
            {
              heading: "Oznámení",
              links: ["Svatební kolekce", "Uložit datum (Save the Date)", "Poděkování"],
            },
            {
              heading: "Služby",
              links: ["Jak to funguje", "Ceník služeb", "Časté dotazy"],
            },
            {
              heading: "O nás",
              links: ["Náš příběh", "Kontakt", "Zásady ochrany údajů"],
            },
          ].map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs uppercase tracking-widest mb-5 text-[#c5a880] font-semibold">
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-[#cccccc] hover:text-white transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-6xl mx-auto border-t border-[#3d4a40] pt-8 flex flex-col sm:flex-row justify-between gap-4 text-[13px] text-[#aaaaaa]">
          <p>&copy; 2026 E-Pozvánky. Všechna práva vyhrazena.</p>
          <p>Inspirováno čistým designem digitálních pozvánek.</p>
        </div>
      </footer>
    </>
  );
}
