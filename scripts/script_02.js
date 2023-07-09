function makeRedLinks() {
    let elements = document.querySelectorAll('li>a');
    for (let i = 0; i < elements.length; i++) {
        if ((elements[i].innerHTML.includes('http://') || elements[i].innerHTML.includes('ftp://'))
        && !elements[i].innerHTML.includes('http://internal.com')) {
            elements[i].classList.add('externalRed');
        }

    }
}