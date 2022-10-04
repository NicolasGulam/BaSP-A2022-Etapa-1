window.onload = function(){
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var form = document.getElementById('contact-form');
    var inputs = document.querySelectorAll('#contact-form input');
    var selects = document.querySelectorAll('#contact-form select');
    var textAreas = document.querySelectorAll('#contact-form textarea');
    var name = document.getElementById('name')
    var email = document.getElementById('email');
    var area = document.getElementById('area');
    var terms = document.getElementById('terms');
    var message = document.getElementById('message');
    var errorMessageEmail = document.getElementById('form-input-error-email');
    var errorMessageName = document.getElementById('form-input-error-name');
    var errorMessageArea = document.getElementById('form-input-error-area');
    var errorMessageTerms = document.getElementById('form-input-error-terms');
    var errorMessageMessage = document.getElementById('form-input-error-message');
    var nameChecked = false;
    var emailChecked = false;
    var areaChecked = false;
    var termsChecked = false;
    var textChecked = false;
    var success = function(input, error) {
        input.classList.remove('contact-form--error');
        input.classList.add('contact-form--success');
        error.classList.remove('contact-form-message-success-active');
    }
    var error = function(input, error) {
        input.classList.add('contact-form--error');
        input.classList.remove('contact-form--success');
        error.classList.add('contact-form-message-success-active');
    }
    var empty = function(input, error) {
        input.classList.remove('contact-form--error');
        input.classList.remove('contact-form--success');
        error.classList.remove('contact-form-message-success-active');
    }
    function validateForm(e) {
        if (e.target.name == 'name') {
            nameValue = (e.target.value).toLowerCase();
            for (var i = 0; i < e.target.value.length;i++) {
                if (nameValue.length > 3 && nameValue.charCodeAt(i) >= 97 && nameValue.charCodeAt(i) <= 122) {
                    success(name, errorMessageName);
                    nameChecked = true;
                } else {
                    error(name, errorMessageName);
                    break;
                }
            };
            if (nameValue == 0) {
                empty(name, errorMessageName);
                nameChecked = false;
            }
        } else if (e.target.name == 'email') {
            if (emailExpression.test(e.target.value)) {
                success(email, errorMessageEmail);
                emailChecked = true;
            } else if (e.target.value.length == 0) {
                empty(email, errorMessageEmail);
            } else {
                error(email, errorMessageEmail);
            }
        } else if (e.target.name == 'message') {
            messageValue = (e.target.value).toLowerCase();
            for (var i = 0; i < e.target.value.length;i++) {
                if (messageValue.length >= 3 && ((messageValue.charCodeAt(i) >= 48 && 
                messageValue.charCodeAt(i) <= 57) || (messageValue.charCodeAt(i) >= 97 && 
                messageValue.charCodeAt(i) <= 122))) {
                    success(message, errorMessageMessage);
                    textChecked = true;
                } else {
                    error(message, errorMessageMessage);
                    break;
                }
            };
            if (messageValue == 0){
                empty(message, errorMessageMessage);
                textChecked = false;
            }
        };
    };
    inputs.forEach(function(input){
        input.addEventListener('keyup', validateForm);
        input.addEventListener('blur', validateForm);
    });
    selects.forEach(function(select){
        select.addEventListener('keyup', validateForm);
        select.addEventListener('blur', validateForm);
    });
    textAreas.forEach(function(textarea){
        textarea.addEventListener('keyup', validateForm);
        textarea.addEventListener('blur', validateForm);
    });
    function submitFunction(e){
        e.preventDefault();
        if (nameChecked && emailChecked && textChecked) {
            alert('The name is: ' + name.value + '\n' + 'The email is: ' + email.value + '\n' + 
            'The area selected is: ' + area.value + '\n' + 'The message is: ' + message.value);
            form.reset();
            document.getElementById('contact-form-message-success').classList.add
            ('contact-form-message-success-active');
            document.getElementById('contact-form-message').classList.remove('contact-form-message-error-active');
            name.classList.remove('contact-form--success');
            email.classList.remove('contact-form--success');
            message.classList.remove('contact-form--success');
            nameChecked = false;
            emailChecked = false;
            areaChecked = false;
            termsChecked = false;
            textChecked = false;
            setTimeout(deleteMessage, 3000);
            function deleteMessage() {
                document.getElementById('contact-form-message-success').classList.remove
                ('contact-form-message-success-active');
            }
        } else {
            document.getElementById('contact-form-message').classList.add('contact-form-message-error-active');
            if (!name.classList.contains('contact-form--success')) {
                name.classList.add('contact-form--error');
            }
            if (!email.classList.contains('contact-form--success')) {
                email.classList.add('contact-form--error');
            }
            if (!message.classList.contains('contact-form--success')) {
                message.classList.add('contact-form--error');
            }
            
        }
    }
    form.addEventListener('submit', submitFunction);
};