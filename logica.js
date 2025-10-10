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