const date = document.querySelector('#date')
const myname = document.querySelector('#name')
const message = document.querySelector('#message')
const playbutton = document.querySelector('#play-btn')
const musicButton = document.querySelector('#music-btn')
const musicList = document.querySelector('.music-container')
const addButton = document.querySelector('#add-btn')
console.log(playbutton)


function getTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    // let day = today.getDay();
    // let month = today.getMonth();
    // let year = today.getFullYear();

    date.innerHTML = `${addZeroes(hours)}:${addZeroes(minutes)}:${addZeroes(seconds)}`
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
    if(hours > 0 && hours <= 7) {
        const main = document.querySelector('.container')
        main.style["background-color"] = "rgba(0, 0, 90, 0.6)"
    }
    if(hours > 7 && hours <= 12) {
        const main = document.querySelector('.container')
        main.style["background-color"] = "rgba(90, 0, 0, 0.4)"
    }
    if(hours > 12 && hours <= 18) {
        const main = document.querySelector('.container')
        main.style["background-color"] = "rgba(100, 50, 10, 0.5)"
    }
    if(hours > 18 && hours <= 0) {
        const main = document.querySelector('.container')
        main.style["background-color"] = "rgba(0, 0, 90, 0.4)"
    }
    setTimeout(updateBackground, 60000);
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

function updateMessage() {
    let today = new Date();
    let hours = parseInt(today.getHours());
    if(hours > 0 && hours <= 7) {
       message.textContent = "Good night,";
       console.log("cacatsdsdsds");
    }
    if(hours > 7 && hours <= 12) {
       message.textContent = "Good morning, ";
       console.log("cacatsdsdsds");
    }
    if(hours > 12 && hours <= 18) {
       message.textContent = "Hello,";
       console.log("cacatsdsdsds");
    }
    if(hours > 18 && hours <= 0) {
        message.textContent = "Good evening, ";
        console.log("cacatsdsdsds");
    }
    setTimeout(60000, updateMessage);
}

function playSong() {
    
}

function displayMenu() {
    if (musicList.classList.contains("music-container-active")) {
        // hide
        musicList.classList.remove("music-container-active");
        musicList.classList.add("music-container-transition");
        musicList.classList.add("music-container-hidden");
      } else {
        // show
        musicList.classList.add("music-container-visible");
        musicList.clientWidth;
        musicList.classList.add("music-container-transition");
        musicList.classList.add("music-container-active");
    }
}



musicList.addEventListener('transitionend', function() {
    console.log("cacat");
    musicList.classList.remove("music-container-transition");
    musicList.classList.remove("music-container-visible");
    musicList.classList.remove("music-container-hidden");
}, false);


function getAudio() {
    
}

getTime();
getName();
updateBackground();
updateMessage();

myname.addEventListener('keypress', updateName);
myname.addEventListener('blur', updateName);
playbutton.addEventListener('click', playSong);
musicButton.addEventListener('click', displayMenu);
// addButton.addEventListener('click', getAudio);
