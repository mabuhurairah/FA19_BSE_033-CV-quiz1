
$(document).ready(function(){
    window.onload = function() {
        movePhpBar(); 
        moveOfficeBar();
        moveWindowsBar(); 
        moveHtmlBar();
        moveCssBar(); 
        moveJsBar();
        educationList();
        typeWriter();
    };

    window.onscroll = function() {
        scrollBar()
    };

    $("#overlayOn").addClass("overlay");
    $("#overlayOn").prepend("<h1>Hello,</h1><u><h2 id='typer1'></h2></u>");
    $("#overlayOn").click(function(){
        $("#overlayOn").remove();
    });
    
});


var c = 0;
var txt1 = "I'm Full Stack Web Developer";
var speed = 150;
function typeWriter() {
    if (c < txt1.length) {
        document.getElementById("typer1").innerHTML += txt1.charAt(c);
        c++;
        setTimeout(typeWriter, speed);
    }
}

function educationList() { 
    var education_list = document.getElementsByClassName("education-list");
    var i;
    for (i = 0; i < education_list.length; i++) {
        education_list[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var dropdown = this.nextElementSibling;
            if (dropdown.style.maxHeight) {
                dropdown.style.maxHeight = null;
            } 
            else {
                dropdown.style.maxHeight = dropdown.scrollHeight + "px";
            } 
        });
    }
}

function movePhpBar() { 
    let a = 0;
    if (a == 0) {
        a = 1;
        let element1 = document.getElementById("phpBar");
        let width1 = 10;
        let id1 = setInterval(frame, 10);
        function frame() {
            if (width1 >= 80) {
                clearInterval(id1);
                a = 0;
            } 
            else {
                width1++;
                element1.style.width = width1 + "%";
                element1.innerHTML = width1 + "%";
            }
        }
    }
}

function moveHtmlBar() { 
    let c = 0;
    if (c == 0) {
        c = 1;
        let element3 = document.getElementById("htmlBar");
        let width3 = 10;
        let id3 = setInterval(frame, 10);
        function frame() {
            if (width3 >= 100) {
                clearInterval(id3);
                c = 0;
            } 
            else {
                width3++;
                element3.style.width = width3 + "%";
                element3.innerHTML = width3 + "%";
            }
        }
    }
}
function moveCssBar() { 
    let c = 0;
    if (c == 0) {
        c = 1;
        let element3 = document.getElementById("cssBar");
        let width3 = 10;
        let id3 = setInterval(frame, 10);
        function frame() {
            if (width3 >= 90) {
                clearInterval(id3);
                c = 0;
            } 
            else {
                width3++;
                element3.style.width = width3 + "%";
                element3.innerHTML = width3 + "%";
            }
        }
    }
}

function moveJsBar() { 
    let c = 0;
    if (c == 0) {
        c = 1;
        let element3 = document.getElementById("jsBar");
        let width3 = 10;
        let id3 = setInterval(frame, 10);
        function frame() {
            if (width3 >= 80) {
                clearInterval(id3);
                c = 0;
            } 
            else {
                width3++;
                element3.style.width = width3 + "%";
                element3.innerHTML = width3 + "%";
            }
        }
    }
}

function moveOfficeBar() { 
    let b = 0;
    if (b == 0) {
        b = 1;
        let element2 = document.getElementById("officeBar");
        let width2 = 10;
        let id2 = setInterval(frame, 10);
        function frame() {
            if (width2 >= 90) {
                clearInterval(id2);
                b = 0;
            } 
            else {
                width2++;
                element2.style.width = width2 + "%";
                element2.innerHTML = width2 + "%";
            }
        }
    }
}

function moveWindowsBar() { 
    let c = 0;
    if (c == 0) {
        c = 1;
        let element3 = document.getElementById("windowsBar");
        let width3 = 10;
        let id3 = setInterval(frame, 10);
        function frame() {
            if (width3 >= 70) {
                clearInterval(id3);
                c = 0;
            } 
            else {
                width3++;
                element3.style.width = width3 + "%";
                element3.innerHTML = width3 + "%";
            }
        }
    }
}

function scrollBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("topBar").style.width = scrolled + "%";
}



