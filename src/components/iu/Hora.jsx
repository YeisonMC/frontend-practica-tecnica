import React, { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/es";

export const Hora = () => {
  const [fechaActual, setFechaActual] = useState(moment().format("DD/MM/YYYY"));
  const [horaActual, setHoraActual] = useState(moment().format("hh:mm:ss A"));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFechaActual(moment().format("DD/MM/YYYY"));
      setHoraActual(moment().format("hh:mm:ss A"));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-1xl">
          {fechaActual} {horaActual}
        </h1>

        <div className="bg-slate-100 px-4 py-1 hover:bg-slate-200 rounded-lg cursor-pointer">
          <h1>Admin</h1>
        </div>
      </div>
    </>
  );
};
