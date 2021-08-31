// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
    // Remove the class to the body
    document.body.classList.remove('lightmode');
    // Add the class to the body
    document.body.classList.add('darkmode');
    // Update darkMode in localStorage
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    // Remove the class from the body
    document.body.classList.remove('darkmode');
    // Add the class to the body
    document.body.classList.add('lightmode');
    // Update darkMode in localStorage 
    localStorage.setItem('darkMode', null);
}

// If the user already visited enabled darkMode else disable darkMode
if (darkMode === 'enabled') {
    enableDarkMode();
} else {
    disableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
    // get their darkMode setting
    darkMode = localStorage.getItem('darkMode');

    // if it not current enabled, enable it
    if (darkMode !== 'enabled') {
        enableDarkMode();
        // if it has been enabled, turn it off  
    } else {
        disableDarkMode();
    }
});