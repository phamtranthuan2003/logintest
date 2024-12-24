document.getElementById('signupform').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngừng hành động mặc định khi gửi form

    // Lấy giá trị từ các trường nhập liệu
    const name = document.getElementById('name').value.trim();
    const birthday = document.getElementById('birthday').value;
    const sex = document.querySelector('input[name="sex"]:checked')?.value; // Sửa lỗi chọn giới tính
    const address = document.getElementById('address').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const repassword = document.getElementById('re-password').value;
    const role = document.querySelector('input[name="role"]:checked').value; // Lấy vai trò người dùng
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
    if (!name || !birthday || !address || !email) {
        alert('Vui lòng điền đầy đủ thông tin.');
        return;
    }

    // Kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Email không hợp lệ. Vui lòng nhập đúng định dạng email.');
        return;
    }

    // Tạo đối tượng người dùng
    const person = {
        name: name,
        birthday: birthday,
        sex: sex,
        address: address,
        email: email,
        password: password,
        role: role, // Lưu vai trò người dùng
    };

    // Lấy danh sách người dùng từ localStorage
    const userList = JSON.parse(localStorage.getItem('user')) || [];

    // Kiểm tra xem email có bị trùng không
    const isEmailExist = userList.some(user => user.email === person.email);

    if (isEmailExist) {
        // Nếu email đã tồn tại, hiển thị thông báo
        alert('Email đã được đăng ký. Vui lòng sử dụng email khác.');
        return;
    }

    // Thêm người dùng mới vào danh sách
    userList.push(person);

    // Lưu danh sách người dùng vào localStorage
    localStorage.setItem('user', JSON.stringify(userList));

    // Hiển thị thông báo đăng ký thành công
    alert('Đăng ký thành công!');

    // Chuyển hướng người dùng đến trang đăng nhập
    window.location.href = 'login.html';
});
