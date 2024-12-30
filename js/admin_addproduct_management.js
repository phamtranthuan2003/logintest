document.addEventListener('DOMContentLoaded', function () {
    // Kiểm tra xem phần tử có tồn tại trước khi gắn sự kiện
    const addButton = document.getElementById('addpd');
    
    if (addButton) {
        addButton.addEventListener('click', function (event) {
            event.preventDefault();  // Ngăn chặn hành động mặc định của sự kiện
            
            const productName = document.getElementById('productName')?.value.trim();
            const productDescription = document.getElementById('productDescription')?.value.trim();
            const productImage = document.getElementById('productImage')?.value.trim();
            const productPrice = document.getElementById('productPrice')?.value.trim();
            const productStatus = document.getElementById('productStatus').value;

            // Kiểm tra các trường nhập liệu
            if (!productName || !productDescription || !productImage || !productPrice || !productStatus) {
                alert('Vui lòng điền đầy đủ thông tin.');
                return;
            }

            const addProduct = {
                name: productName,
                description: productDescription,
                image: productImage,
                price: productPrice,
                status: productStatus,
                
            };

            console.log(addProduct)
            // Lấy danh sách sản phẩm từ localStorage
            const listProduct = JSON.parse(localStorage.getItem('product')) || [];

            // Kiểm tra trùng tên sản phẩm
            const productExists = listProduct.some(product => product.name === addProduct.name);
            if (productExists) {
                alert('Sản phẩm đã tồn tại.');
                return;
            }

            // Thêm sản phẩm mới vào danh sách
            listProduct.push(addProduct);
            localStorage.setItem('product', JSON.stringify(listProduct));

            alert('Thêm sản phẩm thành công!');
            window.location.href = 'admin_order_management.html';  // Chuyển hướng đến trang quản lý đơn hàng
        });
    }
});
