function submitPhoneNumber() {
    const phone = document.getElementById('phone').value;
    const responseMessage = document.getElementById('response-message');

    if (!phone) {
        responseMessage.style.color = 'red';
        responseMessage.textContent = "Vui lòng nhập số điện thoại của bạn.";
        return;
    }

    // Chỉ kiểm tra định dạng số điện thoại đơn giản (có thể cải tiến thêm)
    const phoneRegex = /^[0-9]{10,11}$/;
    if (!phoneRegex.test(phone)) {
        responseMessage.style.color = 'red';
        responseMessage.textContent = "Số điện thoại không hợp lệ. Vui lòng nhập lại.";
        return;
    }

    // Hiển thị thông báo thành công
    responseMessage.style.color = 'green';
    responseMessage.textContent = "Cảm ơn bạn! Chúng tôi sẽ liên hệ với bạn ngay.";
    
    // Có thể thực hiện gửi số điện thoại đến server ở đây
    // Ví dụ: fetch('/api/save-phone', { method: 'POST', body: JSON.stringify({ phone }) });
}
