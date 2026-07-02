import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Lavasecco SCM — Lavanderia professionale a Senago";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [mark, wordmark] = await Promise.all([
    readFile(join(process.cwd(), "public/logo_lavanderia.png"), "base64"),
    readFile(join(process.cwd(), "public/nome_navbar.png"), "base64"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
          background: "linear-gradient(135deg, #EAF3FF 0%, #F8FBFF 100%)",
        }}
      >
        <img
          src={`data:image/png;base64,${mark}`}
          height={220}
          style={{ objectFit: "contain" }}
        />
        <img
          src={`data:image/png;base64,${wordmark}`}
          width={640}
          style={{ objectFit: "contain" }}
        />
        <div style={{ fontSize: 30, color: "#475569", fontWeight: 600 }}>
          Prendetevi cura dei vostri capi
        </div>
      </div>
    ),
    { ...size }
  );
}
