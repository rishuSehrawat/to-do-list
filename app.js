document.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        addTask();
    }
});

document.querySelector('.submit').addEventListener('click', addTask);

function addTask() {
    var input = document.querySelector('input');
    var id = getRandomId();
    if (input.value) {
        document.querySelector('.toDoList').insertAdjacentHTML('beforeend', '<li id="' + id + '"><div id="someThing">' + input.value + '</div><div class="cloeItem" style="float:right;"><button onclick="closeThis(this)"><i class=" fas fa-times" style="cursor:pointer;"></i></button></div></li>');
        document.getElementById(id).addEventListener('click', function () {
            this.classList.toggle('active');
        });
        input.value = '';
        input.focus();
    };
};

str = 'abcdefghijlklmnopqrstuvwxyz123456789';

function getRandomId() {
    var result = '';
    for (let i = 0; i < 10; i++) {
        result += str[Math.floor(Math.random() * str.length)];
    };
    return result;
};

function closeThis(elem) {
    elem.parentNode.parentNode.style.display = 'none';
}