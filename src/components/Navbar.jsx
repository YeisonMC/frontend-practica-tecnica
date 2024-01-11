import React from "react";
import { NavLink } from "react-router-dom";
import { Hora } from "../components/iu/Hora";

export const Navbar = () => {
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="bg-[#007872] px-3 py-6 ">
          <img
            src="https://www.rapimoney.pe/wp-content/uploads/2023/07/logo-principal.png"
            alt="rapimoney"
          />
          <div className=" flex flex-col items-end">
            <h1 className="text-white text-sm mt-2 ">Yeissen Macalupu</h1>
            <hr className="w-24 mt-1 " />
          </div>
        </div>
        {/* <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800"> */}
        <div className="h-full overflow-y-auto bg-gray-50 dark:bg-gray-800">
          {/* <ul className="space-y-2 font-medium"> */}
          <ul className="font-medium">
            <li>
              <NavLink
                to="/home"
                className="flex items-center p-4 text-gray-900  dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group shadow-[rgba(0,_0,_0,_0.15)_0px_2px_5px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mr-3 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/customerform"
                className="flex items-center p-4 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group shadow-[rgba(0,_0,_0,_0.15)_0px_2px_5px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                    clipRule="evenodd"
                  />
                </svg>
                Crear
              </NavLink>
            </li>

            <li>
              <NavLink className="flex items-center p-4 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group shadow-[rgba(0,_0,_0,_0.15)_0px_2px_5px]">
                <svg
                  className="mr-3 flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                Cerrar sesión
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
      {/* <div className="px-4 mt-2 sm:ml-64"> */}
      <div className="px-4 mt-2 sm:ml-64">
        <div className="p-4  border-gray-200 border-dashed rounded-lg dark:border-gray-700 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_10px_10px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
          <div className="grid grid-cols-1 gap-4">
            <Hora />
          </div>
        </div>
      </div>
    </>
  );
};
