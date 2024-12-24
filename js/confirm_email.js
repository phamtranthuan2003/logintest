document.addEventListener('DOMContentLoaded', function () {
    // Thêm sự kiện khi nhấn nút "Xác nhận"
    document.getElementById('btn-confirm').addEventListener('click', function () {
        const emailField = document.getElementById('email').value.trim(); // Lấy giá trị email từ trường nhập liệu và loại bỏ khoảng trắng

        // Lấy danh sách người dùng đã lưu trong localStorage
        const confirmemail = JSON.parse(localStorage.getItem('user'));

        if (!confirmemail || confirmemail.length === 0) {
            // Nếu không có người dùng nào được lưu trong localStorage
            alert('Không tìm thấy người dùng');
            return;
        }

        // Tìm người dùng trong danh sách dựa trên email
        const user = confirmemail.find(user => user.email === emailField);

        if (user) {
            // Nếu tìm thấy người dùng, chuyển đến trang "Quên mật khẩu"
            window.location.href = 'forgot_password.html';
        } else {
            // Nếu không tìm thấy người dùng, hiển thị thông báo
            alert("Tài khoản không đúng!");
        }
    });
});
