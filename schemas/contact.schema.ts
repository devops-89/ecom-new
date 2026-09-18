import * as Yup from "yup";

export const contactValidationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .required("Name is required"),
  phone: Yup.string()
    .trim()
    .required("Contact number is required")
    .test("is-valid-phone", "Enter a valid phone number with country code", (value) => {
      if (!value) return false;
      return value.startsWith("+") && value.replace(/\s+/g, "").length >= 7;
    }),
  email: Yup.string()
    .trim()
    .email("Enter a valid email")
    .required("Email is required"),
  country: Yup.string().optional(),
  brandName: Yup.string()
    .trim()
    .required("Brand Name is required"),
  businessNature: Yup.string()
    .trim()
    .required("Nature of Business is required"),
  category: Yup.string().optional(),
  currentSales: Yup.string().optional(),
  averageSalesPrice: Yup.string().optional(),
  targetSales: Yup.string().optional(),
});
