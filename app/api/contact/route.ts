import { NextResponse } from "next/server";

// Contact form is handled client-side via EmailJS.
// This route is kept as a fallback stub.
export async function POST() {
  return NextResponse.json({ success: true }, { status: 200 });
}
