const heart = document.getElementById('heart');
    const modal = document.getElementById('myModal');
    const closeBtn = document.getElementsByClassName('close')[0];

    window.addEventListener('DOMContentLoaded', () => {
        const audio = document.getElementById('myAudio');
        audio.play();
    });

    heart.addEventListener('click', () => {
        heart.style.color = 'blue'; 
        document.body.style.backgroundColor = '#fce0d9'; 
        modal.style.display = 'block'; 
    });

    closeBtn.addEventListener('click', () => {
        modal.style.animationName = 'fadeOut'; 
        setTimeout(() => {
            modal.style.display = 'none'; 
            modal.style.animationName = ''; 
        }, 500); 
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeBtn.click(); 
        }
        
    });

    var a = +alert('Перед началом включи песню сверху слева, приятного чтения)')
    console.log(a);

