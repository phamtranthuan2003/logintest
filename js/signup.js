document.getElementById('signupform').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngừng hành động mặc định khi gửi form

    // Lấy giá trị từ các trường nhập liệu
    const name = document.getElementById('name').value;
    const date = document.getElementById('birthday').value;
    const sex = document.querySelector('input[name="sex-options"]:checked')?.value; // Kiểm tra giới tính đã chọn
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const repassword = document.getElementById('re-password').value;

    // Kiểm tra mật khẩu và nhập lại mật khẩu có khớp không
    if (password !== repassword) {
        alert('Mật khẩu không khớp. Vui lòng thử lại.');
        return;
    }

    // Kiểm tra xem giới tính có được chọn không
    if (!sex) {
        alert('Vui lòng chọn giới tính.');
        return;
    }

    // Kiểm tra các trường bắt buộc khác có giá trị không
    if (!name || !date || !address || !email) {
        alert('Vui lòng điền đầy đủ thông tin.');
        return;
    }

    // Tạo đối tượng person để lưu trữ thông tin đăng ký
    const person = {
        name: name,
        date: date,
        sex: sex,
        address: address,
        email: email,
        password: password
    };
    
    // Hiển thị thông tin người dùng trong console
    console.log(person);

    // Lưu thông tin người dùng vào localStorage dưới dạng chuỗi JSON
    localStorage.setItem('user', JSON.stringify(person));

    // Thông báo đăng ký thành công
    alert('Đăng ký thành công!');

    // Chuyển hướng đến trang đăng nhập
    window.location.href = 'login.html';
});
