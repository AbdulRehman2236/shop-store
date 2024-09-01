import React from "react";

const InputError = ({ fieldName, errorMessage }) => {
  return <> {fieldName && <p className="text-red-500 h-5 mb-2 dark:text-red-400">{errorMessage}</p>}</>;
};

export default InputError;
