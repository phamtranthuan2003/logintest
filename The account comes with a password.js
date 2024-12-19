
document.addEventListener('DOMContentLoaded', function () {
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password')
    emailField.addEventListener('inp    ut', function () {

        const emailValue = emailField.value;

        const generatedPassword = emailValue;

        console.log(emailField)

        passwordField.value = generatedPassword;
    });
});
