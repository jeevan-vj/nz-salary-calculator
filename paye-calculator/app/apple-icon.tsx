import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)",
          borderRadius: 24,
        }}
      >
        <div
          style={{
            width: 104,
            height: 104,
            background: "#ffffff",
            borderRadius: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#1e3a8a",
            fontSize: 38,
            fontWeight: 700,
          }}
        >
          NZ
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
