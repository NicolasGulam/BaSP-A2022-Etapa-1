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
    var success = function(input, error) {
        input.classList.remove('form--error');
        input.classList.add('form--success');
        error.classList.remove('form-message-active');
    }
    var error = function(input, error) {
        input.classList.add('form--error');
        input.classList.remove('form--success');
        error.classList.add('form-message-active');
    }
    var empty = function(input, error) {
        input.classList.remove('form--error');
        input.classList.remove('form--success');
        error.classList.remove('form-message-active');
    }
    var hasLetters = function(input) {
        for (var i = 0; i < input.length; i++) {
            if ((input.charCodeAt(i) >= 97 && input.charCodeAt(i) <= 122) || 
            (input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90)){
            } else {
                return false;
            };
        };
        return true;
    };
    var hasNumbers = function(input) {
        for (var i = 0; i < input.length; i++) {
            if (input.charCodeAt(i) >= 48 && input.charCodeAt(i) <= 57) {
            } else {
                return false;
            };
        };
        return true;
    };
    var validateForm = function(e) {
        if (e.target.name == 'email') {
            if (emailExpression.test(e.target.value)) {
                success(email, errorMessageEmail);
                emailChecked = true;
            } else if (e.target.value.length == 0) {
                empty(email, errorMessageEmail);
            } else {
                error(email, errorMessageEmail);
            }
        } else if (e.target.name == 'password') {
            passValue = e.target.value;
            if (hasLetters(passValue) || hasNumbers(passValue) || passValue.length < 8) {
                error(password, errorMessagePass);
            } else {
                success(password, errorMessagePass);
                passChecked = true;
            };
            if (passValue.length == 0) {
                empty(password, errorMessagePass);
            };
        };
    };
    inputs.forEach(function(input){
        input.addEventListener('keyup', validateForm);
        input.addEventListener('blur', validateForm);
    });
    function submitFunction(e){
        e.preventDefault();
        if (emailChecked && passChecked) {
            var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login?email=' + email.value + '&password=' + 
            password.value;
            fetch(url)
            .then(function(request){
                return request.json();
            })
            .then(function(data){
                if (data.success) {
                    alert('Success: ' + data.success + '\n' + 'Message: ' + data.msg + '\n' + 'The email is: ' + 
                    email.value + '\n' + 'The password is: ' + password.value);
                    form.reset();
                } else {
                    throw new Error(data.msg)
                }
            })
            .catch(function(error){
                alert(error);
            })
            document.getElementById('form-message-success').classList.add('form-message-success-active');
            document.getElementById('form-message').classList.remove('form-message-error-active');
            password.classList.remove('form--success');
            email.classList.remove('form--success');
            emailChecked = false;
            passChecked = false;
            setTimeout(deleteMessage, 3000);
            function deleteMessage() {
                document.getElementById('form-message-success').classList.remove('form-message-success-active');
            }
        } else {
            document.getElementById('form-message').classList.add('form-message-error-active');
        }
    }
    form.addEventListener('submit', submitFunction);
};