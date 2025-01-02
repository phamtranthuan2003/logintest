document.addEventListener('DOMContentLoaded', function () {
    // Kiểm tra xem phần tử có tồn tại trước khi gắn sự kiện
    const addButton = document.getElementById('adduser');
    
    if (addButton) {
        addButton.addEventListener('click', function (event) {
            event.preventDefault();  // Ngăn chặn hành động mặc định của sự kiện
            
            const userName = document.getElementById('userName')?.value.trim();
            const userBirthday = document.getElementById('userBirhday')?.value.trim();
            const userSex = document.getElementById('userSex')?.value.trim();
            const userAddress = document.getElementById('userAddress')?.value.trim();
            const userEmail = document.getElementById('userEmail').value;
            const userRole = document.getElementById('userRole').value;
            const userPassword = document.getElementById('userPassword').value;
            // Kiểm tra các trường nhập liệu
            if (!userName || !userBirthday || !userSex || !userAddress || !userEmail || !userRole || !userPassword ) {
                alert('Vui lòng điền đầy đủ thông tin.');
                return;
            }

            const addUser = {
                name: userName,
                birthday: userBirthday,
                sex: userSex,
                address: userAddress,
                email: userEmail,
                role: userRole,
                password: userPassword,
            };

            
            // Lấy danh sách sản phẩm từ localStorage
            const listUser = JSON.parse(localStorage.getItem('user')) || [];

            // Kiểm tra trùng tên sản phẩm
            const UserExists = listUser.some(user => user.email === addUser.email);
            if (UserExists) {
                alert('Email đã tồn tại.');
                return;
            }

            // Thêm sản phẩm mới vào danh sách
            listUser.push(addUser);
            localStorage.setItem('user', JSON.stringify(listUser));

            alert('Thêm người dùng thành công!');
            window.location.href = 'admin_user_management.html';  // Chuyển hướng đến trang quản lý đơn hàng
        });
    }
});
