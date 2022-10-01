window.onload = function(){
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var form = document.getElementById('login');
    var inputs = document.querySelectorAll('#login input');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var errorMessageEmail = document.getElementById('form-input-error-email');
    var errorMessagePass = document.getElementById('form-input-error-pass');
    var emailChecked = false;
    var passChecked = false;
    var Success = function(input, error) {
        input.classList.remove('form--error');
        input.classList.add('form--success');
        error.classList.remove('form-message-active');
    }
    var Error = function(input, error) {
        input.classList.add('form--error');
        input.classList.remove('form--success');
        error.classList.add('form-message-active');
    }
    var Empty = function(input, error) {
        input.classList.remove('form--error');
        input.classList.remove('form--success');
        error.classList.remove('form-message-active');
    }
    function validateForm(e) {
        if (e.target.name == 'email') {
            if (emailExpression.test(e.target.value)) {
                Success(email, errorMessageEmail, emailChecked);
                emailChecked = true;
            } else if (e.target.value.length == 0) {
                Empty(email, errorMessageEmail);
            } else {
                Error(email, errorMessageEmail);
            }
        } else if (e.target.name == 'password') {
            passValue = (e.target.value).toLowerCase();
            for (var i = 0; i < e.target.value.length;i++) {
                if (passValue.length >= 8 && ((passValue.charCodeAt(i) >= 48 && passValue.charCodeAt(i) <= 57) || 
                (passValue.charCodeAt(i) >= 97 && passValue.charCodeAt(i) <= 122))) {
                    Success(password, errorMessagePass, passChecked);
                    passChecked = true;
                } else {
                    Error(password, errorMessagePass);
                    break;
                };
            };
            /*if (!passValue.includes(passValue.charCodeAt(i) >= 97 && passValue.charCodeAt(i) <= 122)) {
                Error(password, errorMessagePass);
            }*/
            if (passValue.length == 0) {
                Empty(password, errorMessagePass);
            };
        };
    };
    inputs.forEach(function(input){
        input.addEventListener('keyup', validateForm);
        input.addEventListener('blur', validateForm);
    });
    console.log(emailChecked, passChecked);
    function submitFunction(e){
        e.preventDefault();
        if (emailChecked && passChecked) {
            alert(' The email is: ' + email.value + '\n' + ' The password is: ' + password.value);
            document.getElementById('form-message-success').classList.add('form-message-success-active');
            document.getElementById('form-message').classList.remove('form-message-error-active');
            password.classList.remove('form--success');
            email.classList.remove('form--success');
            emailChecked = false;
            passChecked = false;
            form.reset();
            setTimeout(deleteMessage, 5000);
            function deleteMessage() {
                document.getElementById('form-message-success').classList.remove('form-message-success-active');
            }
        } else {
            document.getElementById('form-message').classList.add('form-message-error-active');
        }
    }
    form.addEventListener('submit', submitFunction);
};