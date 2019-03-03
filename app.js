var idArr = [];


document.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        addTask();
    }
});

document.querySelector('.submit').addEventListener('click', addTask);

function addTask() {
    var input = document.querySelector('input');
    if (input.value) {
        var id = getRandomId();
        idArr.push(id);
        document.querySelector('.emptyStateContainer').style.display = 'none';
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
    console.log(elem.parentNode.parentNode.id);
    idArr.splice(idArr.indexOf(elem.parentNode.parentNode.id), 1);
    elem.parentNode.parentNode.parentNode.removeChild(elem.parentNode.parentNode);
    if (idArr.length < 1) {
        document.querySelector('.emptyStateContainer').style.display = 'block';
    }
}