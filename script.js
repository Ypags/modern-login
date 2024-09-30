document.querySelector('.reg').addEventListener('click', function() {
    document.querySelector('.sign-in').classList.add('hide');
    document.querySelector('.sign-up').classList.remove('hide');
});

document.querySelector('.log-in').addEventListener('click', function() {
    document.querySelector('.sign-up').classList.add('hide');
    document.querySelector('.sign-in').classList.remove('hide');
})