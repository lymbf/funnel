
import {ChangeEvent} from "react";

type MaskedPhoneProps = {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
    error?: string;
};

export default function MaskedPhone({value, onChange, onBlur, error}: MaskedPhoneProps){
    return (
        <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
                Telefon <span className="text-red-500">*</span>
            </label>

            <input
                type="tel"
                placeholder="np. +48 123 456 789"
                className={`w-full border rounded-lg p-3 outline-none transition
              ${error ? "border-red-400 focus:ring-2 focus:ring-red-300" : "border-gray-300 focus:ring-2 focus:ring-blue-300"}`}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? "phone-err" : undefined}
            />


            {error && (
                <p id="phone-err" className="mt-1 text-sm text-red-600">
                    {error}
                </p>
            )}
        </div>
    )
}