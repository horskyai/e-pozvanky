"use client";
import { useState } from "react";

const templates = [
  {
    id: 1,
    name: "Elegantní luxusní",
    bg: "#f8f5ef",
    card: "background:white;padding:60px;border:2px solid #d4af37;max-width:560px;text-align:center;box-shadow:0 10px 30px rgba(0,0,0,0.1);font-family:Georgia,serif;",
    content: (
      <div style={{ fontFamily: "Georgia, serif", textAlign: "center" }}>
        <h2 style={{ fontWeight: "normal", fontSize: 18 }}>S radostí oznamujeme</h2>
        <p style={{ marginTop: 6 }}>že si řekneme své ANO</p>
        <div style={{ fontSize: 42, color: "#b08d2f", margin: "20px 0" }}>Jana &amp; Petr</div>
        <p style={{ fontSize: 18 }}>12. června 2027 ve 13:00</p>
        <p>Zámek Hluboká nad Vltavou</p>
        <p style={{ marginTop: 20, fontStyle: "italic", color: "#888" }}>Budeme poctěni, pokud tento výjimečný den prožijete s námi.</p>
      </div>
    ),
    style: { background: "#f8f5ef" },
    cardStyle: {
      background: "white",
      padding: "60px",
      border: "2px solid #d4af37",
      maxWidth: 560,
      width: "100%",
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    },
  },
  {
    id: 2,
    name: "Rustikální přírodní",
    content: (
      <div style={{ fontFamily: "'Trebuchet MS', sans-serif", textAlign: "center" }}>
        <div style={{ color: "#5a7d4d", fontSize: 32, marginBottom: 10 }}>Svatební oznámení</div>
        <p>Zveme vás na náš svatební den</p>
        <h2 style={{ margin: "16px 0" }}>Klára &amp; Tomáš</h2>
        <p>18. srpna 2027</p>
      </div>
    ),
    style: { background: "#ede3d1" },
    cardStyle: {
      background: "#fff",
      border: "8px solid #8b6f47",
      padding: "50px",
      maxWidth: 500,
      width: "100%",
    },
  },
  {
    id: 3,
    name: "Moderní minimalistický",
    content: (
      <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>
        <p style={{ letterSpacing: 2, marginBottom: 16 }}>Zveme vás na naši svatbu</p>
        <div style={{ fontSize: 48, letterSpacing: 4 }}>EVA &amp; JAN</div>
        <p style={{ marginTop: 16 }}>25. 5. 2027</p>
      </div>
    ),
    style: { background: "#ffffff" },
    cardStyle: {
      borderTop: "2px solid black",
      borderBottom: "2px solid black",
      padding: "40px",
      maxWidth: 560,
      width: "100%",
    },
  },
  {
    id: 4,
    name: "Vintage romantický",
    content: (
      <div style={{ fontFamily: "'Times New Roman', serif", textAlign: "center" }}>
        <h1 style={{ fontWeight: "normal" }}>Svatební oznámení</h1>
        <p style={{ margin: "12px 0" }}>S láskou vás zveme</p>
        <h2>Marie &amp; Lukáš</h2>
        <p style={{ marginTop: 12 }}>10. září 2027</p>
      </div>
    ),
    style: { background: "#f6e7d8" },
    cardStyle: {
      background: "#fffaf5",
      border: "4px double #b08968",
      padding: "60px",
      maxWidth: 550,
      width: "100%",
    },
  },
  {
    id: 5,
    name: "Boho",
    content: (
      <div style={{ fontFamily: "Verdana, sans-serif", textAlign: "center" }}>
        <p>Budeme svoji</p>
        <div style={{ fontSize: 40, color: "#c08b5c", margin: "16px 0" }}>Adéla &amp; Filip</div>
        <p>21. července 2027</p>
      </div>
    ),
    style: { background: "#f5efe6" },
    cardStyle: {
      background: "white",
      borderRadius: 20,
      padding: "50px",
      maxWidth: 500,
      width: "100%",
    },
  },
  {
    id: 6,
    name: "Luxusní černozlatý",
    content: (
      <div style={{ fontFamily: "Georgia, serif", textAlign: "center", color: "gold" }}>
        <h1 style={{ fontWeight: "normal" }}>Svatební pozvánka</h1>
        <h2 style={{ margin: "16px 0" }}>Natálie &amp; Daniel</h2>
        <p>30. října 2027</p>
      </div>
    ),
    style: { background: "#111" },
    cardStyle: {
      border: "2px solid gold",
      padding: "50px",
      maxWidth: 560,
      width: "100%",
    },
  },
  {
    id: 7,
    name: "Květinový romantický",
    content: (
      <div style={{ fontFamily: "cursive", textAlign: "center" }}>
        <h1 style={{ fontWeight: "normal" }}>Srdečně vás zveme</h1>
        <h2 style={{ margin: "16px 0" }}>Lenka &amp; Michal</h2>
        <p>14. srpna 2027</p>
      </div>
    ),
    style: { background: "#fff0f5" },
    cardStyle: {
      border: "3px solid #f7c6c7",
      padding: "60px",
      maxWidth: 550,
      width: "100%",
    },
  },
  {
    id: 8,
    name: "Tmavý minimalistický",
    content: (
      <div style={{ fontFamily: "Helvetica, sans-serif", textAlign: "center", color: "white" }}>
        <h1 style={{ fontWeight: "normal" }}>Naše svatba</h1>
        <h2 style={{ margin: "16px 0" }}>Kristýna &amp; Adam</h2>
        <p>5. listopadu 2027</p>
      </div>
    ),
    style: { background: "linear-gradient(to bottom, #222, #000)" },
    cardStyle: {
      border: "1px solid #555",
      padding: "60px",
      maxWidth: 560,
      width: "100%",
    },
  },
  {
    id: 9,
    name: "Akvarelový",
    content: (
      <div style={{ fontFamily: "Georgia, serif", textAlign: "center" }}>
        <h1 style={{ fontWeight: "normal" }}>Svatební den</h1>
        <h2 style={{ margin: "16px 0" }}>Barbora &amp; Ondřej</h2>
        <p>8. července 2027</p>
      </div>
    ),
    style: { background: "#eef6ff" },
    cardStyle: {
      background: "linear-gradient(135deg, #ffd6e0, #d6f0ff)",
      borderRadius: 30,
      padding: "60px",
      maxWidth: 550,
      width: "100%",
    },
  },
  {
    id: 10,
    name: "Luxusní glamour",
    content: (
      <div style={{ fontFamily: "Georgia, serif", textAlign: "center", color: "#f8d66d" }}>
        <h1 style={{ fontWeight: "normal" }}>Srdečně vás zveme</h1>
        <div style={{ fontSize: 46, margin: "20px 0" }}>Veronika &amp; Martin</div>
        <p>17. prosince 2027</p>
      </div>
    ),
    style: { background: "#1c1c1c" },
    cardStyle: {
      border: "3px solid #f8d66d",
      boxShadow: "0 0 25px rgba(248,214,109,0.5)",
      padding: "70px",
      maxWidth: 560,
      width: "100%",
    },
  },

  // === BOHO & BOTANIKA ===
  {
    id: 11,
    name: "Boho Šalvějová",
    content: (
      <div style={{ fontFamily: "Georgia, serif", textAlign: "center", color: "#2F4F4F" }}>
        <p style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 24, color: "#2F4F4F" }}>
          Společně se svými rodinami vás zveme na naši svatbu
        </p>
        <svg viewBox="0 0 100 100" width="60" height="60" fill="none" stroke="#607D8B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto 16px", display: "block" }}>
          <path d="M50 90 C 50 60, 45 35, 30 15" />
          <path d="M47 70 C 35 68, 30 55, 41 58 Z" fill="#c8dcd6" />
          <path d="M43 45 C 25 45, 25 30, 37 35 Z" fill="#c8dcd6" />
          <path d="M49 78 C 60 75, 62 60, 51 65 Z" fill="#c8dcd6" />
          <path d="M45 53 C 60 50, 58 35, 46 42 Z" fill="#c8dcd6" />
          <path d="M30 15 C 25 5, 38 5, 33 13 Z" fill="#c8dcd6" />
        </svg>
        <div style={{ fontSize: 44, fontStyle: "italic", color: "#2F4F4F", margin: "12px 0" }}>Anna &amp; Matěj</div>
        <div style={{ width: 60, height: 1, background: "#D4AF37", margin: "16px auto" }} />
        <p style={{ fontSize: 15 }}>Dne 15. června 2026 ve 13:00 hodin</p>
        <p style={{ fontSize: 15 }}>v zahradě zámku Mcely</p>
        <p style={{ marginTop: 20, fontSize: 12, color: "#607D8B" }}>Následuje zahradní slavnost a hostina.</p>
        <p style={{ fontSize: 12, color: "#607D8B" }}>Prosíme o potvrzení účasti do 30. dubna.</p>
      </div>
    ),
    style: { background: "#E2ECE9" },
    cardStyle: { background: "#fff", padding: "50px 60px", maxWidth: 560, width: "100%", boxShadow: "0 8px 30px rgba(0,0,0,0.08)" },
  },
  {
    id: 12,
    name: "Boho Pudrová",
    content: (
      <div style={{ fontFamily: "Georgia, serif", textAlign: "center", color: "#4A3B32" }}>
        <p style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 24 }}>
          Společně se svými rodinami vás zveme na naši svatbu
        </p>
        <svg viewBox="0 0 100 100" width="60" height="60" fill="none" stroke="#a0856d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto 16px", display: "block" }}>
          <path d="M50 90 C 50 60, 45 35, 30 15" />
          <path d="M47 70 C 35 68, 30 55, 41 58 Z" fill="#f0dbd8" />
          <path d="M43 45 C 25 45, 25 30, 37 35 Z" fill="#f0dbd8" />
          <path d="M49 78 C 60 75, 62 60, 51 65 Z" fill="#f0dbd8" />
          <path d="M45 53 C 60 50, 58 35, 46 42 Z" fill="#f0dbd8" />
          <path d="M30 15 C 25 5, 38 5, 33 13 Z" fill="#f0dbd8" />
        </svg>
        <div style={{ fontSize: 44, fontStyle: "italic", color: "#4A3B32", margin: "12px 0" }}>Anna &amp; Matěj</div>
        <div style={{ width: 60, height: 1, background: "#E6C5C3", margin: "16px auto" }} />
        <p style={{ fontSize: 15 }}>Dne 15. června 2026 ve 13:00 hodin</p>
        <p style={{ fontSize: 15 }}>v zahradě zámku Mcely</p>
        <p style={{ marginTop: 20, fontSize: 12, color: "#9e8070" }}>Následuje zahradní slavnost a hostina.</p>
        <p style={{ fontSize: 12, color: "#9e8070" }}>Prosíme o potvrzení účasti do 30. dubna.</p>
      </div>
    ),
    style: { background: "#FAF0E6" },
    cardStyle: { background: "#fffdf9", padding: "50px 60px", maxWidth: 560, width: "100%", boxShadow: "0 8px 30px rgba(0,0,0,0.07)" },
  },
  {
    id: 13,
    name: "Boho Terakota",
    content: (
      <div style={{ fontFamily: "Georgia, serif", textAlign: "center", color: "#3E2723" }}>
        <p style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 24 }}>
          Společně se svými rodinami vás zveme na naši svatbu
        </p>
        <svg viewBox="0 0 100 100" width="60" height="60" fill="none" stroke="#C57B62" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto 16px", display: "block" }}>
          <path d="M50 90 C 50 60, 45 35, 30 15" />
          <path d="M47 70 C 35 68, 30 55, 41 58 Z" fill="#f2d5cc" />
          <path d="M43 45 C 25 45, 25 30, 37 35 Z" fill="#f2d5cc" />
          <path d="M49 78 C 60 75, 62 60, 51 65 Z" fill="#f2d5cc" />
          <path d="M45 53 C 60 50, 58 35, 46 42 Z" fill="#f2d5cc" />
          <path d="M30 15 C 25 5, 38 5, 33 13 Z" fill="#f2d5cc" />
        </svg>
        <div style={{ fontSize: 44, fontStyle: "italic", color: "#C57B62", margin: "12px 0" }}>Anna &amp; Matěj</div>
        <div style={{ width: 60, height: 1, background: "#C57B62", margin: "16px auto" }} />
        <p style={{ fontSize: 15 }}>Dne 15. června 2026 ve 13:00 hodin</p>
        <p style={{ fontSize: 15 }}>v zahradě zámku Mcely</p>
        <p style={{ marginTop: 20, fontSize: 12, color: "#9a6555" }}>Následuje zahradní slavnost a hostina.</p>
        <p style={{ fontSize: 12, color: "#9a6555" }}>Prosíme o potvrzení účasti do 30. dubna.</p>
      </div>
    ),
    style: { background: "#FDFBF7" },
    cardStyle: { background: "#fff", padding: "50px 60px", maxWidth: 560, width: "100%", boxShadow: "0 8px 30px rgba(0,0,0,0.07)" },
  },

  // === MINIMALISTICKÝ MONOGRAM ===
  {
    id: 14,
    name: "Monogram Klasický",
    content: (
      <div style={{ fontFamily: "Georgia, serif", textAlign: "center", color: "#111" }}>
        <div style={{ fontSize: 56, color: "#B89743", letterSpacing: 6, marginBottom: 8 }}>A + M</div>
        <div style={{ width: 40, height: 1, background: "#B89743", margin: "0 auto 20px" }} />
        <p style={{ fontSize: 12, letterSpacing: 2, textTransform: "uppercase", marginBottom: 20 }}>Oznamují, že budou oddáni</p>
        <div style={{ fontSize: 28, fontStyle: "italic", marginBottom: 20 }}>Klára Nováková &amp; Filip Dvořák</div>
        <p style={{ fontSize: 14 }}>Sobota, 12. září 2026 ve 14:00</p>
        <p style={{ fontSize: 14 }}>na Staroměstské radnici v Praze</p>
        <p style={{ marginTop: 20, fontSize: 12, color: "#777" }}>Svou účast prosím potvrďte na našem webu.</p>
      </div>
    ),
    style: { background: "#f5f5f5" },
    cardStyle: { background: "#fff", padding: "60px", maxWidth: 560, width: "100%", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" },
  },
  {
    id: 15,
    name: "Monogram Tmavý",
    content: (
      <div style={{ fontFamily: "Georgia, serif", textAlign: "center", color: "#ECEFF1" }}>
        <div style={{ fontSize: 56, color: "#D4AF37", letterSpacing: 6, marginBottom: 8 }}>A + M</div>
        <div style={{ width: 40, height: 1, background: "#D4AF37", margin: "0 auto 20px" }} />
        <p style={{ fontSize: 12, letterSpacing: 2, textTransform: "uppercase", marginBottom: 20, color: "#9eb0b8" }}>Oznamují, že budou oddáni</p>
        <div style={{ fontSize: 28, fontStyle: "italic", marginBottom: 20 }}>Klára Nováková &amp; Filip Dvořák</div>
        <p style={{ fontSize: 14 }}>Sobota, 12. září 2026 ve 14:00</p>
        <p style={{ fontSize: 14 }}>na Staroměstské radnici v Praze</p>
        <p style={{ marginTop: 20, fontSize: 12, color: "#9eb0b8" }}>Svou účast prosím potvrďte na našem webu.</p>
      </div>
    ),
    style: { background: "#131f1d" },
    cardStyle: { background: "#1C2826", padding: "60px", maxWidth: 560, width: "100%", boxShadow: "0 4px 30px rgba(0,0,0,0.4)" },
  },
  {
    id: 16,
    name: "Monogram Písková",
    content: (
      <div style={{ fontFamily: "Georgia, serif", textAlign: "center", color: "#4E342E" }}>
        <div style={{ fontSize: 56, color: "#8D6E63", letterSpacing: 6, marginBottom: 8 }}>A + M</div>
        <div style={{ width: 40, height: 1, background: "#8D6E63", margin: "0 auto 20px" }} />
        <p style={{ fontSize: 12, letterSpacing: 2, textTransform: "uppercase", marginBottom: 20, color: "#8D6E63" }}>Oznamují, že budou oddáni</p>
        <div style={{ fontSize: 28, fontStyle: "italic", marginBottom: 20 }}>Klára Nováková &amp; Filip Dvořák</div>
        <p style={{ fontSize: 14 }}>Sobota, 12. září 2026 ve 14:00</p>
        <p style={{ fontSize: 14 }}>na Staroměstské radnici v Praze</p>
        <p style={{ marginTop: 20, fontSize: 12, color: "#8D6E63" }}>Svou účast prosím potvrďte na našem webu.</p>
      </div>
    ),
    style: { background: "#e8e2de" },
    cardStyle: { background: "#EFEBE9", padding: "60px", maxWidth: 560, width: "100%", boxShadow: "0 4px 20px rgba(0,0,0,0.07)" },
  },

  // === ELEGANTNÍ S FOTOGRAFIÍ ===
  {
    id: 17,
    name: "Foto – Bílý text",
    content: (
      <div style={{ position: "relative", width: "100%", minHeight: 380, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #4a5568 0%, #2d3748 50%, #1a202c 100%)", borderRadius: 4 }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)", borderRadius: 4 }} />
        <div style={{ position: "relative", textAlign: "center", color: "#fff", padding: "50px 40px" }}>
          <p style={{ fontSize: 12, letterSpacing: 4, textTransform: "uppercase", marginBottom: 20, opacity: 0.8 }}>Budeme se brát</p>
          <div style={{ fontSize: 52, fontStyle: "italic", fontFamily: "Georgia, serif", marginBottom: 20 }}>Lucie &amp; Tomáš</div>
          <div style={{ width: 50, height: 1, background: "rgba(255,255,255,0.6)", margin: "0 auto 20px" }} />
          <p style={{ fontSize: 15 }}>08. 08. 2026 | 15:00 hod.</p>
          <p style={{ fontSize: 15 }}>Vila Low-Beer, Brno</p>
          <p style={{ marginTop: 20, fontSize: 12, opacity: 0.7 }}>Hostina a oslava bude následovat na stejném místě.</p>
        </div>
      </div>
    ),
    style: { background: "#2d3748" },
    cardStyle: { maxWidth: 580, width: "100%", padding: 0, overflow: "hidden", borderRadius: 4 },
  },
  {
    id: 18,
    name: "Foto – Zlatý text",
    content: (
      <div style={{ position: "relative", width: "100%", minHeight: 380, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #555 0%, #333 50%, #111 100%)", borderRadius: 4, filter: "grayscale(1)" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)", borderRadius: 4 }} />
        <div style={{ position: "relative", textAlign: "center", color: "#E5C158", padding: "50px 40px" }}>
          <p style={{ fontSize: 12, letterSpacing: 4, textTransform: "uppercase", marginBottom: 20, color: "rgba(229,193,88,0.7)" }}>Budeme se brát</p>
          <div style={{ fontSize: 52, fontStyle: "italic", fontFamily: "Georgia, serif", marginBottom: 20 }}>Lucie &amp; Tomáš</div>
          <div style={{ width: 50, height: 1, background: "#E5C158", margin: "0 auto 20px", opacity: 0.6 }} />
          <p style={{ fontSize: 15 }}>08. 08. 2026 | 15:00 hod.</p>
          <p style={{ fontSize: 15 }}>Vila Low-Beer, Brno</p>
          <p style={{ marginTop: 20, fontSize: 12, color: "rgba(229,193,88,0.6)" }}>Hostina a oslava bude následovat na stejném místě.</p>
        </div>
      </div>
    ),
    style: { background: "#111" },
    cardStyle: { maxWidth: 580, width: "100%", padding: 0, overflow: "hidden", borderRadius: 4 },
  },
];

export default function SablonyPage() {
  const [active, setActive] = useState(0);
  const t = templates[active];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Horní lišta s výběrem */}
      <div style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", padding: "12px 16px", overflowX: "auto" }}>
        <div style={{ display: "flex", gap: 8, minWidth: "max-content" }}>
          {templates.map((tmpl, i) => (
            <button
              key={tmpl.id}
              onClick={() => setActive(i)}
              style={{
                padding: "6px 14px",
                borderRadius: 20,
                border: active === i ? "2px solid #b08d2f" : "1px solid #d1d5db",
                background: active === i ? "#fdf8ee" : "#fff",
                color: active === i ? "#b08d2f" : "#374151",
                fontWeight: active === i ? 600 : 400,
                cursor: "pointer",
                fontSize: 13,
                whiteSpace: "nowrap",
              }}
            >
              {tmpl.id}. {tmpl.name}
            </button>
          ))}
        </div>
      </div>

      {/* Náhled šablony */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px 20px",
          ...t.style,
        }}
      >
        <div style={{ ...t.cardStyle, textAlign: "center" }}>
          {t.content}
        </div>
      </div>

      {/* Zpět */}
      <div style={{ padding: "16px", textAlign: "center", background: "rgba(255,255,255,0.6)" }}>
        <a href="/" style={{ color: "#b08d2f", textDecoration: "none", fontSize: 14 }}>
          ← Zpět na hlavní stránku
        </a>
      </div>
    </div>
  );
}
