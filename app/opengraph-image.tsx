import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Small Qubit Labs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f9f9fb",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top — wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#e30613",
            }}
          />
          <span style={{ fontSize: "18px", fontWeight: 600, color: "#1a1c1d", letterSpacing: "-0.02em" }}>
            Small Qubit Labs
          </span>
        </div>

        {/* Middle — headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 500,
              color: "#e30613",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Experimental Quantum · Practical AI
          </span>
          <span
            style={{
              fontSize: "64px",
              fontWeight: 600,
              color: "#1a1c1d",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: "800px",
            }}
          >
            Building solutions at the quantum-AI frontier.
          </span>
        </div>

        {/* Bottom — URL */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ fontSize: "16px", color: "#86868b", letterSpacing: "0.02em" }}>
            smallqubit.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
