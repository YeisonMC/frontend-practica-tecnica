import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Input } from "./iu/Input";
import { Label } from "./iu/Label";
import useCustomerForm from "../hooks/useCustomerForm";

export const CustomerForm = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const { formData, handleChange, handleSubmit } = useCustomerForm();

  return (
    <>
      <h1 className="text-2xl mb-3 font-semibold">Nuevo cliente</h1>
      <form
        className="max-w-2xl mx-auto p-5 bg-slate-50 shadow-[1px_1px_15px_3px_#cbd5e0] rounded-xl"
        onSubmit={handleSubmit}
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="800"
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
            <Label htmlFor="apellidos"> Apellidos</Label>
            <Input
              type="text"
              id="apellidos"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleChange}
              placeholder="Ingresa tus apellidos"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="mb-5">
            <Label htmlFor="dni">DNI</Label>
            <Input
              type="text"
              id="dni"
              name="dni"
              value={formData.dni}
              onChange={handleChange}
              maxLength={8}
              placeholder="Ingresa tu DNI"
            />
          </div>
          <div className="mb-5">
            <Label htmlFor="fecha_nacimiento">Fecha de nacimiento</Label>
            <Input
              type="date"
              id="fecha_nacimiento"
              name="fecha_nacimiento"
              value={formData.fecha_nacimiento}
              onChange={handleChange}
              placeholder="Ingresa tus apellidos"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="mb-5">
            <Label htmlFor="celular">Celular</Label>
            <Input
              type="text"
              id="celular"
              name="celular"
              value={formData.celular}
              maxLength={9}
              onChange={handleChange}
              placeholder="Ingrese su celular"
            />
          </div>
          <div className="mb-5">
            <Label htmlFor="correo">Correo</Label>
            <Input
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              placeholder="example@gmail.com"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-5">
          <Label htmlFor="banco">Banco</Label>
          <select
            id="banco"
            name="banco"
            value={formData.banco}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="" disabled>
              Selecciona un banco
            </option>
            <option value="BCP">BCP</option>
            <option value="BBVA">BBVA</option>
            <option value="Interbank">Interbank</option>
            <option value="Pichincha">Pichincha</option>
          </select>
        </div>

        <div className="mb-5">
          <Label htmlFor="numero_cci">CCI</Label>
          <Input
            type="text"
            id="numero_cci"
            name="numero_cci"
            value={formData.numero_cci}
            placeholder="example@gmail.com"
            maxLength={20}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="text-white bg-[#007872]  font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
        >
          Enviar
        </button>
      </form>
    </>
  );
};
