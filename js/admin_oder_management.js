document.addEventListener('DOMContentLoaded', function () {
    const productTableBody = document.querySelector('#addProduct tbody');

    // Lấy danh sách sản phẩm từ localStorage
    const products = JSON.parse(localStorage.getItem('product')) || [];

    if (products.length > 0) {
        // Duyệt qua danh sách sản phẩm và tạo các dòng cho bảng
        products.forEach((product, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${product.name}</td>
                <td><img src="${product.image}" " style="width: 50px; height: 50px;"></td>
                <td>${product.price}</td>
                <td>${product.status}</td>
                <td>
                    <div class="btn-edit-delete">
                        <button class="edit-button" id="edit-button" data-index="${index}">Sửa</button>
                        <button class="delete-button" data-index="${index}">Xóa</button>
                    </div>
                </td>
            `;
            productTableBody.appendChild(row);
        });
    }
    
    else {
        // Hiển thị thông báo nếu không có sản phẩm
        const noDataRow = document.createElement('tr');
        noDataRow.innerHTML = `<td colspan="6" style="text-align: center;">Không có sản phẩm nào.</td>`;
        productTableBody.appendChild(noDataRow);
}


    productTableBody.addEventListener('click', function (e) {
        const target = e.target;

        // Xử lý khi nhấn nút "Sửa"
        if (target.classList.contains('edit-button')) {
            const productIndex = target.getAttribute('data-index');
            const productToEdit = products[productIndex];
            
            // Lưu thông tin sản phẩm vào localStorage
            localStorage.setItem('currentEdit', JSON.stringify({
                index: productIndex,
                product: productToEdit
            }));
      

            // Chuyển hướng đến trang chỉnh sửa
            window.location.href = "admin_editproduct_management.html";
        }

        // Xử lý khi nhấn nút "Xóa"
        if (target.classList.contains('delete-button')) {
            const productIndex = target.getAttribute('data-index');
            const productToDelete = products[productIndex];
            console.log('Xóa sản phẩm:', productToDelete);

            if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')) {
                products.splice(productIndex, 1); // Xóa sản phẩm khỏi mảng
                localStorage.setItem('product', JSON.stringify(products)); // Cập nhật lại localStorage
                location.reload(); // Tải lại trang để cập nhật bảng
            }
        }
    });
 
        // Hàm tìm kiếm sản phẩm
        function searchProduct() {
            var input, filter, table, tr, td, i, txtValue;
            input = document.getElementById("searchInput");
            filter = input.value.toLowerCase();
            table = document.getElementById("addProduct");
            tr = table.getElementsByTagName("tr");

            // Lặp qua tất cả các hàng trong bảng và ẩn/hiện theo kết quả tìm kiếm
            for (i = 1; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[1]; // Tìm kiếm trong cột "Tên sản phẩm"
                if (td) {
                    txtValue = td.textContent || td.innerText;
                    if (txtValue.toLowerCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }       
            }
        }
  
});
