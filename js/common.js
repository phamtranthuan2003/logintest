document.addEventListener('DOMContentLoaded', function () {
    
    const passwordField = document.getElementById('password');
    const togglePasswordButton = document.getElementById('hienmatkhau');

    togglePasswordButton.addEventListener('click', function () {
        const passwordType = passwordField.type;
        
        if (passwordType === 'password') {
            passwordField.type = 'text';
            togglePasswordButton.textContent = 'Ẩn mật khẩu'; 
        } else {
            passwordField.type = 'password';
            passwordagainField.type = 'password';
            togglePasswordButton.textContent = 'Hiển thị mật khẩu';
        }
    });
});