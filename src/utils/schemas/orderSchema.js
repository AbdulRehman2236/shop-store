import { z } from "zod";

export const orderSchema = z
  .object({
    firstName: z
      .string()
      .min(1, "First name is required")
      .max(20, "First name should not be greater than 20 characters"),
    lastName: z
      .string()
      .min(3, "Last name must be at least 3 characters")
      .max(20, "Last name should not be greater than 20 characters"),
    email: z.string().email(),
    street: z.string().min(1, "Street is required").max(50, "Street should not be greater than 50 characters"),
    city: z.string().min(1, "City is required").max(20, "City should not be greater than 20 characters"),
    state: z.string().min(1, "State is required").max(20, "State should not be greater than 20 characters"),
    zipCode: z
      .number()
      .gte(1000, "Zip code name must be at least 4 characters")
      .lte(9999999, "Zip Code should not be greater than 7 characters"),
    country: z.string().min(1, "Country is required").max(20, "Country should not be greater than 20 characters"),
    phone: z
      .string()
      .min(9, "Phone must be at least 9 characters")
      .max(15, "Phone should not be greater than 15 characters"),
  })
  .refine((data) => data.city !== data.country, {
    message: "City and Country are same",
    path: ["country"],
  });
