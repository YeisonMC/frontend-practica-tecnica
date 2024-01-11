import { useState, useEffect } from "react";
import axios from "axios";

export const useCustomerListData = () => {
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/rapimoney/allCustomers")
      .then((response) => setCustomers(response.data))
      .catch((error) => console.error("Error fetching customers:", error));
  }, []);

  const filteredCustomers = customers.filter((customer) =>
    customer.nombres.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return {
    customers,
    setCustomers,
    searchTerm,
    setSearchTerm,
    filteredCustomers,
  };
};
