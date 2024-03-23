let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myGif = document.querySelector('.item2');

myGif.onclick = function () {
    var mySrc = myGif.getAttribute('src');
    if (mySrc === "gifs/kurukuru-kururing.gif") {
        myGif.setAttribute("src", "gifs/kurukuru-kafka-small.gif");
    } else {
        myGif.setAttribute("src", "gifs/kurukuru-kururing.gif");
    }
};
