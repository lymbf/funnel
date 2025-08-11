const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneDigits = (str: string): string => (str || "").replace(/\D/g, "");
const isPhoneValid = (str: string): boolean => {
    const d = phoneDigits(str);
    return d.length === 9 || (d.length === 11 && d.startsWith("48"));
};

const mobilePhoneRegex = /^(?:\+49|0)1[5-7]\d{8,9}$/
const homePhoneRegex = /^(?:\+49|0)[2-9]\d{4,12}$/

const zipcodeRegex = /^\d{5}$/

export { emailRegex, phoneDigits, isPhoneValid, zipcodeRegex, mobilePhoneRegex, homePhoneRegex };