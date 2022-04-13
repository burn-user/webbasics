const content = document.getElementById("content");
const Mmenu = document.getElementById("m-menu");
const con1 = document.getElementById("contentHTML");
const con2 = document.getElementById("contentCSS");
const con3 = document.getElementById("contentPractice");
const con4 = document.getElementById("contentLearnMore");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
let html = "";
function closeALL() {
    con1.style.display = 'none';
    con2.style.display = 'none';
    con3.style.display = 'none';
    con4.style.display = 'none';
    b1.style.color = 'black';
    b2.style.color = 'black';
    b3.style.color = 'black';
    b4.style.color = 'black';
}
function openHTML() {
    closeALL();
    con1.style.display = 'block';
    b1.style.color = 'blue';
}
openHTML();
function openCSS() {
    closeALL();
    con2.style.display = 'block';
    b2.style.color = 'blue';
}
function practice() {
    closeALL();
    con3.style.display = 'block';
    b3.style.color = 'blue';
}
function learnmore() {
    closeALL();
    con4.style.display = 'block';
    b4.style.color = 'blue';
}

const slider = document.getElementById("practice-slider");
let n = 0;
const picturesArr = [
    'site-1.png',
    'site-2.png',
    'site-3.png',
    'site-4.jpg',
    'site-5.png',
    'site-6.png',
    'site-7.png',
    'site-8.png'
];
const textArr = [
    '1) Создайте текстовый файл.',
    '2) Смените имя файла на "index.html".',
    '3) Мы получили файл с расширением ".html".',
    '4) Нажмите правую кнопку мыши и выберите "Открыть с помощью > Блокнот".',
    '5) Открыв файл, вы можете прописать в нём любой HTML-код.',
    '6) Затем откройте файл с помощью браузера. В результате вы получите веб-страницу.',
    'Теперь вы можете добавлять теги, увеличивать количество информации, тем самым усложняя свой веб-сайт.',
    ' '
];
function display() {
    slider.innerHTML = `
    <img class="slider-image" src="style/${picturesArr[n]}">
    <div class="slider-container">
        <button onclick="goBack()">Назад</button>
        <button onclick="goForward()">Вперёд</button>
    </div>
    <div class="slider-text">${textArr[n]}</div>
    `
}
display();
function goBack() {
    if (n == 0) {
        n = 7;
        display();
    } else {
        n--;
        display();
    }
}
function goForward() {
    if (n == 7) {
        n = 0;
        display();
    } else {
        n++;
        display();
    }
}

function Mshowmenu() {
    Mmenu.style.display = "flex";
}
function Mclosemenu() {
    Mmenu.style.display = "none";
}
function MopenHTML() {
    closeALL();
    con1.style.display = 'block';
    Mclosemenu();
}
function MopenCSS() {
    closeALL();
    con2.style.display = 'block';
    Mclosemenu();
}
function Mpractice() {
    closeALL();
    con3.style.display = 'block';
    Mclosemenu();
}
function Mlearnmore() {
    closeALL();
    con4.style.display = 'block';
    Mclosemenu();
}