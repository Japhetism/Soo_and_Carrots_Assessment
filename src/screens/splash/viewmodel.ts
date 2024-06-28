export const viewmodel = () => {
    
    const navigateToSignup = () => {
        console.log("navigate to signup");
    }

    const navigateToEmail = () => {
        console.log("navigate to continue email");
    }

    return {
        navigateToSignup: navigateToSignup,
        navigateToEmail: navigateToEmail,
    }
}