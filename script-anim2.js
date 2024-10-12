document.querySelector('.reg').addEventListener('click', function() {
    document.querySelector('.sign-in').classList.add('hide-scale');
    document.querySelector('.sign-up').classList.remove('hide-scale');
});

document.querySelector('.log-in').addEventListener('click', function() {
    document.querySelector('.sign-up').classList.add('hide-scale');
    document.querySelector('.sign-in').classList.remove('hide-scale');
})