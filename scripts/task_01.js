headerButton1.onclick = function () {
    if (text.style.opacity == '0') {
        headerButton1.innerHTML = 'Приховати текст'
        text.style.opacity = '1';
    } else {
        text.style.opacity = '0';
        headerButton1.innerHTML = 'Показати текст'
    }

}
headerButton2.onclick = function () {
    headerButton2.style.display = 'none';
}