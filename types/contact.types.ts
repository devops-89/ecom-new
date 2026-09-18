import type { FormikProps } from "formik";

export interface FormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  brandName: string;
  businessNature: string;
  category: string;
  currentSales: string;
  averageSalesPrice: string;
  targetSales: string;
}

export type FormErrors = Partial<Record<keyof FormData, string>>;

export interface CountryOption {
  code: string;
  name: string;
  dial: string;
}

export interface Office {
  country: string;
  flag: string;
  lines: string[];
}

export interface OfficeListProps {
  offices: Office[];
}

export interface OfficeCardProps {
  office: Office;
}

export interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  type?: string;
  error?: string;
  touched?: boolean;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export interface ContactFormProps {
  onSubmitSuccess?: (values: FormData) => void;
}