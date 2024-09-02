import React from "react";

const InputError = ({ fieldName, errorMessage }) => {
  return <> {fieldName && <p className="text-red-500 mb-2 min-h-[1.25rem] dark:text-red-400">{errorMessage}</p>}</>;
};

export default InputError;
