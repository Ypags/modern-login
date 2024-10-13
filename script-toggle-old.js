document.querySelector('.reg').addEventListener('click', function() {
    document.querySelector('.background-purple').classList.add('toggle-left');
});

document.querySelector('.log-in').addEventListener('click', function() {
    document.querySelector('.background-purple').classList.remove('toggle-left');
})

document.querySelector('.reg').addEventListener('click', function() {
    document.querySelector('.sign-in').classList.add('hide-old');
    document.querySelector('.sign-up').classList.remove('hide-old');
});

document.querySelector('.log-in').addEventListener('click', function() {
    document.querySelector('.sign-up').classList.add('hide-old');
    document.querySelector('.sign-in').classList.remove('hide-old');
})