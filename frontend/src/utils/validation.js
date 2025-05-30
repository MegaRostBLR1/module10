export class Validation {
    static validForm(inputsElement, password = '') {
        let isValid = true;
        let date = {
            nameInputElement: null,
            emailInputElement: null,
            passwordInputElement: null,
            passwordReplaceInputElement: null,
            rememberMeInputElement: null,
        };

        inputsElement.forEach((inputElement) => {
            const parentInputElement = inputElement.closest('.input-block');
            const iconInputElement = inputElement.closest('.form-floating').previousElementSibling;
            let fieldValid = true;

            // Убираем стили для ошибок
            inputElement.classList.remove('invalid');
            if (iconInputElement) iconInputElement.classList.remove('invalid');
            if (parentInputElement && parentInputElement.nextElementSibling) {
                parentInputElement.nextElementSibling.classList.remove('invalid');
            }

            if (inputElement.value === '') {
                fieldValid = false;
            } else {
                if (inputElement.type === 'text') {
                    if (!inputElement.value.match(/^[А-ЯЁ][а-яё]*(?:\s[А-ЯЁ][а-яё]*)+$/)) {
                        fieldValid = false;
                    } else {
                        date.nameInputElement = inputElement.value;
                    }
                }
                if (inputElement.type === 'email') {
                    if (!inputElement.value.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,}$/)) {
                        fieldValid = false;
                    } else {
                        date.emailInputElement = inputElement.value;
                    }
                }
                if (inputElement.type === 'password') {
                    if (!inputElement.value.match(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/) && password === '') {
                        fieldValid = false;
                    } else if (password !== '' && inputElement.value !== password) {
                        fieldValid = false;
                    } else {
                        if (password === '') {
                            date.passwordInputElement = inputElement.value;
                        } else {
                            date.passwordReplaceInputElement = inputElement.value;
                        }
                    }
                }
            }

            if (!fieldValid) {
                inputElement.classList.add('invalid');
                if (iconInputElement) iconInputElement.classList.add('invalid');
                if (parentInputElement && parentInputElement.nextElementSibling) {
                    parentInputElement.nextElementSibling.classList.add('invalid');
                }
                isValid = false;
            }
        });

        return isValid ? date : false;
    }
}