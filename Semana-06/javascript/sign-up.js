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
    var nameChecked, surnameChecked, dniChecked, birthdayChecked, telChecked, addressChecked, locationChecked, 
    postalChecked, emailChecked, signUpPassChecked, passRepeatChecked, passValue, passRepeatValue;


    function validarFormulario(e) {
        if (e.target.name == 'name') {
            nameValue = (e.target.value).toLowerCase();
            for(var i = 0; i < e.target.value.length;i++) {
                if(nameValue.length > 3 && nameValue.charCodeAt(i) >= 97 && nameValue.charCodeAt(i) <= 122) {
                    name.classList.remove('sign-up-form--error');
                    name.classList.add('sign-up-form--success');
                    errorMessageName.classList.remove('sign-up-form-input-error-active');
                    nameChecked = true;
                } else {
                    name.classList.add('sign-up-form--error');
                    name.classList.remove('sign-up-form--success');
                    errorMessageName.classList.add('sign-up-form-input-error-active');
                    nameChecked = false;
                    break;
                }
            };
            if(nameValue == 0){
                name.classList.remove('sign-up-form--error');
                name.classList.remove('sign-up-form--success');
                errorMessageName.classList.remove('sign-up-form-input-error-active');
                nameChecked = false;
            }
        } else if (e.target.name == 'surname') {
            surnameValue = (e.target.value).toLowerCase();
            for(var i = 0; i < e.target.value.length;i++) {
                if(surnameValue.length > 3 && surnameValue.charCodeAt(i) >= 97 && 
                surnameValue.charCodeAt(i) <= 122) {
                    surname.classList.remove('sign-up-form--error');
                    surname.classList.add('sign-up-form--success');
                    errorMessageSurname.classList.remove('sign-up-form-input-error-active');
                    surnameChecked = true;
                } else {
                    surname.classList.add('sign-up-form--error');
                    surname.classList.remove('sign-up-form--success');
                    errorMessageSurname.classList.add('sign-up-form-input-error-active');
                    surnameChecked = false;
                    break;
                }
            };
            if(surnameValue == 0){
                surname.classList.remove('sign-up-form--error');
                surname.classList.remove('sign-up-form--success');
                errorMessageSurname.classList.remove('sign-up-form-input-error-active');
                surnameChecked = false;
            }
        } else if (e.target.name == 'dni') {
            dniValue = (e.target.value).toLowerCase();
            for(var i = 0; i < e.target.value.length;i++) {
                if(dniValue.length > 7 && dniValue.charCodeAt(i) >= 48 && dniValue.charCodeAt(i) <= 57) {
                    dni.classList.remove('sign-up-form--error');
                    dni.classList.add('sign-up-form--success');
                    errorMessageDni.classList.remove('sign-up-form-input-error-active');
                    dniChecked = true;
                } else {
                    dni.classList.add('sign-up-form--error');
                    dni.classList.remove('sign-up-form--success');
                    errorMessageDni.classList.add('sign-up-form-input-error-active');
                    dniChecked = false;
                    break;
                }
            };
            if(dniValue == 0){
                dni.classList.remove('sign-up-form--error');
                dni.classList.remove('sign-up-form--success');
                errorMessageDni.classList.remove('sign-up-form-input-error-active');
                dniChecked = false;
            }
        } else if (e.target.name == 'birthday') {
            birthdayValue = e.target.value;
            if(birthdayValue == 0){
                birthday.classList.add('sign-up-form--error');
                birthday.classList.remove('sign-up-form--success');
                errorMessageBirthday.classList.add('sign-up-form-input-error-active');
                birthdayChecked = false;
            } else{
                birthday.classList.remove('sign-up-form--error');
                birthday.classList.add('sign-up-form--success');
                errorMessageBirthday.classList.remove('sign-up-form-input-error-active');
                birthdayChecked = true;
            }
        } else if (e.target.name == 'tel') {
            telValue = (e.target.value).toLowerCase();
            for(var i = 0; i < e.target.value.length;i++) {
                if(telValue.length === 10 && telValue.charCodeAt(i) >= 48 && telValue.charCodeAt(i) <= 57) {
                    tel.classList.remove('sign-up-form--error');
                    tel.classList.add('sign-up-form--success');
                    errorMessageTel.classList.remove('sign-up-form-input-error-active');
                    telChecked = true;
                } else {
                    tel.classList.add('sign-up-form--error');
                    tel.classList.remove('sign-up-form--success');
                    errorMessageTel.classList.add('sign-up-form-input-error-active');
                    telChecked = false;
                    break;
                }
            };
            if(telValue == 0){
                tel.classList.remove('sign-up-form--error');
                tel.classList.remove('sign-up-form--success');
                errorMessageTel.classList.remove('sign-up-form-input-error-active');
                telChecked = false;
            }
        } else if (e.target.name == 'address') {
            addressValue = (e.target.value).toLowerCase();
            for(var i = 0; i < e.target.value.length;i++) {
                if(addressValue.length >= 5 && ((addressValue.charCodeAt(i) >= 48 && addressValue.charCodeAt(i) <= 57) 
                || (addressValue.charCodeAt(i) >= 97 && addressValue.charCodeAt(i) <= 122) || 
                addressValue.charCodeAt(i) == 32)) {
                    address.classList.remove('sign-up-form--error');
                    address.classList.add('sign-up-form--success');
                    errorMessageAddress.classList.remove('sign-up-form-input-error-active');
                    addressChecked = true;
                } else {
                    address.classList.add('sign-up-form--error');
                    address.classList.remove('sign-up-form--success');
                    errorMessageAddress.classList.add('sign-up-form-input-error-active');
                    addressChecked = false;
                    break;
                }
            };
            if (!addressValue.includes(' ')) {
                address.classList.add('sign-up-form--error');
                address.classList.remove('sign-up-form--success');
                errorMessageAddress.classList.add('sign-up-form-input-error-active');
                addressChecked = false;
            }
            if(addressValue == 0){
                address.classList.remove('sign-up-form--error');
                address.classList.remove('sign-up-form--success');
                errorMessageAddress.classList.remove('sign-up-form-input-error-active');
                addressChecked = false;
            }
        } else if (e.target.name == 'location') {
            locationValue = (e.target.value).toLowerCase();
            for(var i = 0; i < e.target.value.length;i++) {
                if(locationValue.length >= 5 && ((locationValue.charCodeAt(i) >= 48 && 
                locationValue.charCodeAt(i) <= 57) || (locationValue.charCodeAt(i) >= 97 && 
                locationValue.charCodeAt(i) <= 122))) {
                    location.classList.remove('sign-up-form--error');
                    location.classList.add('sign-up-form--success');
                    errorMessageLocation.classList.remove('sign-up-form-input-error-active');
                    locationChecked = true;
                } else {
                    location.classList.add('sign-up-form--error');
                    location.classList.remove('sign-up-form--success');
                    errorMessageLocation.classList.add('sign-up-form-input-error-active');
                    locationChecked = false;
                    break;
                }
            };
            if(locationValue == 0){
                location.classList.remove('sign-up-form--error');
                location.classList.remove('sign-up-form--success');
                errorMessageLocation.classList.remove('sign-up-form-input-error-active');
                locationChecked = false;
            }
        } else if (e.target.name == 'postal') {
            postalValue = (e.target.value).toLowerCase();
            for(var i = 0; i < e.target.value.length;i++) {
                if((postalValue.length >= 4 && postalValue.length <= 5) && (postalValue.charCodeAt(i) >= 48 && 
                postalValue.charCodeAt(i) <= 57)) {
                    postal.classList.remove('sign-up-form--error');
                    postal.classList.add('sign-up-form--success');
                    errorMessagePostal.classList.remove('sign-up-form-input-error-active');
                    postalChecked = true;
                } else {
                    postal.classList.add('sign-up-form--error');
                    postal.classList.remove('sign-up-form--success');
                    errorMessagePostal.classList.add('sign-up-form-input-error-active');
                    postalChecked = false;
                    break;
                }
            };
            if(postalValue == 0){
                postal.classList.remove('sign-up-form--error');
                postal.classList.remove('sign-up-form--success');
                errorMessagePostal.classList.remove('sign-up-form-input-error-active');
                postalChecked = false;
            }
        } else if (e.target.name == 'email') {
            if (emailExpression.test(e.target.value)) {
                email.classList.remove('sign-up-form--error');
                email.classList.add('sign-up-form--success');
                errorMessageEmail.classList.remove('sign-up-form-input-error-active');
                emailChecked = true;
            } else if(e.target.value.length == 0){
                email.classList.remove('sign-up-form--error');
                email.classList.remove('sign-up-form--success');
                errorMessageEmail.classList.remove('sign-up-form-input-error-active');
                emailChecked = false;
            } else {
                email.classList.add('sign-up-form--error');
                email.classList.remove('sign-up-form--success');
                errorMessageEmail.classList.add('sign-up-form-input-error-active');
                emailChecked = false;
            }
        } else if (e.target.name == 'password') {
            passValue = e.target.value;
            for(var i = 0; i < e.target.value.length;i++) {
                if(passValue.length >= 8 && ((passValue.charCodeAt(i) >= 48 && 
                passValue.charCodeAt(i) <= 57) || (passValue.charCodeAt(i) >= 97 && 
                passValue.charCodeAt(i) <= 122))) {
                    password.classList.remove('sign-up-form--error');
                    password.classList.add('sign-up-form--success');
                    errorMessagePass.classList.remove('sign-up-form-input-error-active');
                    signUpPassChecked = true;
                } else {
                    password.classList.add('sign-up-form--error');
                    password.classList.remove('sign-up-form--success');
                    errorMessagePass.classList.add('sign-up-form-input-error-active');
                    signUpPassChecked = false;
                    break;
                };
            };
            if (passValue.length == 0) {
                password.classList.remove('sign-up-form--error');
                password.classList.remove('sign-up-form--success');
                errorMessagePass.classList.remove('sign-up-form-input-error-active');
                signUpPassChecked = false;
            };
        } else if (e.target.name == 'pass-repeat') {
            passRepeatValue = e.target.value;
            for(var i = 0; i < e.target.value.length;i++) {
                if(passRepeatValue.length >= 8 && ((passRepeatValue.charCodeAt(i) >= 48 && 
                passRepeatValue.charCodeAt(i) <= 57) || (passRepeatValue.charCodeAt(i) >= 97 && 
                passRepeatValue.charCodeAt(i) <= 122))) {
                        passRepeat.classList.remove('sign-up-form--error');
                        passRepeat.classList.add('sign-up-form--success');
                        errorMessagePassRepeat.classList.remove('sign-up-form-input-error-active');
                        errorMessagePassRepeat2.classList.remove('sign-up-form-input-error-active');
                        passRepeatChecked = true;
                        if (passValue == passRepeatValue) {
                            password.classList.remove('sign-up-form--error');
                            passRepeat.classList.remove('sign-up-form--error');
                            password.classList.add('sign-up-form--success');
                            passRepeat.classList.add('sign-up-form--success');
                            errorMessagePassRepeat2.classList.remove('sign-up-form-input-error-active');
                            passRepeatChecked = true;
                        } else {
                            password.classList.add('sign-up-form--error');
                            passRepeat.classList.add('sign-up-form--error');
                            errorMessagePassRepeat2.classList.add('sign-up-form-input-error-active');
                            passRepeatChecked = false;
                        }
                } else{
                    passRepeat.classList.add('sign-up-form--error');
                    passRepeat.classList.remove('sign-up-form--success');
                    errorMessagePassRepeat.classList.add('sign-up-form-input-error-active');
                    passRepeatChecked = false;
                    break;
                };
            };
            if (passRepeatValue.length == 0) {
                passRepeat.classList.remove('sign-up-form--error');
                passRepeat.classList.remove('sign-up-form--success');
                errorMessagePass.classList.remove('sign-up-form-input-error-active');
                passRepeatChecked = false;
            };
        };
    };
    inputs.forEach(function(input){
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    });
    function submitFunction(e){
        e.preventDefault();
        if(nameChecked == true && surnameChecked == true && dniChecked == true && birthdayChecked == true && telChecked 
            == true && addressChecked == true && locationChecked == true && postalChecked == true && emailChecked == 
            true && signUpPassChecked == true && passRepeatChecked == true){
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