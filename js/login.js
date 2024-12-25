function goToForgotPasswordScreen() {
    console.log('Đi đến màn hình Quên mật khẩu');
    window.location.href = 'forgot_password.html';
}

function onClickLogin() {
    console.log('Nhấn nút Đăng nhập');
}

function onClickLoginWithFacebook() {
    console.log('Nhấn nút Đăng nhập bằng Facebook');
    window.open('https://www.facebook.com/login', '_blank');
}

function onClickLoginWithGoogle() {
    console.log('Nhấn nút Đăng nhập bằng Google');
    window.open('https://accounts.google.com/signin', '_blank'); 
}
// Sự kiện khi nhấn nút Đăng nhập
document.getElementById('btn-login').addEventListener('click', function () {
    const emailField = document.getElementById('email').value; 
    const passwordField = document.getElementById('password').value;

    // Lấy danh sách người dùng từ localStorage
    const loginData = JSON.parse(localStorage.getItem('user'));
    
    if (!loginData || loginData.length === 0) {
        alert('Không tìm thấy người dùng');
        return;
    }

    // Tìm người dùng trong danh sách dựa trên email và mật khẩu
    const user = loginData.find(user => user.email === emailField && user.password === passwordField);

    if (user) {
        alert("Đăng nhập thành công!");

       
        if (user.role === 'admin') {
          
            window.location.href = 'admin.html';
        } else {
           
            window.location.href = 'home.html';
        }
    } else {
       
        alert("Tài khoản hoặc mật khẩu không đúng!");
    }
});
