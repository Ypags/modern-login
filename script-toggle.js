document.querySelector('.reg').addEventListener('click', function() {
    document.querySelector('.background-purple').classList.add('toggle-left');
});

document.querySelector('.log-in').addEventListener('click', function() {
    document.querySelector('.background-purple').classList.remove('toggle-left');
})



document.querySelector('.reg').addEventListener('click', function() {
    document.querySelector('.sign-in').classList.add('hide');
    document.querySelector('.sign-up').classList.remove('hide');
    document.querySelector('.sign-up').classList.add('not-hide');
    document.querySelector('.sign-in').classList.remove('not-hide');
});

document.querySelector('.log-in').addEventListener('click', function() {
    document.querySelector('.sign-up').classList.add('hide');
    document.querySelector('.sign-in').classList.remove('hide');
    document.querySelector('.sign-in').classList.add('not-hide');
    document.querySelector('.sign-up').classList.remove('not-hide');
})