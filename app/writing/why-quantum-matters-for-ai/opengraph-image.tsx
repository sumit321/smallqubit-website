import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Why Quantum Matters for AI";
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
          <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#e30613" }} />
          <span style={{ fontSize: "18px", fontWeight: 600, color: "#1a1c1d", letterSpacing: "-0.02em" }}>
            Small Qubit Labs
          </span>
        </div>

        {/* Middle — article title */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 500,
                color: "#ffffff",
                backgroundColor: "#e30613",
                padding: "4px 12px",
                borderRadius: "2px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Quantum · AI
            </span>
            <span style={{ fontSize: "13px", color: "#86868b", letterSpacing: "0.04em" }}>
              8 min read
            </span>
          </div>
          <span
            style={{
              fontSize: "64px",
              fontWeight: 600,
              color: "#1a1c1d",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: "900px",
            }}
          >
            Why Quantum Matters for AI
          </span>
        </div>

        {/* Bottom */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "15px", color: "#5d5e5f" }}>Sumit Sharma · May 2026</span>
          <span style={{ fontSize: "15px", color: "#86868b" }}>smallqubit.com/writing</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
