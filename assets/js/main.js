async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split('');
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      document.getElementById(eleRef).innerHTML += letters[i];
      i++;
    }
    return;
}    
function waitForMs(ms) {
return new Promise(resolve => setTimeout(resolve, ms))
}

// typing effect for hero section
typeSentence('I am Manali Darji.', 'about-title', 180);


let mobMenu = document.getElementById('mob-header-menu');
document.getElementById('hamburger').addEventListener('click', function(e){
    e.preventDefault;
    mobMenu.classList.add('active');
})

document.getElementById('close-mob-menu').addEventListener('click', function(e){
    e.preventDefault;
    mobMenu.classList.remove('active');
})