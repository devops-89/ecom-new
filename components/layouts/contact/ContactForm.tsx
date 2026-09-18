"use client";

import { useState } from "react";
import { useFormik } from "formik";
import { MuiTelInput } from "mui-tel-input";
import { Autocomplete, TextField, Box } from "@mui/material";
import ReactCountryFlag from "react-country-flag";

import FormField from "./FormField";

import { COUNTRY_OPTIONS } from "@/utils/generic-data";
import { contactValidationSchema } from "@/schemas/contact.schema";
import type { FormData, ContactFormProps } from "@/types/contact.types";

const INITIAL_VALUES: FormData = {
  name: "",
  email: "",
  phone: "",
  country: "",
  brandName: "",
  businessNature: "",
  category: "",
  currentSales: "",
  averageSalesPrice: "",
  targetSales: "",
};

export default function ContactForm({ onSubmitSuccess }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik<FormData>({
    initialValues: INITIAL_VALUES,
    validationSchema: contactValidationSchema,
    onSubmit: (values, { resetForm }) => {
      setSubmitted(true);
      if (onSubmitSuccess) {
        onSubmitSuccess(values);
      }
      console.log("Form submitted:", values);
      resetForm();
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubmitted(false);
    formik.handleChange(e);
  };

  return (
    <form
      data-aos="fade-up"
      className="flex flex-col gap-10"
      onSubmit={formik.handleSubmit}
      noValidate
    >
      <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
        <FormField
          id="name"
          name="name"
          label="Name*"
          value={formik.values.name}
          error={formik.errors.name}
          touched={formik.touched.name}
          placeholder="Your Name"
          onChange={handleInputChange}
          onBlur={formik.handleBlur}
        />

        {/* MUI Tel Input */}
        <MuiTelInput
          value={formik.values.phone}
          onChange={(newPhone) => {
            setSubmitted(false);
            formik.setFieldValue("phone", newPhone);
          }}
          onBlur={() => formik.setFieldTouched("phone", true)}
          defaultCountry="IN"
          label="Phone*"
          variant="standard"
          error={Boolean(formik.touched.phone && formik.errors.phone)}
          helperText={formik.touched.phone ? formik.errors.phone : ""}
          fullWidth
          sx={{
            "& .MuiInput-underline:before": { borderBottomColor: "#9d9d9d" },
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottomColor: "#1a73e8" },
            "& .MuiInput-underline:after": { borderBottomColor: "#1a73e8" },
            "& .MuiInputLabel-root": { color: "#777", fontSize: "1rem" },
            "& .MuiInputLabel-root.Mui-focused": { color: "#1a73e8" },
            "& .MuiInputBase-input": { padding: "10px 0", color: "#333", fontSize: "16px" },
          }}
        />

        <FormField
          id="email"
          name="email"
          type="email"
          label="Email*"
          value={formik.values.email}
          error={formik.errors.email}
          touched={formik.touched.email}
          placeholder="Your Email"
          onChange={handleInputChange}
          onBlur={formik.handleBlur}
        />

        {/* MUI Autocomplete for Country */}
        <Autocomplete
          id="country"
          options={COUNTRY_OPTIONS}
          getOptionLabel={(option) => option.name}
          value={COUNTRY_OPTIONS.find((c) => c.name === formik.values.country) || null}
          onChange={(event, newValue) => {
            setSubmitted(false);
            formik.setFieldValue("country", newValue ? newValue.name : "");
          }}
          onBlur={() => formik.setFieldTouched("country", true)}
          renderOption={({ key, ...restProps }, option) => (
            <Box component="li" key={key} sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...restProps}>
              <ReactCountryFlag
                countryCode={option.code}
                svg
                style={{ width: 28, height: 20, marginRight: 10, borderRadius: 2 }}
              />
              {option.name}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Country"
              variant="standard"
              error={Boolean(formik.touched.country && formik.errors.country)}
              helperText={formik.touched.country ? formik.errors.country : ""}
              sx={{
                "& .MuiInput-underline:before": { borderBottomColor: "#9d9d9d" },
                "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottomColor: "#1a73e8" },
                "& .MuiInput-underline:after": { borderBottomColor: "#1a73e8" },
                "& .MuiInputLabel-root": { color: "#777", fontSize: "1rem" },
                "& .MuiInputLabel-root.Mui-focused": { color: "#1a73e8" },
                "& .MuiInputBase-input": { padding: "10px 0", color: "#333", fontSize: "16px" },
              }}
            />
          )}
        />

        <FormField
          id="brandName"
          name="brandName"
          label="Brand Name*"
          value={formik.values.brandName}
          error={formik.errors.brandName}
          touched={formik.touched.brandName}
          placeholder="Your Brand Name"
          onChange={handleInputChange}
          onBlur={formik.handleBlur}
        />

        <FormField
          id="businessNature"
          name="businessNature"
          label="Nature of Business*"
          value={formik.values.businessNature}
          error={formik.errors.businessNature}
          touched={formik.touched.businessNature}
          placeholder="Your Nature of Business"
          onChange={handleInputChange}
          onBlur={formik.handleBlur}
        />

        <FormField
          id="category"
          name="category"
          label="Category"
          value={formik.values.category}
          error={formik.errors.category}
          touched={formik.touched.category}
          placeholder="Your Category"
          onChange={handleInputChange}
          onBlur={formik.handleBlur}
        />

        <FormField
          id="currentSales"
          name="currentSales"
          label="Current Sales Figure"
          value={formik.values.currentSales}
          error={formik.errors.currentSales}
          touched={formik.touched.currentSales}
          placeholder="Your Current Sales Figure"
          onChange={handleInputChange}
          onBlur={formik.handleBlur}
        />

        <FormField
          id="averageSalesPrice"
          name="averageSalesPrice"
          label="Average Sales Price"
          value={formik.values.averageSalesPrice}
          error={formik.errors.averageSalesPrice}
          touched={formik.touched.averageSalesPrice}
          placeholder="Your Average Sales Price"
          onChange={handleInputChange}
          onBlur={formik.handleBlur}
        />

        <FormField
          id="targetSales"
          name="targetSales"
          label="Target Sales"
          value={formik.values.targetSales}
          error={formik.errors.targetSales}
          touched={formik.touched.targetSales}
          placeholder="Your Target Sales"
          onChange={handleInputChange}
          onBlur={formik.handleBlur}
        />
      </div>

      <div className="flex min-h-16.5 items-center gap-4.5">
        <button
          className="h-16.25 w-full cursor-pointer border-0 bg-[#111] text-[1.12rem] font-bold text-white transition duration-250 hover:-translate-y-0.5 hover:border hover:border-[#111] hover:bg-white hover:text-[#111] md:w-47 disabled:opacity-50"
          type="submit"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Submitting..." : "Submit"}
        </button>
        {submitted && (
          <p className="m-0 text-[0.95rem] text-[#247d39]">
            Thank you. Your enquiry has been received.
          </p>
        )}
      </div>
    </form>
  );
}


