const themeSwitcher = document.querySelector('#theme-switcher')
const theme = document.querySelector('#theme')

//set default mode to light
let mode = 'light';

//click on button to switch mode
themeSwitcher.addEventListener('click', function() {
    // If mode is light, apply dark background
    if (mode === 'light') {
        mode = 'dark';
        theme.setAttribute('class', 'dark');
    }

    //If mode is dark, apply light background
    else {
        mode = 'light';
        theme.setAttribute('class', 'light');
    }
})