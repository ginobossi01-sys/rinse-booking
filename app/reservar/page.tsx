"use client";

import { useState } from "react";
import Image from "next/image";

export default function ReservaPage() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    direccion: "",
    vehiculo: "Auto",
    servicio: "Lavado Básico",
    fecha: "",
    hora: "",
  });

  const calcularPrecio = () => {
    if (form.vehiculo === "Auto") {
      return form.servicio === "Lavado Básico" ? 50000 : 95000;
    } else {
      return form.servicio === "Lavado Básico" ? 75000 : 120000;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const reservasGuardadas = localStorage.getItem("reservas");
    const reservas = reservasGuardadas ? JSON.parse(reservasGuardadas) : [];

    const nuevaReserva = {
      id: Date.now(),
      ...form,
      precio: calcularPrecio(),
      estado: "Pendiente",
    };

    const actualizadas = [...reservas, nuevaReserva];
    localStorage.setItem("reservas", JSON.stringify(actualizadas));

    alert("Reserva realizada con éxito 🚀");

    setForm({
      nombre: "",
      telefono: "",
      direccion: "",
      vehiculo: "Auto",
      servicio: "Lavado Básico",
      fecha: "",
      hora: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#0f2e4d] text-white">
    

      {/* Contenido */}
      <div className="flex flex-col items-center p-8">

       
        {/* Card */}
        <div className="bg-white text-black rounded-2xl shadow-xl p-8 w-full max-w-xl">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#0f2e4d]">
            Reservá tu lavado
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Nombre"
              required
              value={form.nombre}
              onChange={(e) =>
                setForm({ ...form, nombre: e.target.value })
              }
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="tel"
              placeholder="Teléfono"
              required
              value={form.telefono}
              onChange={(e) =>
                setForm({ ...form, telefono: e.target.value })
              }
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="text"
              placeholder="Dirección"
              required
              value={form.direccion}
              onChange={(e) =>
                setForm({ ...form, direccion: e.target.value })
              }
              className="w-full border p-3 rounded-lg"
            />

            <select
              value={form.vehiculo}
              onChange={(e) =>
                setForm({ ...form, vehiculo: e.target.value })
              }
              className="w-full border p-3 rounded-lg"
            >
              <option>Auto</option>
              <option>Camioneta</option>
            </select>

            <select
              value={form.servicio}
              onChange={(e) =>
                setForm({ ...form, servicio: e.target.value })
              }
              className="w-full border p-3 rounded-lg"
            >
              <option>Lavado Básico</option>
              <option>Lavado Premium</option>
            </select>

            <input
              type="date"
              required
              value={form.fecha}
              onChange={(e) =>
                setForm({ ...form, fecha: e.target.value })
              }
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="time"
              required
              value={form.hora}
              onChange={(e) =>
                setForm({ ...form, hora: e.target.value })
              }
              className="w-full border p-3 rounded-lg"
            />

            {/* Precio dinámico */}
            <div className="text-center text-lg font-bold text-[#0f2e4d]">
              Total: ${calcularPrecio().toLocaleString()}
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Confirmar Reserva
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
