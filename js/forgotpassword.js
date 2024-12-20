document.getElementById('xaccnhann').addEventListener ('click', function () {

    const emailField = document.getElementById('laylaimk').value;

    

    const storedEmail = localStorage.getItem('email');
   
   
    if (emailField === storedEmail ) {

        window.location.href = 'passwordnew.html';
    } else {
        alert("Tài khoản hoặc mật khẩu không đúng!");
    }
    

    });