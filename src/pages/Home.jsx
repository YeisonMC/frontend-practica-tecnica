import React from "react";
import { CustomerList } from "../components/CustomerList.jsx";

export const Home = () => {
  return (
    <>
      <div className="px-4 mt-2 sm:ml-64">
        <div className="p-4 border-2 border-gray-100 border-dashed rounded-lg dark:border-gray-700">
          <CustomerList />
        </div>
      </div>
    </>
  );
};
