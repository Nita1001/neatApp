export const isPhoneValid = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
};
