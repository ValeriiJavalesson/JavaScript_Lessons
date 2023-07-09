function insertValue() {
    let elements = document.querySelectorAll('li');
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = 'Рядок ' + (i + 1);
    }
    setValueOfCount(elements);
}
function clearValue() {
    let elements = document.querySelectorAll('li');
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = '';
    }
    let a = [];
    setValueOfCount(a);
}
function setValueOfCount(elements){
    let element = document.getElementById('footer-output');
    element.innerHTML = elements.length + ' pcs';
}

