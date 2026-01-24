import { ImageResponse } from "next/og";

// Image metadata
export const alt = "Etomidate API - Premium Pharmaceutical Ingredient";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Image generation
export default async function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#F9FAFB",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, -apple-system, sans-serif",
        position: "relative",
      }}
    >
      {/* Background Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 20% 50%, rgba(127, 176, 105, 0.1) 0%, transparent 50%)",
          display: "flex",
        }}
      />

      {/* Content Container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          zIndex: 1,
        }}
      >
        {/* Logo/Brand Mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "120px",
            height: "120px",
            background: "linear-gradient(135deg, #7FB069 0%, #5A8F50 100%)",
            borderRadius: "24px",
            fontSize: "56px",
            fontWeight: "bold",
            color: "white",
            marginBottom: "40px",
            boxShadow: "0 20px 60px rgba(127, 176, 105, 0.3)",
          }}
        >
          E
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: "600",
            color: "#1F2937",
            textAlign: "center",
            marginBottom: "24px",
            fontFamily: "'Georgia', serif",
            letterSpacing: "-0.02em",
          }}
        >
          Etomidate API
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "32px",
            fontWeight: "400",
            color: "#6B7280",
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: "1.4",
            marginBottom: "40px",
          }}
        >
          Premium Pharmaceutical Ingredient
        </div>

        {/* Features Badge Container */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px 24px",
              background: "white",
              borderRadius: "12px",
              fontSize: "20px",
              color: "#374151",
              fontWeight: "500",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
            }}
          >
            ✓ GMP Certified
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px 24px",
              background: "white",
              borderRadius: "12px",
              fontSize: "20px",
              color: "#374151",
              fontWeight: "500",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
            }}
          >
            ✓ USP Grade
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px 24px",
              background: "white",
              borderRadius: "12px",
              fontSize: "20px",
              color: "#374151",
              fontWeight: "500",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
            }}
          >
            ✓ Medical Grade
          </div>
        </div>
      </div>

      {/* Footer Brand */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          display: "flex",
          fontSize: "18px",
          color: "#9CA3AF",
          fontWeight: "500",
        }}
      >
        etomidate-api.com
      </div>
    </div>,
    {
      ...size,
    },
  );
}
