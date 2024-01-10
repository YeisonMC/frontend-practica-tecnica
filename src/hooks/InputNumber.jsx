import { useState } from "react";

const InputNumber = () => {
  const [numericValue, setNumericValue] = useState("");

  const handleNumericChange = (inputValue) => {
    if (/^[0-9]*$/.test(inputValue) && inputValue.length <= 9) {
      setNumericValue(inputValue);
    }
  };

  return [numericValue, handleNumericChange];
};

export default InputNumber;
