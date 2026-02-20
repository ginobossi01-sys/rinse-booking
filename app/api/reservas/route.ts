import { NextResponse } from "next/server"

let reservas: any[] = []

export async function POST(req: Request) {
  const data = await req.json()
  reservas.push({ ...data, id: Date.now(), estado: "pendiente" })

  return NextResponse.json({ ok: true })
}

export async function GET() {
  return NextResponse.json(reservas)
}
