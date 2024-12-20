document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordAgain = document.getElementById('passwordagain').value;
  
   
    if (password !== passwordAgain) {
        alert('Mật khẩu không khớp. Vui lòng thử lại.');
        return;
    }
    const persion = {
        email: email,
        password: password
    };

    localStorage.setItem('user', JSON.stringify(persion));

    alert('Đăng ký thành công!');
    window.location.href = 'login.html';
});
