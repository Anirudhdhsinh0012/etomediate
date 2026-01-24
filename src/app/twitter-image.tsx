import { ImageResponse } from "next/og";

// Image metadata
export const alt = "Etomidate API - Premium Pharmaceutical Ingredient";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Image generation (Twitter uses same size as OG but optimized for Twitter's display)
export default async function TwitterImage() {
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
        fontFamily: "system-ui, -apple-system, sans-serif",
        position: "relative",
      }}
    >
      {/* Decorative Pattern Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
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
            width: "140px",
            height: "140px",
            background: "white",
            borderRadius: "28px",
            fontSize: "72px",
            fontWeight: "bold",
            color: "#7FB069",
            marginBottom: "48px",
            boxShadow: "0 24px 64px rgba(0, 0, 0, 0.25)",
          }}
        >
          E
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "68px",
            fontWeight: "700",
            color: "white",
            textAlign: "center",
            marginBottom: "20px",
            letterSpacing: "-0.02em",
          }}
        >
          Etomidate API
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "36px",
            fontWeight: "400",
            color: "rgba(255, 255, 255, 0.95)",
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: "1.4",
            marginBottom: "48px",
          }}
        >
          Premium Pharmaceutical Ingredient
        </div>

        {/* Features Row */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "14px 32px",
              background: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
              borderRadius: "14px",
              fontSize: "22px",
              color: "white",
              fontWeight: "600",
              border: "2px solid rgba(255, 255, 255, 0.3)",
            }}
          >
            GMP Certified
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "14px 32px",
              background: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
              borderRadius: "14px",
              fontSize: "22px",
              color: "white",
              fontWeight: "600",
              border: "2px solid rgba(255, 255, 255, 0.3)",
            }}
          >
            USP Grade
          </div>
        </div>
      </div>

      {/* Footer Brand */}
      <div
        style={{
          position: "absolute",
          bottom: "48px",
          display: "flex",
          fontSize: "20px",
          color: "rgba(255, 255, 255, 0.85)",
          fontWeight: "600",
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
