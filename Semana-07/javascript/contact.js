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
    var errorMessageMessage = document.getElementById('form-input-error-text');
    var nameChecked, emailChecked, areaChecked, termsChecked, textChecked;

    function validateForm(e) {
        if (e.target.name == 'name') {
            nameValue = (e.target.value).toLowerCase();
            for (var i = 0; i < e.target.value.length;i++) {
                if (nameValue.length > 3 && nameValue.charCodeAt(i) >= 97 && nameValue.charCodeAt(i) <= 122) {
                    name.classList.remove('contact-form--error');
                    name.classList.add('contact-form--success');
                    errorMessageName.classList.remove('contact-form-input-error-active');
                    nameChecked = true;
                } else {
                    name.classList.add('contact-form--error');
                    name.classList.remove('contact-form--success');
                    errorMessageName.classList.add('contact-form-input-error-active');
                    nameChecked = false;
                    break;
                }
            };
            if (nameValue == 0) {
                name.classList.remove('contact-form--error');
                name.classList.remove('contact-form--success');
                errorMessageName.classList.remove('contact-form-input-error-active');
                nameChecked = false;
            }
        } else if (e.target.name == 'email') {
            if (emailExpression.test(e.target.value)) {
                email.classList.remove('contact-form--error');
                email.classList.add('contact-form--success');
                errorMessageEmail.classList.remove('contact-form-input-error-active');
                emailChecked = true;
            } else if (e.target.value.length == 0) {
                email.classList.remove('contact-form--error');
                email.classList.remove('contact-form--success');
                errorMessageEmail.classList.remove('contact-form-input-error-active');
                emailChecked = false;
            } else {
                email.classList.add('contact-form--error');
                email.classList.remove('contact-form--success');
                errorMessageEmail.classList.add('contact-form-input-error-active');
                emailChecked = false;
            }
        } else if (e.target.name == 'message') {
            messageValue = (e.target.value).toLowerCase();
            for (var i = 0; i < e.target.value.length;i++) {
                if (messageValue.length >= 3 && ((messageValue.charCodeAt(i) >= 48 && 
                messageValue.charCodeAt(i) <= 57) || (messageValue.charCodeAt(i) >= 97 && 
                messageValue.charCodeAt(i) <= 122))) {
                    message.classList.remove('contact-form--error');
                    message.classList.add('contact-form--success');
                    errorMessageMessage.classList.remove('contact-form-input-error-active');
                    textChecked = true;
                } else {
                    message.classList.add('contact-form--error');
                    message.classList.remove('contact-form--success');
                    errorMessageMessage.classList.add('contact-form-input-error-active');
                    textChecked = false;
                    break;
                }
            };
            if (messageValue == 0){
                message.classList.remove('contact-form--error');
                message.classList.remove('contact-form--success');
                errorMessageMessage.classList.remove('contact-form-input-error-active');
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
            alert(' The name is: ' + name.value + '\n' + email.value + '\n' + ' The area selected is: ' + 
            area.value + '\n' + ' The area selected is: ' + area.value + '\n' + ' The message is: ' + message.value);
            form.reset();
            document.getElementById('contact-form-message-success').classList.add
            ('contact-form-message-success-active');
            document.getElementById('contact-form-message').classList.remove('contact-form-message-error-active');
            name.classList.remove('contact-form--success');
            email.classList.remove('contact-form--success');
            message.classList.remove('contact-form--success');
            setTimeout(deleteMessage, 5000);
            function deleteMessage() {
                document.getElementById('contact-form-message-success').classList.remove
                ('contact-form-message-success-active');
            }
        } else {
            document.getElementById('contact-form-message').classList.add('contact-form-message-error-active');
        }
    }
    form.addEventListener('submit', submitFunction);
};