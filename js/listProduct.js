document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Sản phẩm đã được thêm vào giỏ hàng!');
        });
    });
});
