import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 20,
        background: "linear-gradient(135deg, #7FB069 0%, #5A8F50 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: "bold",
        fontFamily: "system-ui, sans-serif",
        borderRadius: "6px",
        boxShadow: "0 2px 8px rgba(127, 176, 105, 0.3)",
      }}
    >
      E
    </div>,
    {
      ...size,
    },
  );
}
