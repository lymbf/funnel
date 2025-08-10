import {FormState} from "@/components/form/types";
import {ChangeEvent} from "react";

type FieldProps = {
    label: string;
    name: keyof FormState;
    type?: "text" | "email";
    value: string;
    required?: boolean;
    placeholder?: string;
    error?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
};

export default function Field({
                                  label,
                                  name,
                                  type = "text",
                                  value,
                                  onChange,
                                  onBlur,
                                  error,
                                  required,
                                  placeholder,
                              }: FieldProps) {
    return (
        <div>
            <label className={`block text-sm font-medium text-gray-800 mb-1 ${name === 'zipcode' ? 'w-[270px]' : ''}`}>
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                className={`w-full border rounded-lg p-3 outline-none transition
          ${error ? "border-red-400 focus:ring-2 focus:ring-red-300" : "border-accent focus:ring-2 focus:ring-blue-300"}`}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? `${name}-err` : undefined}
            />
            {error && (
                <p id={`${name}-err`} className="mt-1 text-sm text-red-600">
                    {error}
                </p>
            )}
        </div>
    )
}