import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 6,
        }}
      >
        <div
          style={{
            width: 18,
            height: 18,
            background: "#ffffff",
            borderRadius: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#1e3a8a",
            fontSize: 8,
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
