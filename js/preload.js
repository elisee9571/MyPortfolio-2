const numb = document.querySelector('.number');

window.addEventListener('load', () => {
    var count = 0;
    var counter = setInterval(() => {
        if (count < 101) {
            numb.textContent = count + "%";
            count++
        } else {
            clearInterval(counter);
            document.querySelector('.preload').classList.add('fade-out');
        }
    }, 50);
});