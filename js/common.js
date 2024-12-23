console.log(12121)
document.addEventListener('DOMContentLoaded', function () {
    
    const passwordField = document.getElementById('password');
    const togglePasswordButton = document.getElementById('toggle-password');

    togglePasswordButton.addEventListener('click', function () {
        const passwordType = passwordField.type;
    
        if (passwordType === 'password') {
            passwordField.type = 'text';
            togglePasswordButton.textContent = ""; 
        } else {
            passwordField.type = 'password';
            togglePasswordButton.textContent = "";
        
        }
       
    });
});