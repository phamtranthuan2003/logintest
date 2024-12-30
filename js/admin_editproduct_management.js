document.addEventListener('DOMContentLoaded', function () {
    // Lấy thông tin sản phẩm từ localStorage
    const currentEdit = JSON.parse(localStorage.getItem('currentEdit'));

    if (currentEdit) {
        console.log('Thông tin sản phẩm đang chỉnh sửa:', currentEdit);

        // Hiển thị dữ liệu sản phẩm vào các trường trong form
        document.querySelector('#productName').value = currentEdit.product.name;
        document.querySelector('#productPrice').value = currentEdit.product.price;
        document.querySelector('#productStatus').value = currentEdit.product.productStatus;
        document.querySelector('#productImage').value = currentEdit.product.image; // Điền URL hình ảnh vào input
        // (Giả sử hình ảnh là URL trong trường hợp này)

        // Lưu index của sản phẩm để cập nhật sau khi chỉnh sửa
        const productIndex = currentEdit.index;

        // Thêm sự kiện lưu thông tin chỉnh sửa
        document.querySelector('#editProductForm').addEventListener('submit', function (e) {
            e.preventDefault(); // Ngừng hành động mặc định của form

            const updatedName = document.querySelector('#productName').value;
            const updatedPrice = document.querySelector('#productPrice').value;
            const updatedStatus = document.querySelector('#productStatus').value;
            const updatedImage = document.querySelector('#productImage').value;
            
            // Lấy danh sách sản phẩm từ localStorage
            const products = JSON.parse(localStorage.getItem('product')) || [];
            
            // Cập nhật thông tin sản phẩm tại vị trí được chỉnh sửa
            products[productIndex] = {
                ...products[productIndex],
                name: updatedName,
                price: updatedPrice,
                status: updatedStatus,
                image: updatedImage || products[productIndex].image, // Giữ ảnh cũ nếu không thay đổi
            };
                console.log(products)
            // Lưu lại danh sách sản phẩm vào localStorage
            localStorage.setItem('product', JSON.stringify(products));
            console.log('Sản phẩm đã được cập nhật:', products[productIndex]);

            // Thông báo thành công và chuyển hướng về danh sách sản phẩm
            alert('Cập nhật sản phẩm thành công!');
            window.location.href = 'admin_order_management.html'; // Quay lại trang danh sách sản phẩm
        });
    } else {
        // Nếu không có dữ liệu trong currentEdit
        alert('Không tìm thấy sản phẩm để chỉnh sửa!');
        window.location.href = 'list_product.html'; // Quay lại trang danh sách sản phẩm nếu không có dữ liệu
    }
});
