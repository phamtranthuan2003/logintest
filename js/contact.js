document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const notification = document.getElementById('notification');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            showNotification('Vui lòng điền đầy đủ thông tin', false);
        } else {
            showNotification('Tin nhắn của bạn đã được gửi thành công!', true);
            contactForm.reset(); // Reset form sau khi gửi thành công
        }
    });

    function showNotification(message, success) {
        notification.innerText = message;
        notification.style.background = success ? '#4caf50' : '#f44336';
        notification.style.display = 'block';

        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    }
});
