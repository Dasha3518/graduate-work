export const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{0,}$/;
const emailRegExp = /(^|\s+)[\w\-.]+@([\w-]+\.)+[\w-]{2,4}($|\s+)/;
const passwordLanguageRegExp = /^[A-z\d]+$/;

export const validateRequired = (value: string) => {
    if( value === "") {
        return "Required field";
    }

    return "";
};

export const validateEmail = (value: string) => {
    if( value === "") {
        return "Required field";
    }

    if(!emailRegExp.test(value)) {
        return "Email wrong form"
    }

    return '';
};

export const validateConfirmPassword = (
    password: string,
    confirmPassword: string
) => {
    if (password !== confirmPassword) {
    return "Password do not match";
    }

    return "";
};

export const validatePassword = (password: string): string => {
    if (!password) {
        return "Enter password";
    }
    if (!passwordRegExp.test(password)) {
        return "The password must be registered at least 1 digit, 1 uppercase and 1 lowercase letter";
    }
    
    if (!passwordLanguageRegExp.test(password)) {
        return "The password must consist of Latin letters";
    }
    
    if (password.length < 6) {
        return "Password must contain at least 6 characters and no more than 30 characters";
    }
    
    if (password.length > 15) {
        return "Password must contain at least 8 characters and no more than 15 characters";
    }
    
        return "";
    };