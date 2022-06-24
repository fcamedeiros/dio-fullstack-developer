function changeMod() {
    changeClasses();
    changeTexts();
}

function changeClasses() {
    botao.classList.toggle(DARK_MODE);
    h1.classList.toggle(DARK_MODE);
    body.classList.toggle(DARK_MODE);
    footer.classList.toggle(DARK_MODE);
}

function changeTexts() {
    if(body.classList.contains(DARK_MODE)) {
        botao.innerHTML = 'Light Mode';
        h1.innerHTML = 'Dark Mode ON';
        return;
    }   
    
    botao.innerHTML = 'Dark Mode';
    h1.innerHTML = 'Light Mode ON';
}

const DARK_MODE = 'dark-mode';
const botao = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

botao.addEventListener('click', changeMod);