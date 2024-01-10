import React, { useState } from "react";
import axios from "axios";
import { Input } from "./iu/Input";
import { Label } from "./iu/Label";
import useNumericInputState from "../hooks/InputNumber";

export const Tercero = () => {
  const [numericValue, handleNumericChange] = useNumericInputState();

  const [formData, setFormData] = useState({
    dni: "",
    nombres: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:3000/rapimoney/createcustomers",
        formData
      );
      alert("Cliente creado exitosamente");
    } catch (error) {
      console.error("Error al crear el cliente:", error);
      alert("Error al crear el cliente");
    }
  };

  return (
    <>
      <div className="px-4 mt-2 sm:ml-64">
        <div className="p-4 border-2 border-gray-100 border-dashed rounded-lg dark:border-gray-700">
          <h1 className="text-2xl mb-3">Nuevo cliente</h1>
          <form
            className="max-w-2xl mx-auto p-5 bg-slate-50 shadow-[1px_1px_15px_3px_#cbd5e0] rounded-xl"
            onSubmit={handleSubmit}
          >
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="mb-5">
                <Label htmlFor="nombres"> Nombres</Label>
                <Input
                  type="text"
                  id="nombres"
                  name="nombres"
                  value={formData.nombres}
                  onChange={handleChange}
                  placeholder="Ingresa tus nombres"
                />
              </div>
              <div className="mb-5">
                <Label htmlFor="dni"> Apellidos</Label>
                <Input
                  type="text"
                  id="dni"
                  name="dni"
                  value={formData.dni}
                  onChange={handleChange}
                  placeholder="Ingresa tus apellidos"
                  maxLength={8}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="mb-5">
                <Label htmlFor="fecha"> Fecha de nacimiento</Label>
                <Input
                  type="date"
                  id="fecha"
                  name="fecha"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-5">
                <Label htmlFor="celular">Celular</Label>
                <Input
                  type="cel"
                  id="celular"
                  name="celular"
                  onChange={handleChange}
                  placeholder="Ingrese su celular"
                />
              </div>
            </div>
            <div className="mb-5">
              <Label htmlFor="email">Correo</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <Label htmlFor="banco">Banco</Label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className="mb-5">
              <Label htmlFor="cci">CCI</Label>
              <input
                value={numericValue}
                onChange={(e) => handleNumericChange(e.target.value)}
                placeholder="Enter numbers only"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
