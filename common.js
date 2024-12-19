
document.addEventListener('DOMContentLoaded', function () {
// lay du lieu tu modol ==> controller ==> view
    const passwordField = document.getElementById('password');
    const togglePasswordButton = document.getElementById('hienmatkhau');
// tao du kien khi bam se hanh dong buoc tiep theo
    togglePasswordButton.addEventListener('click', function () {
// laay du lieu cua cua mat khau tu modol ==> controller ==> view
        const passwordType = passwordField.type;
// khi bam nut neu thi`
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
