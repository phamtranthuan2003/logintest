let currentStep = 1;

function nextStep() {
    const title = document.getElementById("title");
    const content = document.getElementById("content");
    const form = document.getElementById("form");

    if (currentStep === 1) {
        // Chuyển sang màn nhập mã OTP
        title.innerText = "Xác nhận OTP";
        content.innerText = "Vui lòng nhập mã OTP đã được gửi đến email của bạn";
        form.innerHTML = `
            <form action="#" class="forgot-password-form" id="form">
                <input type="number" id="otp" class="email" placeholder="Nhập OTP">

            </form>
        `;
        currentStep++;
    } else if (currentStep === 2) {
        // Chuyển sang màn đổi mật khẩu
        title.innerText = "Đổi mật khẩu";
        content.innerText = "";
        form.innerHTML = `
            <form action="#" class="forgot-password-form" id="form">
                <label for="password">Mật khẩu</label>
                <input type="password" id="password" class="email" placeholder="Nhập mật khẩu">

                <label for="re-password">Nhập lại mật khẩu</label>
                <input type="re-password" id="re-password" class="email" placeholder="Nhập lại mật khẩu">
            </form>
            
        `;
        currentStep++;
    }

}

function onClickConfirm() {
    if (currentStep<3) {
        nextStep();
    } else {
        console.log('Go to Login Screen');
        
        window.location.href = 'login.html'

        currentStep = 1;
    }
}