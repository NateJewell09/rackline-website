import { NextResponse } from "next/server";

export const revalidate = 300; // cache 5 minutes

export async function GET() {
  try {
    const res = await fetch("https://rackline.ai/api/trophy-room", {
      next: { revalidate: 300 },
    });
    if (!res.ok) throw new Error("upstream error");
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json([], { status: 500 });
  }
}
