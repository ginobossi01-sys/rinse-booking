import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0E2A47] text-white flex flex-col items-center justify-center px-6">

      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Rinse Detailing
        </h1>

        <p className="text-white/70 mb-12">
          Sistema de gestión y reservas
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          
          <Link href="/reservar">
            <button className="px-10 py-4 rounded-xl bg-[#C4161C] hover:bg-[#A81217] transition-all duration-200 text-lg">
              Reservar turno
            </button>
          </Link>

          <Link href="/admin">
            <button className="px-10 py-4 rounded-xl border border-white/40 hover:bg-white hover:text-[#0E2A47] transition-all duration-200 text-lg">
              Panel interno
            </button>
          </Link>

        </div>
      </div>

    </main>
  )
}
