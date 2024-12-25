function scrollToSection(sectionId) {
    // Ẩn tất cả các phần
    document.querySelectorAll('.container').forEach(section => {
        section.style.display = 'none';
    });
    // Hiện phần được chọn
    document.getElementById(sectionId).style.display = 'block';
    
}

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(productName) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${productName} đã được thêm vào giỏ hàng!`);
}

// Hàm cập nhật số lượng giỏ hàng
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-count').innerText = cart.length;
}

// Hàm xem giỏ hàng
function viewCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Giỏ hàng của bạn đang trống!');
    } else {
        let cartDetails = 'Giỏ hàng của bạn:\n';
        cart.forEach((item, index) => {
            cartDetails += `${index + 1}. ${item.name}\n`;
        });
        alert(cartDetails);
    }
}

// Cập nhật số lượng giỏ hàng khi tải trang
document.addEventListener('DOMContentLoaded', updateCartCount);

