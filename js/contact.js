const button = document.querySelector('.btn');

button.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = 'lightgray'
    event.target.style.color = 'white'
    button.textContent = 'Click Me';
});


