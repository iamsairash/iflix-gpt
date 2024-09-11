
export const checkValidationSignUp=(name,email, password, cpassword)=>{
    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const isValidEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(email);
    const namePattern = /^[A-Za-z][A-Za-z'-. ]{1,}[A-Za-z]$/.test(name);


    if(!isValidEmail && !isValidPassword && !namePattern) return "Invalid name, Email and Password"

    if(!isValidEmail && !isValidPassword) return "Invalid Email and Password"

    if(!isValidEmail) return "Invalid Email"
    if(!isValidPassword) return "Ivalid Password"
    if(password!=cpassword) return "confirm password is not same as password"
    

    return null;
}

export const checkValidationLogin=(email, password)=>{
    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const isValidEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(email);


    if(!isValidEmail && !isValidPassword) return "Invalid Email and Password"

    if(!isValidEmail) return "Invalid Email"
    if(!isValidPassword) return "Ivalid Password"
    

    return null;
}
