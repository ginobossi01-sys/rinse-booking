import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { password } = await req.json()

  if (password === process.env.ADMIN_SECRET) {
    const response = NextResponse.json({ success: true })

    response.cookies.set("admin_auth", "true", {
      httpOnly: true,
      secure: true,
      path: "/",
    })

    return response
  }

  return NextResponse.json({ success: false }, { status: 401 })
}