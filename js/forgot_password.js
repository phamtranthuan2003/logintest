let currentStep = 1; // Bước hiện tại trong quy trình

function nextStep() {
    const title = document.getElementById("title"); // Lấy tiêu đề
    const content = document.getElementById("content"); // Lấy nội dung
    const form = document.getElementById("form"); // Lấy biểu mẫu

    if (currentStep === 1) {
        // Chuyển sang bước nhập mã OTP
        title.innerText = "Xác nhận OTP"; // Thay đổi tiêu đề thành "Xác nhận OTP"
        content.innerText = "Vui lòng nhập mã OTP đã được gửi đến email của bạn"; // Nội dung thông báo
        form.innerHTML = `
            <form action="#" class="forgot-password-form" id="form">
                <input type="number" id="otp" class="email" placeholder="Nhập OTP"> <!-- Trường nhập mã OTP -->
            </form>
        `;
        currentStep++; // Tăng bước lên 2
    } else if (currentStep === 2) {
        // Chuyển sang bước đổi mật khẩu
        title.innerText = "Đổi mật khẩu"; // Thay đổi tiêu đề thành "Đổi mật khẩu"
        content.innerText = ""; // Xóa nội dung thông báo
        form.innerHTML = `
            <form action="#" class="forgot-password-form" id="form">
                <label for="password">Mật khẩu</label>
                <input type="password" id="password" class="email" placeholder="Nhập mật khẩu"> <!-- Trường nhập mật khẩu -->

                <label for="re-password">Nhập lại mật khẩu</label>
                <input type="password" id="re-password" class="email" placeholder="Nhập lại mật khẩu"> <!-- Trường nhập lại mật khẩu -->
            </form>
        `;
        currentStep++; // Tăng bước lên 3
    }
}

function onClickConfirm() {
    if (currentStep < 3) {
        nextStep(); // Nếu chưa hoàn tất quy trình, chuyển sang bước tiếp theo
    } else {
        console.log('Chuyển đến màn hình Đăng nhập');
        window.location.href = 'login.html'; // Chuyển hướng đến trang "login.html"
        currentStep = 1; // Đặt lại bước về 1 để bắt đầu lại quy trình
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const btnConfirm = document.getElementById('btn-confirm');


    btnConfirm.addEventListener('click', function (event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định

        const passwordField = document.getElementById('password');
        const repasswordField = document.getElementById('re-password');

        if (!passwordField || !repasswordField) {
            console.error('Không tìm thấy các trường nhập mật khẩu.');
            return; // Kết thúc nếu không tìm thấy trường nhập liệu
        }

        const password = passwordField.value.trim();
        const repassword = repasswordField.value.trim();

        if (!password || !repassword) {
            alert('Vui lòng điền mật khẩu');
        } else if (password === repassword) {
            // Lưu mật khẩu vào localStorage
            localStorage.setItem('userPassword', password);

            alert('Mật khẩu của bạn đã được cập nhật');
            window.location.href = 'login.html'; // Chuyển hướng đến trang đăng nhập
        } else {
            alert('Mật khẩu nhập không trùng khớp');
        }
    });
});

