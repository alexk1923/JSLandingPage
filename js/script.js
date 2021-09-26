const date = document.querySelector('#date')
const myname = document.querySelector('#name')
console.log(date)


function getTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    // let day = today.getDay();
    // let month = today.getMonth();
    // let year = today.getFullYear();

    date.innerHTML = `${hours}:${addZeroes(minutes)}:${addZeroes(seconds)}`
    setTimeout(getTime, 1000);
}

function addZeroes(x) {
    if(parseInt(x) < 10)
        return ('0' + x).toString();
    else
        return x;
}

 function updateBackground() {
    let today = new Date();
    let hours = parseInt(today.getHours());
    if(hours > 12) {
        const main = document.querySelector('.container')
        main.style["background-color"] = "rgba(0, 0, 90, 0.4)"
    }
 }

function getName() {
    if(localStorage.getItem('name')) {
        myname.textContent = localStorage.getItem('name');
    } else {
        myname.textContent = '[Enter your name]';
    }
    console.log(myname);
}

function updateName(e) {
    if(e.type === 'blur') {
        console.log(this.textContent);
        localStorage.setItem('name', this.textContent);
    } else {
        if(e.keyCode == 13) {
            localStorage.setItem('name', this.textContent);
            this.blur();
        }
    }
}

getTime();
getName();
updateBackground();

myname.addEventListener('keypress', updateName);
myname.addEventListener('blur', updateName);
