document.addEventListener('DOMContentLoaded', function () {
    // Lấy trường nhập mật khẩu và nút bật/tắt hiển thị mật khẩu
    const passwordField = document.getElementById('password');
    const togglePasswordButton = document.getElementById('toggle-password');

    // Thêm sự kiện click vào nút bật/tắt hiển thị mật khẩu
    togglePasswordButton.addEventListener('click', function () {
        if (passwordField.type === 'password') {
            // Nếu loại là mật khẩu (password), chuyển sang dạng văn bản (text)
            passwordField.type = 'text';
            togglePasswordButton.textContent = ""; // Thay đổi nội dung của nút (tùy ý, hiện tại để trống)
        } else {
            // Nếu loại là văn bản (text), chuyển về dạng mật khẩu (password)
            passwordField.type = 'password';
            togglePasswordButton.textContent = ""; // Thay đổi nội dung của nút (tùy ý, hiện tại để trống)
        }
    });
});
