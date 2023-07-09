let bool = false;
headerMenu.onclick = function () {
    bool = !bool;
    if (bool) headerMenu.style.height = "160px";
    else
        headerMenu.style.height = "50px";

}
