
const users = JSON.parse(localStorage.getItem('user'));
console.log(users)
// Hàm hiển thị danh sách người dùng
function displayUsers() {
    const userTableBody = document.querySelector('#userTable tbody');
    if (users.length > 0) {
        // Duyệt qua danh sách người dùng và tạo các dòng bảng
        users.forEach((user, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${user.name }</td>
                <td>${user.birthday }</td>
                <td>${user.sex }</td>
                <td>${user.address }</td>
                <td>${user.email }</td>
                <td>${user.role }</td>
            `;
            userTableBody.appendChild(row);
        });
    } else {
        // Hiển thị thông báo nếu không có dữ liệu
        const noDataRow = document.createElement('tr');
        noDataRow.innerHTML = `<td colspan="7" style="text-align: center;">Không có dữ liệu người dùng.</td>`;
        userTableBody.appendChild(noDataRow);
    }
    
}




// Hiển thị danh sách người dùng khi tải trang
window.onload = displayUsers;
