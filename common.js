console.log(7878978)
document.addEventListener('DOMContentLoaded', function () {

    const passwordField = document.getElementById('password');
    const togglePasswordButton = document.getElementById('hienmatkhau');
    
  
    togglePasswordButton.addEventListener('click', function () {

        const currentType = passwordField.type;
        
    
        if (currentType === 'password') {
            passwordField.type = 'text';
            togglePasswordButton.textContent = 'Ẩn mật khẩu'; 
        } else {
            passwordField.type = 'password'; 
            togglePasswordButton.textContent = 'Hiển thị mật khẩu';
        }
    });

    
});
