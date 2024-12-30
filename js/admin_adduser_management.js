document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('editUserForm');

    // Lấy dữ liệu người dùng từ localStorage
    const userData = JSON.parse(localStorage.getItem('userData')) || {};

    // Kiểm tra nếu có thông tin người dùng, điền vào form
    if (userData.name) {
        document.getElementById('userName').value = userData.name;
    }
    if (userData.birthday) {
        document.getElementById('birhday').value = userData.birthday;
    }
    if (userData.sex) {
        document.getElementById('sex').value = userData.sex;
    }
    if (userData.address) {
        document.getElementById('userAddress').value = userData.address;
    }
    if (userData.role) {
        document.getElementById('userRole').value = userData.role;
    }

    // Xử lý khi form được submit
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Ngừng hành động mặc định của form (submit)

        // Lấy thông tin người dùng từ form
        const userName = document.getElementById('userName').value;
        const userBirthday = document.getElementById('birhday').value;
        const userSex = document.getElementById('sex').value;
        const userAddress = document.getElementById('userAddress').value;
        const userRole = document.getElementById('userRole').value;

        // Tạo đối tượng dữ liệu người dùng
        const updatedUserData = {
            name: userName,
            birthday: userBirthday,
            sex: userSex,
            address: userAddress,
            role: userRole
        };

        // Lấy danh sách người dùng từ localStorage
        const userList = JSON.parse(localStorage.getItem('user')) || [];

        // Kiểm tra xem người dùng đã có trong danh sách hay chưa
        const userIndex = userList.findIndex(user => user.name === updatedUserData.name);

        if (userIndex !== -1) {
            // Nếu người dùng đã tồn tại, cập nhật thông tin của người dùng đó
            userList[userIndex] = updatedUserData;
        } else {
            // Nếu không, thêm người dùng mới vào danh sách
            userList.push(updatedUserData);
        }

        // Lưu lại danh sách người dùng vào localStorage
        localStorage.setItem('user', JSON.stringify(userList));

        // Thông báo cập nhật thành công
        alert('Cập nhật thông tin người dùng thành công!');

        // Chuyển hướng người dùng đến trang quản lý người dùng
        window.location.href = 'admin_user_management.html';
    });
});
