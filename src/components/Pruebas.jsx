import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/jquery.dataTables.css";

export const Pruebas = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //   $("#example").dataTable({
  //     ajax: {
  //       url: "data.json",
  //       type: "GET",
  //     },
  //   });

  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:3000/rapimoney/allCustomersPruebas")
  //       .then((response) => {
  //         setCustomers(response.data);
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         setError("Error fetching customers");
  //         setLoading(false);
  //         console.error("Error fetching customers:", error);
  //       });
  //   }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3000/rapimoney/allCustomersPruebas")
      .then((response) => {
        setCustomers(response.data);
        setLoading(false);

        // Inicialización de DataTables después de que los datos se han cargado
        $("#example").dataTable({
          data: response.data,
          columns: [{ data: "id" }, { data: "dni" }, { data: "nombres" }],
          paging: true,
          lengthMenu: [10],
          searching: true,
        });
      })
      .catch((error) => {
        setError("Error fetching customers");
        setLoading(false);
        console.error("Error fetching customers:", error);
      });
  }, []);

  return (
    <>
      <div className="relative overflow-x-auto">
        <br />
        <table
          id="example"
          className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                id
              </th>
              <th scope="col" className="px-6 py-3">
                dni
              </th>
              <th scope="col" className="px-6 py-3">
                nombres
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr
                key={customer.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4 whitespace-nowrap dark:text-white">
                  {customer.id}
                </td>
                <td className="px-6 py-4">{customer.dni}</td>
                <td className="px-6 py-4">{customer.nombres}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <div className="relative overflow-x-auto">
        <br />
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  id
                </th>
                <th scope="col" className="px-6 py-3">
                  dni
                </th>
                <th scope="col" className="px-6 py-3">
                  nombres
                </th>
              </tr>
            </thead>
            <tbody>
              {customers.length > 0 ? (
                customers.map((customer) => (
                  <tr
                    key={customer.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="px-6 py-4 whitespace-nowrap dark:text-white">
                      {customer.id}
                    </td>
                    <td className="px-6 py-4">{customer.dni}</td>
                    <td className="px-6 py-4">{customer.nombres}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">No hay clientes disponibles.</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div> */}
    </>
  );
};
