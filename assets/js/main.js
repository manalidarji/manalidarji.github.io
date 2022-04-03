let mobMenu = document.getElementById('mob-header-menu');

document.getElementById('hamburger').addEventListener('click', function(e){
    e.preventDefault;
    mobMenu.classList.add('active');
})

document.getElementById('close-mob-menu').addEventListener('click', function(e){
    e.preventDefault;
    mobMenu.classList.remove('active');
})

