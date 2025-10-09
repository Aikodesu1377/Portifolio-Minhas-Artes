// logica.js

let resultados = document.getElementById("grid-artes");
resultados.innerHTML = ''; 

for (let dado of dados) {
    const arteDiv = document.createElement('div');
    arteDiv.classList.add('arte');

    const img = document.createElement('img');
    img.src = dado.pathArte;
    img.alt = "oc";
    const downloadButton = document.createElement('a'); 
    downloadButton.href = dado.pathArte; 
    downloadButton.download = dado.pathArte.split('/').pop();
    downloadButton.classList.add('download-button');
    downloadButton.innerHTML = 'Download'; 
    downloadButton.target = '_blank'; 
    arteDiv.appendChild(img);
    arteDiv.appendChild(downloadButton);
    resultados.appendChild(arteDiv);
}
document.addEventListener('DOMContentLoaded', function() {
    const customCursor = document.getElementById('custom-cursor');
    
    if (!customCursor) return;
    document.addEventListener('mousemove', (e) => {
        customCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    });
    document.addEventListener('mousedown', () => {
        customCursor.classList.add('cursor-active');
    });
    document.addEventListener('mouseup', () => {
        customCursor.classList.remove('cursor-active');
    });

    const interactiveElements = document.querySelectorAll('a, button, .arte');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            customCursor.classList.add('cursor-active');
        });
        element.addEventListener('mouseleave', () => {
            customCursor.classList.remove('cursor-active');
        });
    });
    
    let ultimaPosicaoScroll = 0;
    const header = document.querySelector('header');
    const LIMITE_ROLANDO = 100;
    let isThrottled = false; 

    window.addEventListener('scroll', () => {
        if (isThrottled) return;
        
        isThrottled = true;

        setTimeout(() => {
            const posicaoScrollAtual = window.scrollY;

            if (posicaoScrollAtual > ultimaPosicaoScroll && posicaoScrollAtual > LIMITE_ROLANDO) {
                header.classList.add('header-hidden');
            } else {
                header.classList.remove('header-hidden');
            }

            ultimaPosicaoScroll = posicaoScrollAtual;
            isThrottled = false;
        }, 150);
    });
});