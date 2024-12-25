function goToForgotPasswordScreen() {
    console.log('Đi đến màn hình Quên mật khẩu');
    window.location.href = 'forgot_password.html'; // Chuyển hướng đến trang "Quên mật khẩu"
}

function onClickLogin() {
    console.log('Nhấn nút Đăng nhập');
}

function onClickLoginWithFacebook() {
    console.log('Nhấn nút Đăng nhập bằng Facebook');
    window.open('https://www.facebook.com/login', '_blank'); // Mở trang đăng nhập Facebook trong tab mới
}

function onClickLoginWithGoogle() {
    console.log('Nhấn nút Đăng nhập bằng Google');
    window.open('https://accounts.google.com/signin', '_blank'); // Mở trang đăng nhập Google trong tab mới
}

function goToSignupScreen() {
    console.log('Đi đến màn hình Đăng ký');
    window.location.href = 'signup.html'; // Chuyển hướng đến trang "Đăng ký"
}

// Sự kiện khi nhấn nút Đăng nhập
document.getElementById('btn-login').addEventListener('click', function () {
    const emailField = document.getElementById('email').value; // Lấy giá trị từ trường nhập email
    const passwordField = document.getElementById('password').value; // Lấy giá trị từ trường nhập mật khẩu

    // Lấy danh sách người dùng từ localStorage (nếu có)
    const loginData = JSON.parse(localStorage.getItem('user'));
    
    if (!loginData || loginData.length === 0) {
        // Nếu không tìm thấy dữ liệu người dùng, hiển thị thông báo
        alert('Không tìm thấy người dùng');
        return;
    }

    // Tìm người dùng trong danh sách dựa trên email và mật khẩu
    const user = loginData.find(user => user.email === emailField && user.password === passwordField);

    if (user) {
        // Nếu tìm thấy người dùng, kiểm tra vai trò
        alert("Đăng nhập thành công!");

        // Kiểm tra vai trò và chuyển hướng người dùng
        if (user.role === 'admin') {
            // Nếu là admin, chuyển hướng đến trang quản trị admin
            window.location.href = 'admin.html';
        } else {
            // Nếu là user, chuyển hướng đến trang người dùng
            window.location.href = 'home.html';
        }
    } else {
        // Nếu không tìm thấy người dùng, hiển thị thông báo lỗi
        alert("Tài khoản hoặc mật khẩu không đúng!");
    }
});
