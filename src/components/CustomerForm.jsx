import React, { useState } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
import useCustomerForm from "../hooks/useCustomerForm";

export const CustomerForm = () => {
  const { formData, handleChange, handleSubmit } = useCustomerForm();

  // const [formData, setFormData] = useState({
  //   dni: "",
  //   nombres: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     await axios.post(
  //       "http://localhost:3000/rapimoney/createcustomers",
  //       formData
  //     );

  //     Swal.fire({
  //       icon: "success",
  //       title: "Cliente creado exitosamente",
  //       showConfirmButton: true,
  //     });
  //     setFormData({
  //       dni: "",
  //       nombres: "",
  //     });
  //   } catch (error) {
  //     console.error("Error al crear el cliente:", error);

  //     Swal.fire({
  //       icon: "error",
  //       title: "Error al crear el cliente",
  //       text: "Por favor, inténtalo de nuevo",
  //       showConfirmButton: true,
  //     });
  //   }
  // };
  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-100 border-dashed rounded-lg dark:border-gray-700">
          <h1 className="text-2xl mb-1 font-semibold">Nuevo cliente</h1>
          <form
            className="max-w-xl mx-auto p-3 bg-slate-50 shadow-[1px_1px_15px_3px_#cbd5e0] rounded-xl"
            onSubmit={handleSubmit}
          >
            <div className="mb-5">
              <label
                htmlFor="nombres"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nombres
              </label>
              <input
                type="text"
                id="nombres"
                name="nombres"
                value={formData.nombres}
                onChange={handleChange}
                placeholder="Ingresa tus nombres"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="dni"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                DNI
              </label>
              <input
                type="text"
                id="dni"
                name="dni"
                value={formData.dni}
                onChange={handleChange}
                placeholder="Ingresa tu DNI"
                maxLength={8}
                required
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
