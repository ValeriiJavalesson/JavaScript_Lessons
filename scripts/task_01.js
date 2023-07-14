function sendDataByGetMethod() {
    var userData = {
        userLastName: document.getElementById('userLastName').value,
        userFirstName: document.getElementById('userFirstName').value,
        userAge: document.getElementById('userAge').value,
        userAddress: document.getElementById('userAddress').value
    };
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/formGet?LastName=" + userData.userLastName + "&FirstName=" + userData.userFirstName +
        "&Age=" + userData.userAge + "&Address=" + userData.userAddress);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send();
    clearFields();
}

function sendDataByPostMethod() {
    var userData = {
        LastName: document.getElementById('userLastName').value,
        FirstName: document.getElementById('userFirstName').value,
        Age: document.getElementById('userAge').value,
        Address: document.getElementById('userAddress').value
    };
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/formPost");
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(userData));
    clearFields();
}

function checkSend() {

    let userLastName = document.getElementById('userLastName').value;
    let userFirstName = document.getElementById('userFirstName').value;
    let userAddress = document.getElementById('userAddress').value;
    if (userLastName.length > 1 && userFirstName.length > 1 && checkAge() && userAddress.length > 1) {
        document.getElementById('sendDataByGet').removeAttribute('disabled');
        document.getElementById('sendDataByPost').removeAttribute('disabled');
    } else {
        document.getElementById('sendDataByGet').setAttribute('disabled', '');
        document.getElementById('sendDataByPost').setAttribute('disabled', '');
    }
}

function checkAge() {
    let element = document.getElementById('userAge');
    let alertMessageElement = document.getElementById('userAgeMessage');
    if (!isNaN(element.value)) {
        alertMessageElement.innerHTML = 'Вік має бути від 1 до 100';
    } else alertMessageElement.innerHTML = 'Введіць числове значення';
    if (element.value.length > 0) {
        if (element.value > 0 && element.value <= 100) {
            element.classList.add('noError');
            element.classList.remove('error');
            alertMessageElement.classList.remove('alert');
            return true;
        } else {
            element.classList.add('error');
            element.classList.remove('noError');
            alertMessageElement.classList.add('alert');
            return false;
        }
    } else {
        element.classList.remove('error', 'noError', 'alert');
        return false;
    }
}
function checkInput() {
    let elements = [document.getElementById('userLastName'),
    document.getElementById('userFirstName'),
    document.getElementById('userAddress')];
    let alertMessageElements = [document.getElementById('userLastNameMessage'),
    document.getElementById('userFirstNameMessage'),
    document.getElementById('userAddressMessage')];
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].value.length > 1) {
            elements[i].classList.add('noError');
            elements[i].classList.remove('error');
            alertMessageElements[i].classList.remove('alert');
        } else if (elements[i].value.length == 0) {
            elements[i].classList.remove('error', 'noError');
            alertMessageElements[i].classList.remove('alert');
        } else {
            elements[i].classList.add('error');
            elements[i].classList.remove('noError');
            alertMessageElements[i].classList.add('alert');

        }
    }
}

function clearFields() {
    document.getElementById('userLastName').value = '';
    document.getElementById('userFirstName').value = '';
    document.getElementById('userAge').value = '';
    document.getElementById('userAddress').value = '';
    checkSend();
    checkInput();
    checkAge();
}


