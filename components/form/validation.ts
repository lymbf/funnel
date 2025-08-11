const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneDigits = (str: string): string => (str || "").replace(/\D/g, "");
const isPhoneValid = (str: string): boolean => {
    const d = phoneDigits(str);
    return d.length === 9 || (d.length === 11 && d.startsWith("48"));
};

const phoneRegex = /^(?:\+49|0)(?:(?:1(?:5\d|6\d|7\d)\d{7,8})|(?:[2-9]\d{1,4}\d{3,8}))$/

const zipcodeRegex = /^\d{5}$/

export { emailRegex, phoneDigits, isPhoneValid, zipcodeRegex, phoneRegex };