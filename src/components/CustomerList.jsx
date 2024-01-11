import { useState, useEffect } from "react";
import Aos from "aos";
import axios from "axios";
import Swal from "sweetalert2";
import "aos/dist/aos.css";
import { ThTable } from "./iu/ThTable";
import { useCustomerListData } from "../hooks/useCustomerListData";
import { TdTable } from "./iu/TdTable";

export const CustomerList = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const {
    customers,
    setCustomers,
    searchTerm,
    setSearchTerm,
    filteredCustomers,
  } = useCustomerListData();

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleCustomers = filteredCustomers.slice(startIndex, endIndex);

  // const handleEliminar = async (customerId) => {
  //   try {
  //     await axios.delete(
  //       `http://localhost:3000/rapimoney/deletecustomer/${customerId}`
  //     );

  //     setCustomers(customers.filter((customer) => customer.id !== customerId));
  //   } catch (error) {
  //     console.error("Error al eliminar el cliente:", error);
  //   }
  // };

  const handleEliminar = async (customerId) => {
    try {
      const result = await Swal.fire({
        title: "¿Estás seguro?",
        text: "No podrás revertir esto.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminarlo",
      });

      if (result.isConfirmed) {
        await axios.delete(
          `http://localhost:3000/rapimoney/deletecustomer/${customerId}`
        );

        setCustomers(
          customers.filter((customer) => customer.id !== customerId)
        );

        Swal.fire({
          title: "¡Eliminado!",
          text: "El cliente ha sido eliminado.",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Error al eliminar el cliente:", error);
    }
  };

  return (
    <>
      <h1 className="text-2xl mb-2 font-semibold">Registro de clientes</h1>
      <div className="flex justify-between items-center mb-4">
        <h1>Clientes</h1>
        <input
          type="text"
          placeholder="Buscar por nombre"
          className="border border-gray-300 p-2 rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="mx-auto">
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="800"
          className="relative overflow-x-auto shadow-md sm:rounded-lg"
        >
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-white uppercase bg-[#007872]  dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <ThTable>id</ThTable>
                <ThTable>nombres</ThTable>
                <ThTable>apellidos</ThTable>
                <ThTable>dni</ThTable>
                <ThTable>fecha_nacimiento</ThTable>
                <ThTable>celular</ThTable>
                <ThTable>correo</ThTable>
                <ThTable>banco</ThTable>
                <ThTable>número CCI</ThTable>
                <ThTable>editar</ThTable>
                <ThTable>eliminar</ThTable>
              </tr>
            </thead>
            <tbody>
              {visibleCustomers.map(
                (customer) =>
                  customer.nombres
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) && (
                    <tr
                      key={customer.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      <TdTable>{customer.id}</TdTable>
                      <TdTable>{customer.nombres}</TdTable>
                      <TdTable>{customer.apellidos}</TdTable>
                      <TdTable>{customer.dni}</TdTable>
                      <TdTable>{customer.fecha_nacimiento}</TdTable>
                      <TdTable>{customer.celular}</TdTable>
                      <TdTable>{customer.correo}</TdTable>
                      <TdTable>{customer.banco}</TdTable>
                      <TdTable>{customer.numero_cci}</TdTable>
                      <td className="px-6 py-4">
                        <button onClick={() => handleEditar(customer.id)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-7 h-7 hover:text-[#198754] transition-transform transform hover:scale-105"
                          >
                            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                            <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                          </svg>
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        <button onClick={() => handleEliminar(customer.id)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-7 h-7 hover:text-[#BB2D3B] transition-transform transform hover:scale-105"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
          <div className="flex justify-between items-center p-2 mx-5">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="mr-2"
            >
              <div className="flex justify-center items-center py-1 px-2 bg-[#007872] rounded-xl text-white font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>Anterior </p>
              </div>
            </button>
            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              disabled={endIndex >= filteredCustomers.length}
            >
              <div className="flex justify-center items-center py-1 px-2 bg-[#007872] rounded-xl text-white font-semibold">
                <p>Ver más</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
