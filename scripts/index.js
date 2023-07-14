$(document).ready(function () {
    $('form input[id!=userAge]').keyup(checkInputs);
    $('form input[id=userAge]').keyup(checkAge);
    $('#sendDataByGet').click(sendDataByGet);
    $('#sendDataByPost').click(sendDataByPost);
});
function checkInputs() {
    if ($(this).val().length == 0) {
        $(this).attr('title', '');
        $(this).siblings('p').removeClass('alert');
    } else if ($(this).val().length < 2) {
        $(this).attr('title', 'error');
        $(this).siblings('p').addClass('alert');
    } else {
        $(this).attr('title', 'noError');
        $(this).siblings('p').removeClass('alert');
    }
    isReady();
}
function checkAge() {
    if ($(this).val().length == 0) {
        $(this).attr('title', '');
        $(this).siblings('p').removeClass('alert');
    } else if (isNaN($(this).val())) {
        $(this).attr('title', 'error');
        $(this).siblings('p').text('Введіць числове значення');
        $(this).siblings('p').addClass('alert');
    } else {
        if ($(this).val() >= 1 && $(this).val() <= 100) {
            $(this).attr('title', 'noError');
            $(this).siblings('p').text('Введіць числове значення');
            $(this).siblings('p').removeClass('alert');
        } else {
            $(this).attr('title', 'error');
            $(this).siblings('p').text('Вік має бути від 1 до 100');
            $(this).siblings('p').addClass('alert');
        }
    }
    isReady();
}

function isReady() {
    let n = $('form input[title=noError]').length;
    if (n == 4) $('form button').prop('disabled', false);
    else $('form button').prop('disabled', true);
}
function sendDataByGet () {
    let userData = {
        LastName: $("#userLastName").val(),
        FirstName: $("#userFirstName").val(),
        Age: $("#userAge").val(),
        Address: $("#userAddress").val()
    };
    $.ajax({
        type: 'GET',
        data: JSON.stringify(userData),
        contentType: 'application/json',
        url: "/userGet?LastName=" + userData.LastName + "&FirstName="
            + userData.FirstName + "&Age=" + userData.Age + "&Address="
            + userData.Address,
        success: function (data) {
            console.log('GET Success');
            console.log(JSON.stringify(data));
        }
    })
    resetInputs();
};
function sendDataByPost() {
    let userData = {
        LastName: $("#userLastName").val(),
        FirstName: $("#userFirstName").val(),
        Age: $("#userAge").val(),
        Address: $("#userAddress").val()
    };
    $.ajax({
        type: 'POST',
        data: JSON.stringify(userData),
        contentType: 'application/json',
        url: "/userPost",
        success: function (data) {
            console.log('POST Success');
            console.log(JSON.stringify(data));
        }
    })
    resetInputs();
};
function resetInputs(){
    $('form input').val('');
    $('form input').attr('title', '');
    isReady();
}