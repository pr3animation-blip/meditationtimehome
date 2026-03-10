import { ImageResponse } from "next/og"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background:
            "linear-gradient(145deg, #f8f1e7 0%, #ebe3d5 45%, #dbe4d7 100%)",
          color: "#3f4a3f",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 2,
            textTransform: "uppercase",
            opacity: 0.88,
          }}
        >
          Meditation TIME Home
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 68, lineHeight: 1.1, maxWidth: 900 }}>
            Sound Healing, Reiki and Meditation
          </div>
          <div style={{ fontSize: 36, opacity: 0.86 }}>
            Chandler, Arizona
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            opacity: 0.88,
          }}
        >
          <div>Restore balance and inner calm</div>
          <div>meditationtimehome.com</div>
        </div>
      </div>
    ),
    size
  )
}
