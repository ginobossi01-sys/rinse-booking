"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AdminLogin() {
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = async () => {
    const res = await fetch("/api/admin-login", {
      method: "POST",
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push("/admin")
    } else {
      alert("Contraseña incorrecta")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f2f4f] text-white">
      <div className="bg-white text-black p-8 rounded-xl shadow-xl w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Acceso Admin</h2>
        <input
          type="password"
          placeholder="Contraseña"
          className="border w-full px-3 py-2 mb-4 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="bg-red-600 text-white w-full py-2 rounded hover:bg-red-700"
        >
          Ingresar
        </button>
      </div>
    </div>
  )
}