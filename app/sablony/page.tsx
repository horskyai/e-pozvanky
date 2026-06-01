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
