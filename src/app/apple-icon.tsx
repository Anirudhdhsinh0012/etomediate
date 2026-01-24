import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #7FB069 0%, #5A8F50 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontFamily: "system-ui, sans-serif",
        borderRadius: "40px",
        boxShadow: "0 8px 32px rgba(127, 176, 105, 0.4)",
      }}
    >
      <div
        style={{
          fontSize: 72,
          fontWeight: "bold",
          marginBottom: "8px",
        }}
      >
        E
      </div>
      <div
        style={{
          fontSize: 16,
          fontWeight: "500",
          letterSpacing: "2px",
          opacity: 0.95,
        }}
      >
        API
      </div>
    </div>,
    {
      ...size,
    },
  );
}
