import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const useCustomerForm = () => {
  const initialFormData = {
    dni: "",
    nombres: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:3000/rapimoney/createcustomers",
        formData
      );

      Swal.fire({
        icon: "success",
        title: "Cliente creado exitosamente",
        showConfirmButton: true,
      });
      setFormData({
        dni: "",
        nombres: "",
      });
    } catch (error) {
      console.error("Error al crear el cliente:", error);

      Swal.fire({
        icon: "error",
        title: "Error al crear el cliente",
        text: "Por favor, inténtalo de nuevo",
        showConfirmButton: true,
      });
    }
  };

  return { formData, handleChange, handleSubmit };
};

export default useCustomerForm;
