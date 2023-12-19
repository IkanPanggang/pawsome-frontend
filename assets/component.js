function openProduct(evt, productPage) {
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(productPage).style.display = "block";
    evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("loggedIn")) {
        showLoggedInContent();
    } else {
        hideLoggedInContent();
    }
});

function onClickLogin() {
    localStorage.setItem("loggedIn", "true");
    window.location.replace('../profile-page/profile.html');
    return false;
}

function onClickLogout() {
    localStorage.clear()
    location.reload()
}

function hideLoggedInContent() {
    document.querySelector(".loggedInAction").style.display = "none";
}
function showLoggedInContent() {
    document.querySelector(".beforeLoggedInAction").style.display = "none";
    document.querySelector(".loggedInAction").style.display = "show";
}

function addQuantity(event) {
    event.previousElementSibling.value = Number(event.previousElementSibling.value) + 1;
}

function subtractQuantity(event) {
    event.nextElementSibling.value = Number(event.nextElementSibling.value) + 1;
}
