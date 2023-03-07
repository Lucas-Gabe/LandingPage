const imagesPainel = document.querySelectorAll('.image-painel');
const arrowAdvance = document.getElementById('btn-advance');
const arrowBack = document.getElementById('btn-back');
let currentImage = 0;

function hideImage() {
    imagesPainel.forEach(image => {
        image.classList.remove('show')
    });
}

function showImage() {
    imagesPainel[currentImage].classList.add('show');
}

/* Hide all images and show next */
arrowAdvance.addEventListener('click', function() {

    if (currentImage === imagesPainel.length - 1) {
        console.log("This is the last image!");
        return;
    }
    currentImage++;
    
    hideImage();
    showImage();
});

arrowBack.addEventListener('click', function () {
    if (currentImage === 0) {
        console.log("This is the first image!");
        return;        
    }

    currentImage--;

    hideImage();
    showImage();
});
