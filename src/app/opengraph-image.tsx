import { ImageResponse } from "next/og";

export const alt = "Axel Soler — Full Stack Developer and System Operator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          color: "white",
          background:
            "radial-gradient(circle at 80% 20%, #06b6d4 0%, #004aad 30%, #0a0a0a 72%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#67e8f9" }}>
          PORTFOLIO
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 76,
            fontWeight: 700,
            letterSpacing: "-2px",
          }}
        >
          Axel Soler
        </div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 38 }}>
          Full Stack Developer · System Operator
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 26,
            color: "#cbd5e1",
          }}
        >
          Web development · Integrations · App automation
        </div>
      </div>
    ),
    size
  );
}
