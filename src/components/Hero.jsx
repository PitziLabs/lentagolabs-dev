import { StatusDot, Eyebrow, Button, BlossomWatermark } from "./Shared.jsx";

// Dark teal hero — topographic contour backing, a giant ghost blossom
// watermark bleeding off the corner, the headline, and the primary actions.
// Static port of the design-system Hero: the prototype's onNav button handlers
// become plain #anchors (the Button primitive renders an <a> when given href).
export function HeroDark() {
  return (
    <header id="top" style={{
      background: "var(--grad-hero)",
      color: "var(--fg-on-dark)",
      padding: "112px 32px 120px",
      position: "relative", overflow: "hidden",
    }}>
      {/* Topographic contour lines */}
      <svg viewBox="0 0 1440 520" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
        fill="none" stroke="var(--color-accent)" strokeOpacity="0.1" strokeWidth="1.4">
        <path d="M-40 420 C 260 350 440 470 720 410 S 1200 320 1500 410" />
        <path d="M-40 360 C 260 290 440 410 720 350 S 1200 260 1500 350" />
        <path d="M-40 300 C 260 230 440 350 720 290 S 1200 200 1500 290" />
        <path d="M-40 240 C 260 170 440 290 720 230 S 1200 140 1500 230" />
        <path d="M-40 180 C 260 110 440 230 720 170 S 1200 80 1500 170" />
        <path d="M-40 120 C 260 50 440 170 720 110 S 1200 20 1500 110" />
      </svg>
      {/* Giant ghost blossom watermark */}
      <BlossomWatermark size={560} opacity={0.06}
        style={{ position: "absolute", right: -120, bottom: -180 }} />

      <div style={{ maxWidth: 1024, margin: "0 auto", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
          <StatusDot status="ok" size={8} pulse />
          <Eyebrow tone="dark">Practice · EST. 1997 · Infrastructure ops</Eyebrow>
        </div>

        <h1 style={{
          fontFamily: "var(--font-display)", fontWeight: 700,
          fontSize: "clamp(48px, 7vw, 88px)", lineHeight: 1.02,
          letterSpacing: "-0.035em", margin: "0 0 28px", maxWidth: 920,
        }}>
          Production{" "}
          <span style={{ color: "var(--color-accent)" }}>that shows up</span>
          {" "}when the{" "}
          <span style={{ fontStyle: "italic", fontWeight: 700, color: "var(--color-on-dark-muted)" }}>need</span>{" "}does.
        </h1>

        <p style={{
          fontFamily: "var(--font-body)", fontSize: 19, color: "var(--color-on-dark-soft)",
          margin: "0 0 36px", maxWidth: 640, lineHeight: 1.55,
        }}>
          Keeping production up — bare metal through cloud-native, and every
          platform shift in between. We build it, break it, and operate it.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
          <Button trailing="→" href="#contact">Book a consult</Button>
          <Button variant="outline" onDark href="#practice">View runbook</Button>
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 10, color: "var(--color-on-dark-muted)", fontFamily: "var(--font-mono)", fontSize: 12 }}>
            <span>→</span>
            <span>chris@lentago.dev</span>
          </div>
        </div>
      </div>

      {/* Corner runbook snippet */}
      <div style={{
        position: "absolute", right: 40, bottom: 28,
        fontFamily: "var(--font-mono)", fontSize: 11,
        color: "rgba(243,240,232,0.32)", textAlign: "right",
        lineHeight: 1.7, display: "grid", gap: 2,
      }}>
        <div>~/lentago/runbook.md</div>
        <div>build it · break it · operate it</div>
      </div>
    </header>
  );
}
