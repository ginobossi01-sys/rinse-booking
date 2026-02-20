import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Rinse",
  description: "Servicio de lavado a domicilio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {/* Header global rojo */}
        <header className="w-full bg-red-600 text-white shadow-md">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold tracking-widest">
              RINSE
            </h1>

            <Link
              href="/admin"
              className="text-white/80 hover:text-white transition"
            >
              Admin
            </Link>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
