import React from "react";
import InputError from "./InputError";

const OrderForm = ({ register, errors }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="col-span-1">
        {errors && <InputError fieldName={errors.firstName} errorMessage={errors?.firstName?.message} />}
        <input
          type="text"
          placeholder="First name"
          className="border p-2 rounded w-full dark:bg-gray-300 dark:border-gray-700 dark:placeholder-gray-700 font-semibold"
          {...register("firstName")}
        />
      </div>

      <div className="col-span-1">
        {errors && <InputError fieldName={errors.lastName} errorMessage={errors?.lastName?.message} />}
        <input
          type="text"
          placeholder="Last name"
          className="border p-2 rounded w-full dark:bg-gray-300 dark:border-gray-700 dark:placeholder-gray-700 font-semibold"
          {...register("lastName")}
        />
      </div>

      <div className="col-span-2">
        {errors && <InputError fieldName={errors.email} errorMessage={errors?.email?.message} />}
        <input
          type="email"
          placeholder="Email address"
          className="border p-2 rounded w-full col-span-2 dark:bg-gray-300 dark:border-gray-700 dark:placeholder-gray-700 font-semibold"
          {...register("email")}
        />
      </div>

      <div className="col-span-2">
        {errors && <InputError fieldName={errors.street} errorMessage={errors?.street?.message} />}
        <input
          type="text"
          placeholder="Street"
          className="border p-2 rounded w-full col-span-2 dark:bg-gray-300 dark:border-gray-700 dark:placeholder-gray-700 font-semibold"
          {...register("street")}
        />
      </div>

      <div className="col-span-1">
        {errors && <InputError fieldName={errors.city} errorMessage={errors?.city?.message} />}
        <input
          type="text"
          placeholder="City"
          className="border p-2 rounded w-full dark:bg-gray-300 dark:border-gray-700 dark:placeholder-gray-700 font-semibold"
          {...register("city")}
        />
      </div>

      <div className="col-span-1">
        {errors && <InputError fieldName={errors.state} errorMessage={errors?.state?.message} />}
        <input
          type="text"
          placeholder="State"
          className="border p-2 rounded w-full dark:bg-gray-300 dark:border-gray-700 dark:placeholder-gray-700 font-semibold"
          {...register("state")}
        />
      </div>

      <div className="col-span-1">
        {errors && <InputError fieldName={errors.zipCode} errorMessage={errors?.zipCode?.message} />}
        <input
          type="number"
          placeholder="Zip Code"
          className="border p-2 rounded w-full dark:bg-gray-300 dark:border-gray-700 dark:placeholder-gray-700 font-semibold"
          {...register("zipCode", { valueAsNumber: true })}
        />
      </div>

      <div className="col-span-1">
        {errors && <InputError fieldName={errors.country} errorMessage={errors?.country?.message} />}
        <input
          type="text"
          placeholder="Country"
          className="border p-2 rounded w-full dark:bg-gray-300 dark:border-gray-700 dark:placeholder-gray-700 font-semibold"
          {...register("country")}
        />
      </div>

      <div className="col-span-2">
        {errors && <InputError fieldName={errors.phone} errorMessage={errors?.phone?.message} />}
        <input
          type="text"
          placeholder="Phone"
          className="border p-2 rounded w-full col-span-2 dark:bg-gray-300 dark:border-gray-700 dark:placeholder-gray-700 font-semibold"
          {...register("phone")}
        />
      </div>
    </div>
  );
};

export default OrderForm;
