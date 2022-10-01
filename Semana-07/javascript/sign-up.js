window.onload = function(){
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var form = document.getElementById('sign-up');
    var inputs = document.querySelectorAll('#sign-up input');
    var name = document.getElementById('name');
    var surname = document.getElementById('surname');
    var dni = document.getElementById('dni');
    var birthday = document.getElementById('birthday');
    var tel = document.getElementById('tel');
    var address = document.getElementById('address');
    var location = document.getElementById('location');
    var postal = document.getElementById('postal');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var passRepeat = document.getElementById('pass-repeat');
    var errorMessageName = document.getElementById('form-input-error-name');
    var errorMessageSurname = document.getElementById('form-input-error-surname');
    var errorMessageDni = document.getElementById('form-input-error-dni');
    var errorMessageBirthday = document.getElementById('form-input-error-birthday');
    var errorMessageTel = document.getElementById('form-input-error-tel');
    var errorMessageAddress = document.getElementById('form-input-error-address');
    var errorMessageLocation = document.getElementById('form-input-error-location');
    var errorMessagePostal = document.getElementById('form-input-error-postal');
    var errorMessageEmail = document.getElementById('form-input-error-email');
    var errorMessagePass = document.getElementById('form-input-error-pass');
    var errorMessagePassRepeat = document.getElementById('form-input-error-pass-repeat');
    var errorMessagePassRepeat2 = document.getElementById('form-input-error-pass-repeat-2');
    var nameChecked = false;
    var surnameChecked = false;
    var dniChecked = false;
    var birthdayChecked = false;
    var telChecked = false;
    var addressChecked = false;
    var locationChecked = false;
    var postalChecked = false;
    var emailChecked = false;
    var signUpPassChecked = false;
    var passRepeatChecked = false;
    var passValue, passRepeatValue;
    var Success = function(input, error, state) {
        input.classList.remove('sign-up-form--error');
        input.classList.add('sign-up-form--success');
        error.classList.remove('sign-up-form-input-error-active');
        state = true;
    }
    var Error = function(input, error, state) {
        input.classList.add('sign-up-form--error');
        input.classList.remove('sign-up-form--success');
        error.classList.add('sign-up-form-input-error-active');
        state = false;
    }
    var Empty = function(input, error, state) {
        input.classList.remove('sign-up-form--error');
        input.classList.remove('sign-up-form--success');
        error.classList.remove('sign-up-form-input-error-active');
        state = false;
    }
    function validateForm(e) {
        if (e.target.name == 'name') {
            nameValue = (e.target.value).toLowerCase();
            for (var i = 0; i < e.target.value.length;i++) {
                if (nameValue.length > 3 && nameValue.charCodeAt(i) >= 97 && nameValue.charCodeAt(i) <= 122) {
                    Success(name, errorMessageName, nameChecked);
                } else {
                    Error(name, errorMessageName, nameChecked);
                    break;
                }
            };
            if (nameValue == 0) {
                Empty(name, errorMessageName, nameChecked);
            }
        } else if (e.target.name == 'surname') {
            surnameValue = (e.target.value).toLowerCase();
            for (var i = 0; i < e.target.value.length;i++) {
                if (surnameValue.length > 3 && surnameValue.charCodeAt(i) >= 97 && 
                surnameValue.charCodeAt(i) <= 122) {
                    Success(surname, errorMessageSurname, surnameChecked);
                } else {
                    Error(surname, errorMessageSurname, surnameChecked);
                    break;
                }
            };
            if (surnameValue == 0) {
                Empty(surname, errorMessageSurname, surnameChecked);
            }
        } else if (e.target.name == 'dni') {
            dniValue = (e.target.value).toLowerCase();
            for (var i = 0; i < e.target.value.length;i++) {
                if (dniValue.length > 7 && dniValue.charCodeAt(i) >= 48 && dniValue.charCodeAt(i) <= 57) {
                    Success(dni, errorMessageDni, dniChecked);
                } else {
                    Error(dni, errorMessageDni, dniChecked);
                    break;
                }
            };
            if (dniValue == 0) {
                Empty(dni, errorMessageDni, dniChecked);
            }
        } else if (e.target.name == 'birthday') {
            birthdayValue = e.target.value;
            if (birthdayValue == 0) {
                Empty(birthday, errorMessageBirthday, birthdayChecked);
            } else{
                Success(birthday, errorMessageBirthday, birthdayChecked);
            }
        } else if (e.target.name == 'tel') {
            telValue = (e.target.value).toLowerCase();
            for (var i = 0; i < e.target.value.length;i++) {
                if (telValue.length === 10 && telValue.charCodeAt(i) >= 48 && telValue.charCodeAt(i) <= 57) {
                    Success(tel, errorMessageTel, telChecked);
                } else {
                    Error(tel, errorMessageTel, telChecked);
                    break;
                }
            };
            if (telValue == 0) {
                Empty(tel, errorMessageTel, telChecked);
            }
        } else if (e.target.name == 'address') {
            addressValue = (e.target.value).toLowerCase();
            for (var i = 0; i < e.target.value.length;i++) {
                if (addressValue.length >= 5 && ((addressValue.charCodeAt(i) >= 48 && addressValue.charCodeAt(i) <= 57) 
                || (addressValue.charCodeAt(i) >= 97 && addressValue.charCodeAt(i) <= 122) || 
                addressValue.charCodeAt(i) == 32)) {
                    Success(address, errorMessageAddress, addressChecked);
                } else {
                    Error(address, errorMessageAddress, addressChecked);
                    break;
                }
            };
            if (!addressValue.includes(' ')) {
                Error(address, errorMessageAddress, addressChecked);
            }
            if (addressValue == 0) {
                Empty(address, errorMessageAddress, addressChecked);
            }
        } else if (e.target.name == 'location') {
            locationValue = (e.target.value).toLowerCase();
            for (var i = 0; i < e.target.value.length;i++) {
                if (locationValue.length >= 5 && ((locationValue.charCodeAt(i) >= 48 && 
                locationValue.charCodeAt(i) <= 57) || (locationValue.charCodeAt(i) >= 97 && 
                locationValue.charCodeAt(i) <= 122))) {
                    Success(location, errorMessageLocation, locationChecked);
                } else {
                    Error(location, errorMessageLocation, locationChecked);
                    break;
                }
            };
            if (locationValue == 0) {
                Empty(location, errorMessageLocation, locationChecked);
            }
        } else if (e.target.name == 'postal') {
            postalValue = (e.target.value).toLowerCase();
            for (var i = 0; i < e.target.value.length;i++) {
                if ((postalValue.length >= 4 && postalValue.length <= 5) && (postalValue.charCodeAt(i) >= 48 && 
                postalValue.charCodeAt(i) <= 57)) {
                    Success(postal, errorMessagePostal, postalChecked);
                } else {
                    Error(postal, errorMessagePostal, postalChecked);
                    break;
                }
            };
            if (postalValue == 0) {
                Empty(postal, errorMessagePostal, postalChecked);
            }
        } else if (e.target.name == 'email') {
            if (emailExpression.test(e.target.value)) {
                Success(email, errorMessageEmail, emailChecked);
            } else if (e.target.value.length == 0){
                Empty(email, errorMessageEmail, emailChecked);
            } else {
                Error(email, errorMessageEmail, emailChecked);
            }
        } else if (e.target.name == 'password') {
            passValue = e.target.value;
            for (var i = 0; i < e.target.value.length;i++) {
                if (passValue.length >= 8 && ((passValue.charCodeAt(i) >= 48 && passValue.charCodeAt(i) <= 57) || 
                (passValue.charCodeAt(i) >= 97 && passValue.charCodeAt(i) <= 122))) {
                    Success(password, errorMessagePass, signUpPassChecked);
                } else {
                    Error(password, errorMessagePass, signUpPassChecked);
                    break;
                };
            };
            if (passValue.length == 0) {
                Empty(password, errorMessagePass, signUpPassChecked);
            };
        } else if (e.target.name == 'pass-repeat') {
            passRepeatValue = e.target.value;
            for (var i = 0; i < e.target.value.length;i++) {
                if (passRepeatValue.length >= 8 && ((passRepeatValue.charCodeAt(i) >= 48 && 
                passRepeatValue.charCodeAt(i) <= 57) || (passRepeatValue.charCodeAt(i) >= 97 && 
                passRepeatValue.charCodeAt(i) <= 122))) {    
                    Success(passRepeat, errorMessagePassRepeat, passRepeatChecked);
                    errorMessagePassRepeat2.classList.remove('sign-up-form-input-error-active');
                        if (passValue == passRepeatValue) {
                            Success(password, errorMessagePassRepeat, signUpPassChecked);
                            Success(passRepeat, errorMessagePassRepeat, passRepeatChecked);
                        } else {
                            passRepeat.classList.add('sign-up-form--error');
                            Error(password, errorMessagePassRepeat2, passRepeatChecked);
                        }
                } else {
                    Error(passRepeat, errorMessagePassRepeat, passRepeatChecked);
                    break;
                };
            };
            if (passRepeatValue.length == 0) {
                Empty(passRepeat, errorMessagePassRepeat, passRepeatChecked);
            };
        };
    };
    inputs.forEach(function(input){
        input.addEventListener('keyup', validateForm);
        input.addEventListener('blur', validateForm);
    });
    function submitFunction(e){
        e.preventDefault();
        console.log(nameChecked, surnameChecked, dniChecked, birthdayChecked, telChecked 
        , addressChecked, locationChecked, postalChecked, emailChecked, signUpPassChecked, passRepeatChecked);
        if (nameChecked && surnameChecked && dniChecked && birthdayChecked && telChecked && addressChecked && 
            locationChecked && postalChecked && emailChecked && signUpPassChecked && passRepeatChecked) {
            alert(' The name is: ' + name.value + '\n' + ' The surname is: ' + surname.value + '\n' + ' The dni is: ' + 
            dni.value + '\n' + ' The birthday is: ' + birthday.value + '\n' + ' The telephone number is: ' + tel.value + 
            '\n' + ' The address is: ' + address.value + '\n' + ' The location is: ' + location.value + '\n' + 
            ' The postal is: ' + postal.value + '\n' + ' The email is: ' + email.value + '\n' + ' The password is: ' + 
            password.value);
            form.reset();
            document.getElementById('sign-up-form-message-success').classList.add
            ('sign-up-form-message-success-active');
            document.getElementById('sign-up-form-message').classList.remove('sign-up-form-message-error-active');
            name.classList.remove('sign-up-form--success');
            surname.classList.remove('sign-up-form--success');
            dni.classList.remove('sign-up-form--success');
            birthday.classList.remove('sign-up-form--success');
            tel.classList.remove('sign-up-form--success');
            address.classList.remove('sign-up-form--success');
            location.classList.remove('sign-up-form--success');
            postal.classList.remove('sign-up-form--success');
            passRepeat.classList.remove('sign-up-form--success');
            password.classList.remove('sign-up-form--success');
            email.classList.remove('sign-up-form--success');
            setTimeout(deleteMessage, 5000);
            function deleteMessage() {
                document.getElementById('sign-up-form-message-success').classList.remove
                ('sign-up-form-message-success-active');
            }
        } else {
            document.getElementById('sign-up-form-message').classList.add('sign-up-form-message-error-active');
        }
    }
    form.addEventListener('submit', submitFunction);
};