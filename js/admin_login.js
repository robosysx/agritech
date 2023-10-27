// script.js
var adminButton = document.getElementById("adminButton");
var userButton = document.getElementById("userButton");

const Show_admin_pannel = function () {
    window.location.href = "admin_panel.html";
};


adminButton.addEventListener( "click", Show_admin_pannel );


