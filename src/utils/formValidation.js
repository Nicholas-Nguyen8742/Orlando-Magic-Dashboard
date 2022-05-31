// Email Validation
export const emailValidation = (email) => {
    const emailValidation = /^\S+@\S+\.\S+$/;
        if (emailValidation.test(email)){
            return false;
        }
        return true;
}

// Confirm Password Match Password
export const confirmPasswordValid = () => {
    if (this.state.password !== this.state.confirmPassword) {
        return false;
    }
    return true;
}

// Is Empty Password
export const isEmptyPassword = () => {
    const { passsword } = this.state;
    if (passsword === "") {
        return false;
    }
    return true;
}