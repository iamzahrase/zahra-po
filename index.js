document.addEventListener('DOMContentLoaded',()=>{
    const themeToggle= document.getElementById('theme-toggle');
    const body= document.body;
    if(localStorage.getItem('theme')==='light'){
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeToggle.textContent='🌞'
    }
    themeToggle.addEventListener('click',()=>{
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');
        if(body.classList.contains('light-mode')){
            themeToggle.textContent="🌞";
            localStorage.setItem('them','light');
        } else{
            themeToggle.textContent ="🌙";
            localStorage.setItem('theme','dark')
        }
    });



});
