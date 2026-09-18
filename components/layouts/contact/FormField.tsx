import type { FormFieldProps } from "@/types/contact.types";

export default function FormField({
  id,
  name,
  label,
  value,
  type = "text",
  error,
  touched,
  placeholder,
  onChange,
  onBlur,
}: FormFieldProps) {
  const hasError = Boolean((touched ?? true) && error);
  const isActive = Boolean(value && value.length > 0);

  return (
    <div className="relative min-h-20 md:min-h-22.5">
      <input
        className={`
          peer 
          h-14 
          w-full 
          rounded-none 
          border-0 
          border-b-2 
          bg-transparent 
          px-0 
          pt-6 
          pb-2 
          font-[inherit] 
          text-[16px] 
          outline-none 
          transition-all 
          duration-300 
          placeholder:text-transparent
          focus:placeholder:text-[#9d9d9d]
          ${
            hasError
              ? "border-[#f22626] text-[#f22626]"
              : "border-[#9d9d9d] focus:border-[#1a73e8] text-[#333]"
          }
        `}
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        aria-describedby={hasError ? `${id}-error` : undefined}
        aria-invalid={hasError}
      />
      <label
        className={`
          pointer-events-none 
          absolute 
          left-0 
          z-10 
          m-0 
          origin-top-left 
          leading-none 
          transition-all 
          duration-300 
          ease-out
          ${
            hasError
              ? "text-[#f22626]"
              : isActive
                ? "top-0 text-[0.85rem] text-[#1a73e8] transform scale-90"
                : "top-4 text-[1rem] text-[#777] peer-focus:top-0 peer-focus:text-[0.85rem] peer-focus:text-[#1a73e8] peer-focus:transform peer-focus:scale-90"
          }
        `}
        htmlFor={id}
      >
        {label}
      </label>
      {hasError && (
        <p
          id={`${id}-error`}
          className="mt-2 mb-0 text-[0.875rem] tracking-[0.3px] text-[#f22626] animate-fadeIn"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}

