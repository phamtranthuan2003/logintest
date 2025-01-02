document.addEventListener('DOMContentLoaded', function () {
    // Lấy thông tin người dùng từ localStorage
    const currentEditUser = JSON.parse(localStorage.getItem('currentEditUser'));
    console.log(currentEditUser);

    if (currentEditUser) {
        console.log('Thông tin người dùng đang chỉnh sửa:', currentEditUser);

        // Hiển thị dữ liệu người dùng vào các trường trong form
        document.querySelector('#userName').value = currentEditUser.user.name;
        document.querySelector('#userBirthday').value = currentEditUser.user.birthday;
        document.querySelector('#userSex').value = currentEditUser.user.sex;
        document.querySelector('#userAddress').value = currentEditUser.user.address;
        document.querySelector('#userEmail').value = currentEditUser.user.email;
        document.querySelector('#userPassword').value = currentEditUser.user.password;
        document.querySelector('#userRole').value = currentEditUser.user.role;

        // Lưu index của người dùng để cập nhật sau khi chỉnh sửa
        const userIndex = currentEditUser.index;

        // Thêm sự kiện lưu thông tin chỉnh sửa
        document.querySelector('#EditUserForm').addEventListener('submit', function (e) {
            e.preventDefault(); // Ngừng hành động mặc định của form

            // Lấy dữ liệu đã chỉnh sửa từ form
            const updatedName = document.querySelector('#userName').value.trim();
            const updatedBirthday = document.querySelector('#userBirthday').value.trim();
            const updatedSex = document.querySelector('#userSex').value.trim();
            const updatedAddress = document.querySelector('#userAddress').value.trim();
            const updatedEmail = document.querySelector('#userEmail').value.trim();
            const updatedPassword = document.querySelector('#userPassword').value.trim();
            const updatedRole = document.querySelector('#userRole').value.trim();

            // Kiểm tra dữ liệu hợp lệ
            if (!updatedName || !updatedBirthday || !updatedSex || !updatedAddress || !updatedEmail || !updatedPassword || !updatedRole) {
                alert('Vui lòng nhập đầy đủ thông tin!');
                return;
            }

            // Lấy danh sách người dùng từ localStorage
            const users = JSON.parse(localStorage.getItem('user')) || [];

            if (users[userIndex]) {
                // Cập nhật thông tin người dùng
                users[userIndex] = {
                    ...users[userIndex],
                    name: updatedName,
                    birthday: updatedBirthday,
                    sex: updatedSex,
                    address: updatedAddress,
                    email: updatedEmail,
                    password: updatedPassword,
                    role: updatedRole,
                };

                // Lưu lại danh sách người dùng vào localStorage
                localStorage.setItem('user', JSON.stringify(users));
                console.log('Người dùng đã được cập nhật:', users[userIndex]);

                // Thông báo thành công và chuyển hướng
                alert('Cập nhật thông tin người dùng thành công!');
                window.location.href = 'admin_user_management.html';
            } else {
                alert('Người dùng không tồn tại!');
            }
        });
    } 
    else {
        // Nếu không có dữ liệu trong currentEditUser
        alert('Không tìm thấy người dùng để chỉnh sửa!');
        window.location.href = 'admin_user_management.html';
    }
});
