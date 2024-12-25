// Hàm kiểm tra và nhận ưu đãi
function claimOffer() {
    const emailField = document.getElementById('email').value;
    const email = prompt("Vui lòng nhập email để nhận ưu đãi:");

    // Kiểm tra nếu người dùng không nhập email
    if (!email) {
        alert("Email là bắt buộc!");
        return;
    }

    // Lấy danh sách người dùng từ localStorage
    const users = JSON.parse(localStorage.getItem('user'));

    // Kiểm tra xem email có tồn tại trong danh sách người dùng không
    const user = users.find(users => users.email === email);

    if (!user) {
        // Nếu email không tồn tại trong danh sách người dùng
        alert("Email này chưa đăng ký. Bạn không thể nhận ưu đãi.");
    } else {
        // Kiểm tra xem email đã nhận ưu đãi chưa
        const promotion = JSON.parse(localStorage.getItem('promotion')) || [];

        if (promotion.includes(email)) {
            alert("Email này đã nhận ưu đãi rồi. Bạn chỉ được nhận 1 lần.");
        } else {
            // Nếu email chưa nhận ưu đãi, thêm vào danh sách và lưu lại trong localStorage
            promotion.push(email);
            localStorage.setItem('promotion', JSON.stringify(promotion));
            alert("Chúc mừng! Bạn đã nhận ưu đãi thành công.");
        }
    }
}
