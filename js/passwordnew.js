document.getElementById('xacnhan').addEventListener('click', function () {
    const passwordField = document.getElementById('password').value;
    const passwordagainField = document.getElementById('passwordagain').value;

    
    if (passwordField === passwordagainField) {
        alert("Đổi Mật Khẩu Thành Công");
        window.location.href = 'login.html';
    
    } else {
        alert("Mật khẩu và mật khẩu nhập lại không khớp!");
    }
});

