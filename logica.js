let resultados = document.getElementById("grid-artes");

console.log(resultados);

for (let dado of dados) {
    resultados.innerHTML += `
<div class="arte"><img src="${dado.pathArte}" alt="oc"></div>`
}

