const colores = ['bluesky','green','dark','purple','brown','black']

function randomColor(length){
    return Math.floor(Math.random() * length)
}

const btn = document.getElementById('btn');

btn.onclick = function(){
    document.body.style.backgroundColor = colores[randomColor(colores.length)]
}

