document.addEventListener('DOMContentLoaded', function () {
    const users = JSON.parse(localStorage.getItem('user')) || [];

    // Hàm hiển thị danh sách người dùng
    function displayUsers() {
        const userTableBody = document.querySelector('#userTable tbody');
        userTableBody.innerHTML = ""; // Xóa dữ liệu cũ trước khi thêm mới

        if (users.length > 0) {
            // Duyệt qua danh sách người dùng và tạo các dòng bảng
            users.forEach((user, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${user.name}</td>
                    <td>${user.birthday}</td>
                    <td>${user.sex}</td>
                    <td>${user.address}</td>
                    <td>${user.email}</td>
                    <td>${user.role}</td>
                    <td>
                        <div class="btn-edit-delete">
                            <a href="admin_edituser_management.html">
                                <button class="edit-button" data-index="${index}">Sửa</button>
                            </a>
                            <button class="delete-button" data-index="${index}">Xóa</button>
                        </div>
                    </td>
                `;
                userTableBody.appendChild(row);
            });
        } else {
            // Hiển thị thông báo nếu không có dữ liệu
            const noDataRow = document.createElement('tr');
            noDataRow.innerHTML = `<td colspan="8" style="text-align: center;">Không có dữ liệu người dùng.</td>`;
            userTableBody.appendChild(noDataRow);
        }
    }

    // Xử lý sự kiện click trong bảng
    const userTableBody = document.querySelector('#userTable tbody');
    userTableBody.addEventListener('click', function (e) {
        const target = e.target;

        // Xử lý khi nhấn nút "Sửa"
        if (target.classList.contains('edit-button')) {
            const userIndex = target.getAttribute('data-index');
            const userToEdit = users[userIndex];

            // Lưu thông tin người dùng vào localStorage
            localStorage.setItem('currentEditUser', JSON.stringify({
                index: userIndex,
                user: userToEdit
            }));

            // Chuyển hướng đến trang chỉnh sửa
            window.location.href = "admin_edituser_management.html";
        }

        // Xử lý khi nhấn nút "Xóa"
        if (target.classList.contains('delete-button')) {
            const userIndex = target.getAttribute('data-index');
            const userToDelete = users[userIndex];
            console.log('Xóa người dùng:', userToDelete);

            if (confirm('Bạn có chắc chắn muốn xóa người dùng này không?')) {
                users.splice(userIndex, 1); // Xóa người dùng khỏi mảng
                localStorage.setItem('user', JSON.stringify(users)); // Cập nhật lại localStorage
                displayUsers(); // Cập nhật bảng
            }
        }
    });

    // Hàm tìm kiếm người dùng
    function searchUser() {
        const input = document.getElementById("searchInput");
        const filter = input.value.toLowerCase();
        const table = document.getElementById("userTable");
        const tr = table.getElementsByTagName("tr");

        // Lặp qua tất cả các hàng trong bảng và ẩn/hiện theo kết quả tìm kiếm
        for (let i = 1; i < tr.length; i++) {
            const td = tr[i].getElementsByTagName("td")[1]; // Cột "Tên người dùng"
            if (td) {
                const txtValue = td.textContent || td.innerText;
                if (txtValue.toLowerCase().indexOf(filter) > -1) {
                    tr[i].style.display = ""; // Hiển thị dòng phù hợp
                } else {
                    tr[i].style.display = "none"; // Ẩn dòng không phù hợp
                }
            }
        }
    }

    // Thêm sự kiện tìm kiếm
    document.getElementById("searchInput").addEventListener('input', searchUser);

    // Hiển thị danh sách người dùng khi tải trang
    displayUsers();
});
