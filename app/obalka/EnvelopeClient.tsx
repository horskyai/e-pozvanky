"use client";

import { useState } from "react";

type RsvpState = "idle" | "yes" | "no";

export default function EnvelopeClient() {
  const [open, setOpen] = useState(false);
  const [rsvp, setRsvp] = useState<RsvpState>("idle");

  return (
    <div
      className="min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#f4ece1", perspective: "1000px" }}
    >
      {/* Obálka */}
      <div
        onClick={() => !open && setOpen(true)}
        className="relative transition-transform duration-300"
        style={{
          width: "450px",
          height: "300px",
          cursor: open ? "default" : "pointer",
          transform: open ? "none" : undefined,
        }}
      >
        {/* Hover efekt jen když je zavřená */}
        <style>{`
          .envelope-wrapper:not(.open):hover { transform: translateY(-5px); }
          .flap {
            position: absolute; top: 0; left: 0;
            width: 0; height: 0;
            border-left: 225px solid transparent;
            border-right: 225px solid transparent;
            border-top: 150px solid #b39266;
            transform-origin: top;
            transition: transform 0.5s ease;
            z-index: 3;
          }
          .flap.open { transform: rotateX(180deg); z-index: 0; }
          .pocket {
            position: absolute; bottom: 0; left: 0;
            width: 0; height: 0;
            border-left: 225px solid #c5a880;
            border-right: 225px solid #c5a880;
            border-bottom: 150px solid #b39266;
            border-radius: 0 0 10px 10px;
            z-index: 2;
          }
          .invite-card {
            position: absolute;
            bottom: 10px; left: 25px;
            width: 400px; height: 260px;
            background: white;
            border-radius: 5px;
            padding: 25px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            z-index: 1;
            transition: transform 0.7s ease-in-out, box-shadow 0.7s ease;
            display: flex; flex-direction: column;
            justify-content: space-between; align-items: center;
            text-align: center;
          }
          .invite-card.open {
            transform: translateY(-160px);
            z-index: 4;
            height: auto; min-height: 280px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          }
          @media (max-width: 480px) {
            .envelope-outer { width: 320px !important; height: 213px !important; }
            .flap { border-left-width: 160px; border-right-width: 160px; border-top-width: 106px; }
            .pocket { border-left-width: 160px; border-right-width: 160px; border-bottom-width: 106px; }
            .invite-card { width: 280px !important; height: 190px !important; left: 20px !important; padding: 15px !important; }
            .invite-card.open { transform: translateY(-120px); min-height: 230px; }
          }
        `}</style>

        <div
          className={`envelope-outer relative w-full h-full rounded-b-[10px] ${open ? "open" : "envelope-wrapper"}`}
          style={{ backgroundColor: "#c5a880", boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
        >
          <div className={`flap${open ? " open" : ""}`} />
          <div className="pocket" />

          {/* Karta */}
          <div
            className={`invite-card${open ? " open" : ""}`}
            onClick={(e) => e.stopPropagation()}
            style={{ fontFamily: "Georgia, serif", color: "#4a4a4a" }}
          >
            <div>
              <h1 style={{ fontSize: "24px", color: "#8f6241", fontWeight: "normal", marginBottom: "10px" }}>
                Svatební Oznámení
              </h1>
              <p style={{ fontSize: "14px", lineHeight: 1.5, marginBottom: "5px" }}>
                S radostí Vám oznamujeme, že se bereme
              </p>
              <p style={{ fontSize: "20px", fontStyle: "italic", margin: "10px 0", color: "#8f6241" }}>
                Anna &amp; Jan
              </p>
              <p style={{ fontSize: "14px", marginBottom: "5px" }}>
                <strong>15. Června 2026 v 14:00</strong>
              </p>
              <p style={{ fontSize: "14px" }}>Zámek Hluboká nad Vltavou</p>
            </div>

            {/* RSVP */}
            <div style={{ marginTop: "10px" }}>
              {rsvp === "idle" && (
                <div style={{ display: "flex", gap: "15px" }}>
                  <button
                    onClick={() => setRsvp("yes")}
                    style={{
                      padding: "8px 20px", border: "none", borderRadius: "20px",
                      backgroundColor: "#8caf8f", color: "white",
                      fontFamily: "Georgia, serif", fontSize: "14px", cursor: "pointer",
                    }}
                  >
                    Přijdu
                  </button>
                  <button
                    onClick={() => setRsvp("no")}
                    style={{
                      padding: "8px 20px", border: "none", borderRadius: "20px",
                      backgroundColor: "#c78a8a", color: "white",
                      fontFamily: "Georgia, serif", fontSize: "14px", cursor: "pointer",
                    }}
                  >
                    Nepřijdu
                  </button>
                </div>
              )}
              {rsvp === "yes" && (
                <p style={{ color: "#8caf8f", fontWeight: "bold", marginTop: "10px" }}>
                  Děkujeme! Těšíme se na Vás.
                </p>
              )}
              {rsvp === "no" && (
                <p style={{ color: "#c78a8a", fontStyle: "italic", marginTop: "10px" }}>
                  Omluva přijata, budeme na Vás myslet.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Nápověda */}
      {!open && (
        <p
          className="absolute bottom-8 text-sm"
          style={{ color: "#8f6241", fontFamily: "Georgia, serif", fontStyle: "italic" }}
        >
          Klikněte pro otevření
        </p>
      )}
    </div>
  );
}
