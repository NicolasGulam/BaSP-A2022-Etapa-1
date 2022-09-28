window.onload = function(){
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var form = document.getElementById('login');
    var inputs = document.querySelectorAll('#login input');
    var email = document.getElementById('email');
    var password = document.getElementById('password')
    var errorMessageEmail = document.getElementById('form-input-error-email');
    var errorMessagePass = document.getElementById('form-input-error-pass');
    var emailChecked;
    var passChecked;

    function validarFormulario(e) {
        if (e.target.name == 'email') {
            if (emailExpression.test(e.target.value)) {
                email.classList.remove('form--error');
                email.classList.add('form--success');
                errorMessageEmail.classList.remove('form-message-active');
                emailChecked = true;
            } else if(e.target.value.length == 0){
                email.classList.remove('form--error');
                email.classList.remove('form--success');
                errorMessageEmail.classList.remove('form-message-active');
                emailChecked = false;
            } else {
                email.classList.add('form--error');
                email.classList.remove('form--success');
                errorMessageEmail.classList.add('form-message-active');
                emailChecked = false;
            }
        } else if (e.target.name == 'password') {
            passValue = (e.target.value).toLowerCase();
            for(var i = 0; i < e.target.value.length;i++) {
                if((passValue.charCodeAt(i) >= 48 && passValue.charCodeAt(i) <= 57) || (passValue.charCodeAt(i) >= 97 && 
                passValue.charCodeAt(i) <= 122)) {
                    password.classList.remove('form--error');
                    password.classList.add('form--success');
                    errorMessagePass.classList.remove('form-message-active');
                    passChecked = true;
                } else {
                    password.classList.add('form--error');
                    password.classList.remove('form--success');
                    errorMessagePass.classList.add('form-message-active');
                    passChecked = false;
                };
            };
            if (passValue.length == 0) {
                password.classList.remove('form--error');
                password.classList.remove('form--success');
                errorMessagePass.classList.remove('form-message-active');
                passChecked = false;
            };
        };
    };
    inputs.forEach(function(input){
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    });
    function submitFunction(e){
        e.preventDefault();
        if(emailChecked == true && passChecked == true){
            alert(' The email is: ' + email.value + '\n' + ' The password is: ' + password.value);
            form.reset();
            document.getElementById('form-message-success').classList.add('form-message-success-active');
            document.getElementById('form-message').classList.remove('form-message-error-active');
            password.classList.remove('form--success');
            email.classList.remove('form--success');
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