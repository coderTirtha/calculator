var input = document.querySelector('.input');
var btn = document.querySelectorAll('.number');

for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;
        input.value += btntext;
    });
}

function sin() {
    input.value = Math.sin(input.value);
}

function cos() {
    input.value = Math.cos(input.value);
}

function tan() {
    input.value = Math.tan(input.value);
}

function log() {
    input.value = Math.log(input.value);
}

function sqrt() {
    input.value = Math.sqrt(input.value);
}

function square() {
    input.value = Math.pow(input.value, 2);
}

function qube() {
    input.value = Math.pow(input.value, 3);
}

function qbrt() {
    input.value = Math.pow(input.value, 1 / 3);
}

function nverse() {
    input.value = Math.pow(input.value, -1);
}

function pi() {
    input.value = 3.14159265359;
}

function e() {
    input.value = 2.71828182846;
}

function abs() {
    input.value = Math.abs(input.value);
}

function fact() {
    var i, num, f;
    f = 1
    num = input.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    i = i - 1;
    input.value = f;
}

function backspc() {
    input.value = input.value.substr(0, input.value.length - 1);
}

function ac() {
    input.value = '';
}

function equal() {
    input.value = eval(input.value);
}