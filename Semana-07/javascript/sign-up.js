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
    var letterValid, numberValid;
    name.value = localStorage.getItem('name');
    surname.value = localStorage.getItem('surname');
    dni.value = localStorage.getItem('dni');
    birthday.value = localStorage.getItem('birthday');
    tel.value = localStorage.getItem('telephone');
    address.value = localStorage.getItem('address');
    location.value = localStorage.getItem('location');
    postal.value = localStorage.getItem('postal');
    email.value = localStorage.getItem('email');
    password.value = localStorage.getItem('password');
    passRepeat.value = localStorage.getItem('confirm password');
    var passValue, passRepeatValue;
    var success = function (input, error) {
        input.classList.remove('sign-up-form--error');
        input.classList.add('sign-up-form--success');
        error.classList.remove('sign-up-form-input-error-active');
    }
    var error = function (input, error) {
        input.classList.add('sign-up-form--error');
        input.classList.remove('sign-up-form--success');
        error.classList.add('sign-up-form-input-error-active');
    }
    var empty = function (input, error) {
        input.classList.remove('sign-up-form--error');
        input.classList.remove('sign-up-form--success');
        error.classList.remove('sign-up-form-input-error-active');
    }
    var hasLetters = function (input) {
        var inputValue = input.value.toLowerCase();
        for (var i = 0; i < inputValue.length; i++) {
            if (inputValue.charCodeAt(i) >= 97 && inputValue.charCodeAt(i) <= 122){
                letterValid = true;
            } else {
                letterValid = false;
                break;
            };
        };
    };
    var hasNumbers = function (input) {
        var inputValue = input.value;
        for (var i = 0; i < inputValue.length; i++) {
            if (inputValue.charCodeAt(i) >= 48 && inputValue.charCodeAt(i) <= 57){
                numberValid = true;
            } else {
                numberValid = false;
                break;
            };
        };
    };
    var hasSpace = function (input) {
        var arrayInput = input.split('');
        for (var i = 0; i < arrayInput.length; i++) {
            if (arrayInput[i] == " ") {
                if (arrayInput[0] == " ") {
                    return false;
                };
                if (arrayInput[i+1] == " ") {
                    return false;
                };
                if (arrayInput[arrayInput.length - 1] == " ") {
                    return false;
                };
            };
        };
        return true;
    };
    function validateForm(e) {
        if (e.target.name == 'name') {
            nameValue = (e.target.value).toLowerCase();
            for (var i = 0; i < e.target.value.length;i++) {
                if (nameValue.length > 3 && nameValue.charCodeAt(i) >= 97 && nameValue.charCodeAt(i) <= 122) {
                    success(name, errorMessageName);
                } else {
                    error(name, errorMessageName);
                    break;
                }
            };
            if (nameValue == 0) {
                empty(name, errorMessageName);
            }
        } else if (e.target.name == 'surname') {
            surnameValue = (e.target.value).toLowerCase();
            for (var i = 0; i < e.target.value.length;i++) {
                if (surnameValue.length > 3 && surnameValue.charCodeAt(i) >= 97 && 
                surnameValue.charCodeAt(i) <= 122) {
                    success(surname, errorMessageSurname);
                } else {
                    error(surname, errorMessageSurname);
                    break;
                }
            };
            if (surnameValue == 0) {
                empty(surname, errorMessageSurname);
            }
        } else if (e.target.name == 'dni') {
            dniValue = (e.target.value).toLowerCase();
            for (var i = 0; i < e.target.value.length;i++) {
                if (dniValue.length > 7 && dniValue.charCodeAt(i) >= 48 && dniValue.charCodeAt(i) <= 57) {
                    success(dni, errorMessageDni);
                } else {
                    error(dni, errorMessageDni);
                    break;
                }
            };
            if (dniValue == 0) {
                empty(dni, errorMessageDni);
            }
        } else if (e.target.name == 'birthday') {
            birthdayValue = e.target.value;
            var startDate = new Date(birthday.value);
            var today = new Date();
            var isAfter;
            if (startDate.getTime() > today.getTime()) {
                isAfter = false;
            };
            if (birthdayValue == 0) {
                empty(birthday, errorMessageBirthday);
            } else if (isAfter == false) {
                error(birthday, errorMessageBirthday);
            } else{
                success(birthday, errorMessageBirthday);
            }
        } else if (e.target.name == 'tel') {
            telValue = (e.target.value).toLowerCase();
            for (var i = 0; i < e.target.value.length;i++) {
                if (telValue.length === 10 && telValue.charCodeAt(i) >= 48 && telValue.charCodeAt(i) <= 57) {
                    success(tel, errorMessageTel);
                } else {
                    error(tel, errorMessageTel);
                    break;
                }
            };
            if (telValue == 0) {
                empty(tel, errorMessageTel);
            }
        } else if (e.target.name == 'address') {
            addressValue = e.target.value;
            hasLetters(address);
            hasNumbers(address);
            if (letterValid || numberValid && addressValue.length <= 5) {
                error(address, errorMessageAddress);
            } else if (!hasSpace(addressValue)) {
                error(address, errorMessageAddress);
            } else {
                success(address, errorMessageAddress);
            }
            if (!addressValue.includes(' ')) {
                error(address, errorMessageAddress);
            }
            if (addressValue == 0) {
                empty(address, errorMessageAddress);
            }
        } else if (e.target.name == 'location') {
            locationValue = e.target.value;
            hasLetters(location);
            hasNumbers(location);
            if (letterValid || numberValid && locationValue.length <= 3) {
                error(location, errorMessageLocation);
            } else if (!hasSpace(locationValue)) {
                error(location, errorMessageLocation);
            } else {
                success(location, errorMessageLocation);
            }
            if (!locationValue.includes(' ')) {
                error(location, errorMessageLocation);
            }
            if (locationValue == 0) {
                empty(location, errorMessageLocation);
            }
        } else if (e.target.name == 'postal') {
            postalValue = (e.target.value).toLowerCase();
            for (var i = 0; i < e.target.value.length;i++) {
                if ((postalValue.length >= 4 && postalValue.length <= 5) && (postalValue.charCodeAt(i) >= 48 && 
                postalValue.charCodeAt(i) <= 57)) {
                    success(postal, errorMessagePostal);
                } else {
                    error(postal, errorMessagePostal);
                    break;
                }
            };
            if (postalValue == 0) {
                empty(postal, errorMessagePostal);
            }
        } else if (e.target.name == 'email') {
            if (emailExpression.test(e.target.value)) {
                success(email, errorMessageEmail);
            } else if (e.target.value.length == 0){
                empty(email, errorMessageEmail);
            } else {
                error(email, errorMessageEmail);
            }
        } else if (e.target.name == 'password') {
            passValue = (e.target.value).toLowerCase();
            hasLetters(password);
            hasNumbers(password);
            for (var i = 0; i < e.target.value.length;i++) {
                if (letterValid || numberValid || passValue.length < 8) {
                    error(password, errorMessagePass);
                } else {
                    success(password, errorMessagePass);
                };
                if (passValue.length == 0) {
                    empty(password, errorMessagePass);
                };
            };
            if (passValue.length == 0) {
                empty(password, errorMessagePass);
            };
        } else if (e.target.name == 'pass-repeat') {
            passRepeatValue = (e.target.value).toLowerCase();
            hasLetters(passRepeat);
            hasNumbers(passRepeat);
            for (var i = 0; i < e.target.value.length;i++) {
                if (letterValid || numberValid || passRepeatValue.length <= 8) {
                    error(passRepeat, errorMessagePassRepeat);
                } else {
                    success(passRepeat, errorMessagePassRepeat);
                    errorMessagePassRepeat2.classList.remove('sign-up-form-input-error-active');
                    if (passValue == passRepeatValue) {
                        success(password, errorMessagePass);
                        success(passRepeat, errorMessagePassRepeat);
                    } else {
                        passRepeat.classList.add('sign-up-form--error');
                        error(password, errorMessagePassRepeat2);
                    }
                };
            };
            if (passRepeatValue.length == 0) {
                empty(passRepeat, errorMessagePassRepeat);
            };
        };
    };
    inputs.forEach(function(input){
        input.addEventListener('keyup', validateForm);
        input.addEventListener('blur', validateForm);
    });
    function submitFunction(e){
        e.preventDefault();
        var year = birthday.value.substring(0, birthday.value.indexOf('-'));
        var month = birthday.value.substring(birthday.value.indexOf('-') + 1, birthday.value.indexOf('-') + 3);
        var day = birthday.value.substring(birthday.value.indexOf('-') + 4, birthday.value.indexOf('-') + 
        birthday.value.length);
        var birthdayArr = [month, day, year];
        var birthdayReverted = birthdayArr.join('/');
        var url = "https://basp-m2022-api-rest-server.herokuapp.com/signup?name=" + name.value + "&lastName=" + 
        surname.value + "&dni=" + dni.value + "&dob=" + birthdayReverted + "&phone=" + tel.value + 
        "&address=" + address.value + "&city=" + location.value + "&zip=" + postal.value + "&email=" 
        + email.value + "&password=" + password.value;
        fetch(url)
        .then(function(request){
            return request.json();
        })
        .then(function(data){
            if (data.success) {
                alert('Success: ' + data.success + '\n' + 'Message: ' + data.msg + '\n' + 'The name is: ' + 
                name.value + '\n' + 'The surname is: ' + surname.value + '\n' + 'The dni is: ' + dni.value + '\n' + 
                'The birthday is: ' + birthdayReverted + '\n' + 'The telephone number is: ' + tel.value + 
                '\n' + 'The address is: ' + address.value + '\n' + 'The location is: ' + location.value + '\n' + 
                'The postal is: ' + postal.value + '\n' + 'The email is: ' + email.value + '\n' + 
                'The password is: ' + password.value + '\n' + 'The password repeated is: ' + passRepeat.value);
                localStorage.setItem('name', name.value);
                localStorage.setItem('surname', surname.value);
                localStorage.setItem('dni', dni.value);
                localStorage.setItem('birthday', birthday.value);
                localStorage.setItem('telephone', tel.value);
                localStorage.setItem('address', address.value);
                localStorage.setItem('location', location.value);
                localStorage.setItem('postal', postal.value);
                localStorage.setItem('email', email.value);
                localStorage.setItem('password', password.value);
                localStorage.setItem('confirm password', passRepeat.value);
                form.reset();
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
            } else {
                var errors = [];
                for (let i = 0; i < data.errors.length; i++) {
                    errors += '\n' + data.errors[i].msg;
                }
                inputs.forEach(function(input){
                    if (!input.classList.contains('sign-up-form--success')) {
                        input.classList.add('sign-up-form--error');
                    }
                });
                throw new Error(errors);
            }
        })
        .catch(function(error){
            alert(error);
        })
        document.getElementById('sign-up-form-message-success').classList.add
        ('sign-up-form-message-success-active');
        document.getElementById('sign-up-form-message').classList.remove('sign-up-form-message-error-active');
        setTimeout(deleteMessage, 3000);
        function deleteMessage() {
            document.getElementById('sign-up-form-message-success').classList.remove
            ('sign-up-form-message-success-active');
        }
    }
    form.addEventListener('submit', submitFunction);
};