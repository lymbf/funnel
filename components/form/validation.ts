const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneDigits = (str: string): string => (str || "").replace(/\D/g, "");
const isPhoneValid = (str: string): boolean => {
    const d = phoneDigits(str);
    return d.length === 9 || (d.length === 11 && d.startsWith("48"));
};

export { emailRegex, phoneDigits, isPhoneValid };