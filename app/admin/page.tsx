"use client";

import { useEffect, useState } from "react";

type Reserva = {
  id: number;
  nombre: string;
  telefono: string;
  direccion: string;
  vehiculo: string;
  servicio: string;
  fecha: string;
  hora: string;
  precio?: number;
  estado: string;
};

export default function AdminPage() {
  const [reservas, setReservas] = useState<Reserva[]>([]);

  useEffect(() => {
    const guardadas = localStorage.getItem("reservas");
    if (guardadas) {
      setReservas(JSON.parse(guardadas));
    }
  }, []);

  const cambiarEstado = (id: number, nuevoEstado: string) => {
    const actualizadas = reservas.map((reserva) =>
      reserva.id === id ? { ...reserva, estado: nuevoEstado } : reserva
    );

    setReservas(actualizadas);
    localStorage.setItem("reservas", JSON.stringify(actualizadas));
  };

  const calcularPrecio = (reserva: Reserva) => {
    if (reserva.precio) return reserva.precio;

    if (reserva.vehiculo === "Auto") {
      return reserva.servicio === "Lavado Básico" ? 50000 : 95000;
    } else {
      return reserva.servicio === "Lavado Básico" ? 75000 : 120000;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-10">
      <h1 className="text-3xl font-bold mb-8">Panel de Reservas</h1>

      {reservas.length === 0 ? (
        <p className="text-gray-400">No hay reservas todavía.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full bg-white text-black rounded-xl overflow-hidden">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="p-3 text-left">Nombre</th>
                <th className="p-3 text-left">Teléfono</th>
                <th className="p-3 text-left">Dirección</th>
                <th className="p-3 text-left">Vehículo</th>
                <th className="p-3 text-left">Servicio</th>
                <th className="p-3 text-left">Fecha</th>
                <th className="p-3 text-left">Hora</th>
                <th className="p-3 text-left">Precio</th>
                <th className="p-3 text-left">Estado</th>
              </tr>
            </thead>
            <tbody>
              {reservas.map((reserva) => (
                <tr key={reserva.id} className="border-t">
                  <td className="p-3">{reserva.nombre}</td>
                  <td className="p-3">{reserva.telefono}</td>
                  <td className="p-3">{reserva.direccion || "-"}</td>
                  <td className="p-3">{reserva.vehiculo}</td>
                  <td className="p-3">{reserva.servicio}</td>
                  <td className="p-3">{reserva.fecha}</td>
                  <td className="p-3">{reserva.hora}</td>
                  <td className="p-3 font-semibold">
                    ${calcularPrecio(reserva).toLocaleString()}
                  </td>
                  <td className="p-3">
                    <select
                      value={reserva.estado}
                      onChange={(e) =>
                        cambiarEstado(reserva.id, e.target.value)
                      }
                      className={`px-2 py-1 rounded text-sm font-medium ${
                        reserva.estado === "Pendiente"
                          ? "bg-yellow-200 text-yellow-800"
                          : reserva.estado === "Confirmado"
                          ? "bg-green-200 text-green-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      <option value="Pendiente">Pendiente</option>
                      <option value="Confirmado">Confirmado</option>
                      <option value="Cancelado">Cancelado</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
